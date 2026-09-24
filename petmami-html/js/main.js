/* ============================================================================
   PetMami — static demo behaviour (replaced by .NET later)
   No inline JS anywhere: everything binds to ids / data-* hooks so the markup
   converts to Razor untouched.
   ========================================================================== */

/* ============================================================
   1. LANGUAGE TOGGLE (EN ⇄ AR with RTL)
   Every translatable element carries data-en / data-ar.
   .NET later: replace with .resx resources (see docs/razor-conversion-map.md).
============================================================ */
var LANG_KEY = 'petmami-lang';

function applyLanguage(lang) {
  var isAr = lang === 'ar';
  document.documentElement.lang = lang;
  document.documentElement.dir = isAr ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-en]').forEach(function (el) {
    var val = isAr ? el.dataset.ar : el.dataset.en;
    if (val) { el.textContent = val; }
  });
  document.querySelectorAll('[data-placeholder-en]').forEach(function (el) {
    el.placeholder = isAr ? el.dataset.placeholderAr : el.dataset.placeholderEn;
  });
  document.querySelectorAll('[data-html-en]').forEach(function (el) {
    el.innerHTML = isAr ? el.dataset.htmlAr : el.dataset.htmlEn;
  });

  try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* private mode */ }
}

function toggleLanguage() {
  applyLanguage(document.documentElement.lang === 'ar' ? 'en' : 'ar');
}

// The language switch lives in the profile (Account → Language), not in the header.
['langToggle', 'langToggleAccount', 'langToggleAccountMain'].forEach(function (id) {
  var btn = document.getElementById(id);
  if (btn) { btn.addEventListener('click', toggleLanguage); }
});

(function restoreLanguage() {
  var saved = 'en';
  try { saved = localStorage.getItem(LANG_KEY) || 'en'; } catch (e) {}
  applyLanguage(saved);
})();

/* ============================================================
   2. MOBILE DRAWER
============================================================ */
(function drawer() {
  var panel = document.getElementById('mobileDrawer');
  var backdrop = document.getElementById('drawerBackdrop');
  var openBtn = document.getElementById('menuBtn');
  var closeBtn = document.getElementById('drawerClose');
  if (!panel || !backdrop) { return; }

  function open() {
    panel.classList.remove('-translate-x-full', 'rtl:translate-x-full');
    backdrop.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    panel.classList.add('-translate-x-full', 'rtl:translate-x-full');
    backdrop.classList.add('hidden');
    document.body.style.overflow = '';
  }
  if (openBtn) { openBtn.addEventListener('click', open); }
  if (closeBtn) { closeBtn.addEventListener('click', close); }
  backdrop.addEventListener('click', close);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { close(); } });
})();

/* ============================================================
   3. HERO SLIDER (home page)
============================================================ */
(function slider() {
  var root = document.getElementById('heroSlider');
  if (!root) { return; }
  var slides = root.querySelectorAll('.pm-slide');
  var dots = root.querySelectorAll('.pm-dot');
  var i = 0, timer;

  function go(n) {
    i = (n + slides.length) % slides.length;
    slides.forEach(function (s, x) { s.classList.toggle('is-active', x === i); });
    dots.forEach(function (d, x) { d.classList.toggle('is-active', x === i); });
  }
  function play() { stop(); timer = setInterval(function () { go(i + 1); }, 6000); }
  function stop() { clearInterval(timer); }

  dots.forEach(function (d, x) { d.addEventListener('click', function () { go(x); play(); }); });
  var prev = document.getElementById('slidePrev');
  var next = document.getElementById('slideNext');
  if (prev) { prev.addEventListener('click', function () { go(i - 1); play(); }); }
  if (next) { next.addEventListener('click', function () { go(i + 1); play(); }); }
  root.addEventListener('mouseenter', stop);
  root.addEventListener('mouseleave', play);
  go(0);
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) { play(); }
})();

/* ============================================================
   4. DEAL COUNTDOWN — counts down to midnight
   .NET later: end time comes from the deal record.
============================================================ */
(function countdown() {
  var boxes = document.querySelectorAll('[data-countdown]');
  if (!boxes.length) { return; }
  function pad(n) { return String(n).padStart(2, '0'); }
  function tick() {
    var now = new Date();
    var end = new Date(now); end.setHours(24, 0, 0, 0);
    var diff = Math.max(0, Math.floor((end - now) / 1000));
    boxes.forEach(function (box) {
      box.querySelectorAll('[data-cd]').forEach(function (el) {
        var k = el.getAttribute('data-cd');
        el.textContent = pad(k === 'h' ? Math.floor(diff / 3600)
                           : k === 'm' ? Math.floor((diff % 3600) / 60)
                           : diff % 60);
      });
    });
  }
  tick();
  setInterval(tick, 1000);
})();

/* ============================================================
   5. CART: badge, steppers, add-to-cart, remove line
   .NET later: POST /api/cart/items etc.
============================================================ */
function setCartCount(n) {
  document.querySelectorAll('#cartBadge, [data-cart-count]').forEach(function (el) {
    el.textContent = n;
  });
}

document.addEventListener('click', function (e) {
  var el;

  /* quantity stepper (+ / −) */
  if ((el = e.target.closest('[data-qty]'))) {
    var input = el.parentElement.querySelector('input');
    var next = Math.max(1, (parseInt(input.value, 10) || 1) + parseInt(el.getAttribute('data-qty'), 10));
    input.value = next;
    input.dispatchEvent(new Event('change', { bubbles: true }));
    return;
  }

  /* add to cart */
  if ((el = e.target.closest('[data-add-to-cart]'))) {
    e.preventDefault();
    var badge = document.getElementById('cartBadge');
    setCartCount((parseInt(badge ? badge.textContent : '0', 10) || 0) + 1);
    toast(document.documentElement.lang === 'ar' ? 'تمت الإضافة إلى السلة' : 'Added to your cart');
    return;
  }

  /* wishlist heart */
  if ((el = e.target.closest('[data-wishlist]'))) {
    e.preventDefault();
    var on = el.classList.toggle('text-brand-coral');
    el.setAttribute('aria-pressed', on ? 'true' : 'false');
    var svg = el.querySelector('svg');
    if (svg) { svg.setAttribute('fill', on ? 'currentColor' : 'none'); }
    return;
  }

  /* remove a cart line */
  if ((el = e.target.closest('[data-remove-line]'))) {
    e.preventDefault();
    var line = el.closest('[data-cart-line]');
    if (line) {
      line.remove();
      toast(document.documentElement.lang === 'ar' ? 'تمت إزالة المنتج' : 'Item removed');
    }
    return;
  }

  /* single-select groups: chips, variants, delivery slots */
  if ((el = e.target.closest('[data-select-group] button'))) {
    if (el.disabled) { return; }
    var group = el.closest('[data-select-group]');
    group.querySelectorAll('button').forEach(function (b) { b.classList.toggle('is-active', b === el); });
    return;
  }

  /* tabs */
  if ((el = e.target.closest('[data-tab]'))) {
    var name = el.getAttribute('data-tab');
    var bar = el.closest('[data-tabs]');
    bar.querySelectorAll('[data-tab]').forEach(function (b) {
      var on = b === el;
      b.classList.toggle('border-brand-teal', on);
      b.classList.toggle('text-brand-tealdark', on);
      b.classList.toggle('border-transparent', !on);
      b.classList.toggle('text-gray-500', !on);
      b.setAttribute('aria-selected', on ? 'true' : 'false');
    });
    document.querySelectorAll('[data-tabpanel]').forEach(function (p) {
      p.hidden = p.getAttribute('data-tabpanel') !== name;
    });
    return;
  }

  /* product gallery thumbnails */
  if ((el = e.target.closest('[data-gallery-thumb]'))) {
    var main = document.getElementById('galleryMain');
    if (main) { main.src = el.getAttribute('data-full'); }
    document.querySelectorAll('[data-gallery-thumb]').forEach(function (b) {
      b.classList.toggle('border-brand-teal', b === el);
      b.classList.toggle('border-gray-200', b !== el);
    });
    return;
  }

  /* mobile filter panel */
  if (e.target.closest('#filterToggle')) {
    var box = document.getElementById('filterPanel');
    if (box) { box.classList.toggle('hidden'); }
    return;
  }

  /* horizontal scroller arrows */
  if ((el = e.target.closest('[data-scroll]'))) {
    var target = document.querySelector(el.getAttribute('data-scroll-target'));
    if (target) {
      var dir = el.getAttribute('data-scroll') === 'next' ? 1 : -1;
      if (document.documentElement.dir === 'rtl') { dir *= -1; }
      target.scrollBy({ left: dir * target.clientWidth * 0.85, behavior: 'smooth' });
    }
    return;
  }

  /* accordion (FAQ, product tabs on mobile) */
  if ((el = e.target.closest('[data-accordion]'))) {
    var body = el.nextElementSibling;
    if (body) { body.classList.toggle('hidden'); }
    var chev = el.querySelector('svg:last-of-type');
    if (chev) { chev.classList.toggle('rotate-180'); }
    return;
  }
});

/* ============================================================
   6. TOAST
============================================================ */
function toast(msg) {
  var wrap = document.getElementById('toasts');
  if (!wrap) {
    wrap = document.createElement('div');
    wrap.id = 'toasts';
    wrap.className = 'fixed bottom-24 md:bottom-6 start-4 z-50 flex flex-col gap-2';
    wrap.setAttribute('aria-live', 'polite');
    document.body.appendChild(wrap);
  }
  var el = document.createElement('div');
  el.className = 'bg-brand-navy text-white text-sm font-bold px-4 py-2.5 rounded-xl shadow-lg';
  el.textContent = msg;
  wrap.appendChild(el);
  setTimeout(function () { el.remove(); }, 2800);
}

/* ============================================================
   7. CHECKOUT — governorate → area (Kuwait)
   .NET later: GET /api/locations/areas?governorate=
============================================================ */
(function areas() {
  var gov = document.getElementById('governorate');
  var area = document.getElementById('area');
  if (!gov || !area) { return; }

  var AREAS = {
    capital:   ['Kuwait City', 'Sharq', 'Qibla', 'Dasman', 'Shuwaikh', 'Abdullah Al-Salem', 'Qadsiya', 'Shamiya'],
    hawalli:   ['Salmiya', 'Hawalli', 'Jabriya', 'Bayan', 'Mishref', 'Salwa', 'Rumaithiya', 'Shaab'],
    farwaniya: ['Farwaniya', 'Khaitan', 'Jleeb Al-Shuyoukh', 'Andalous', 'Riggae', 'Ardiya', 'Rabiya'],
    mubarak:   ['Mubarak Al-Kabeer', 'Qurain', 'Adan', 'Qusour', 'Sabah Al-Salem', 'Messila', 'Abu Futaira'],
    ahmadi:    ['Fahaheel', 'Mangaf', 'Abu Halifa', 'Fintas', 'Mahboula', 'Ahmadi', 'Sabahiya', 'Egaila'],
    jahra:     ['Jahra', 'Saad Al-Abdullah', 'Naeem', 'Qasr', 'Oyoun', 'Taima', 'Waha']
  };

  gov.addEventListener('change', function () {
    var list = AREAS[gov.value] || [];
    var label = document.documentElement.lang === 'ar' ? 'اختر المنطقة' : 'Select area';
    area.innerHTML = '<option value="">' + label + '</option>' +
      list.map(function (a) { return '<option>' + a + '</option>'; }).join('');
    area.disabled = !list.length;
  });
})();

/* ============================================================
   8. OTP INPUTS — auto-advance (login / checkout verification)
============================================================ */
(function otp() {
  var inputs = document.querySelectorAll('[data-otp] input');
  if (!inputs.length) { return; }
  inputs.forEach(function (input, idx) {
    input.addEventListener('input', function () {
      if (input.value && idx < inputs.length - 1) { inputs[idx + 1].focus(); }
    });
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Backspace' && !input.value && idx > 0) { inputs[idx - 1].focus(); }
    });
  });
})();

/* ============================================================
   9. MISC
============================================================ */
(function misc() {
  var y = document.getElementById('year');
  if (y) { y.textContent = new Date().getFullYear(); }
})();
