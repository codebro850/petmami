# PetMami — HTML Website Development Plan

**Brand:** PetMami — *Happy Pets, Happy Life*  **Domain:** petmami.com
**Market:** Kuwait  **Languages:** English (LTR) + Arabic (RTL)
**Deliverable of this phase:** Static, production-quality HTML/CSS/JS templates, built so a .NET developer can convert them to Razor views (`.cshtml`) with minimal rework.
**Logo source:** `WhatsApp Image 2026-09-14 at 8.16.14 PM.jpeg`

---

## Table of Contents
1. [Market Research — Kuwait Pet E-commerce](#1-market-research--kuwait-pet-e-commerce)
2. [Brand Identity (from the logo)](#2-brand-identity-from-the-logo)
3. [Technology Stack for the HTML Phase](#3-technology-stack-for-the-html-phase)
4. [Project Folder Structure (.NET-ready)](#4-project-folder-structure-net-ready)
5. [.NET Integration Rules (must-follow)](#5-net-integration-rules-must-follow)
6. [Bilingual & RTL Strategy (English / Arabic)](#6-bilingual--rtl-strategy-english--arabic)
7. [Sitemap](#7-sitemap)
8. [Page-by-Page Specification](#8-page-by-page-specification)
9. [Component Library](#9-component-library)
10. [Kuwait-Specific Requirements](#10-kuwait-specific-requirements)
11. [Design System Tokens (CSS)](#11-design-system-tokens-css)
12. [Responsive, Accessibility & Performance](#12-responsive-accessibility--performance)
13. [SEO](#13-seo)
14. [Razor Conversion Map](#14-razor-conversion-map)
15. [Development Phases & Milestones](#15-development-phases--milestones)
16. [QA Checklist](#16-qa-checklist)
17. [Open Questions for the Client](#17-open-questions-for-the-client)
18. [Sources](#18-sources)
 nno
---

## 1. Market Research — Kuwait Pet E-commerce

### 1.1 Market snapshot
- The Kuwait pet market was about **USD 300M in 2025** and is forecast to reach **~USD 529M by 2034**. Growth comes from people treating pets as family, rising disposable income, and more awareness of pet health and nutrition.
- **Cats account for about 34% of the market** because they suit apartment living. **Cat content should get equal or greater prominence than dog content.**
- Dog and cat food imports grew at about **22.6% CAGR (2020–2024)**. Demand is rising for **premium, grain-free, organic and breed-specific** food.
- Grooming and hygiene products are about **9%** of the market, and demand for grooming *services* is growing.

### 1.2 Competitor analysis

| Competitor | Strengths to learn from | Gap PetMami can fill |
|---|---|---|
| **Petzone** (petzone.com) | Mega-menu by pet type (Cat, Dog, Bird, Fish, Small Animal, Reptile), Shop by Brand, services (grooming, aquarium), reward points, store locator, apps, EN/AR | Looks corporate and busy; not very warm or playful |
| **24 Seven Mega Store** | Free delivery over **10 KD**, delivery window 9:00–23:00, brand showcase, offers with countdowns, stock indicators | Generic design, weak brand personality |
| **Petsmarket** (app/marketplace) | 20,000+ products from 90+ shops, 24-hour delivery, planned services (grooming, vet, daycare, training) | Marketplace feel; no single brand voice |
| **Pet Planet Kuwait** | Same-day delivery until 10 PM | App-first |
| **PawApp** | Stores + vet clinics + grooming in one place | Discovery platform, not a store brand |
| **Talabat** (pet stores) | Real-time tracking, KNET/Apple Pay/COD/Tamara, subscription with free delivery | Pet shopping is a sub-category; no pet expertise |
| **ZUE, Smart Pet KW** | Local specialist stores | Smaller catalogues and UX |

### 1.3 What Kuwaiti shoppers expect (baseline features)
1. **Arabic and English with a proper RTL layout.** A mirrored layout alone isn't enough.
2. **KNET payment.** About 80% of online transactions in Kuwait use a KNET card. Also offer Visa/Mastercard, **Apple Pay** and **Cash on Delivery**. Buy-now-pay-later (Tabby/Tamara) is optional.
3. **Fast delivery:** same-day or next-day, with **delivery time slots**. A free-delivery threshold (market norm is about 10 KD) and delivery until late evening.
4. **Shop by Pet** (primary navigation) and **Shop by Brand** (Royal Canin, Hill's, Farmina, Applaws, Felix, Whiskas, Cesar, Kit Cat, Monge, etc.).
5. **Offers / Deals** page with countdowns.
6. **WhatsApp support button.** This is the dominant support channel in Kuwait.
7. **Loyalty / reward points.**
8. **Mobile-first design.** Most traffic is on phones, so keep app-download banners ready for later.
9. **Pet services** (grooming, vet consult, pet hotel) as a secondary revenue line.

### 1.4 PetMami positioning and differentiators
- **Tone:** warm, friendly, cute, trustworthy. This follows the logo: rounded shapes, a happy dog and cat, hearts.
- **Differentiators to design for:**
  - **"My Pets" profiles.** Customers add a pet (name, species, breed, age, weight), and the site recommends matching food and products.
  - **Autoship / Subscribe & Save** for food and litter, with a discount on repeat orders.
  - **Bundles** (for example a "New Kitten Starter Kit").
  - **Guides / blog** in both languages (feeding, Kuwait summer heat safety, etc.).
  - **Clean, calm product pages** with nutrition info, feeding guide and size/weight variants.

---

## 2. Brand Identity (from the logo)

### 2.1 Logo analysis
- **Wordmark:** "pet" in dark navy with a paw print inside the "p", and "mami" in teal. The letterforms are bold, rounded and geometric.
- **Illustration:** a golden-orange puppy with a teal collar and heart tag, and a grey tabby kitten waving.
- **Accents:** coral/pink hearts, teal "sparkle" strokes, and a coral pill containing *petmami.com*.
- **Tagline:** "Happy Pets, Happy Life" in a medium-weight geometric sans.

### 2.2 Color palette
> These values were estimated by eye from the JPEG. **Confirm them against the original vector logo file** before the build is final.

| Token | Hex (approx.) | Usage |
|---|---|---|
| `--pm-navy` | `#0F2B3C` | Primary text, headings, footer background, "pet" in the wordmark |
| `--pm-teal` | `#14A395` | **Primary brand / CTA color**, links, active states, "mami" |
| `--pm-teal-dark` | `#0E7F74` | CTA hover, focus ring |
| `--pm-teal-light` | `#E3F6F3` | Section backgrounds, badges |
| `--pm-coral` | `#F2705F` | **Secondary accent**: sale badges, "Add to cart" highlight, hearts/wishlist |
| `--pm-coral-light` | `#FDECE9` | Promo strip backgrounds |
| `--pm-gold` | `#E9A64A` | Dog-related accents, star ratings, loyalty points |
| `--pm-gold-light` | `#FDF3E3` | Soft card backgrounds |
| `--pm-gray` | `#8C9299` | Secondary text, borders (from the kitten) |
| `--pm-bg` | `#FFFCF8` | Page background (warm off-white) |
| `--pm-white` | `#FFFFFF` | Cards |
| `--pm-success` | `#2BA56B` | In stock, success |
| `--pm-danger` | `#D64545` | Errors, out of stock |

**Contrast rules:**
- Teal `#14A395` on white is below 4.5:1. Use it for large text, buttons with **white bold text at 16px or larger**, and icons.
- For small teal text on white, use `--pm-teal-dark`.
- Navy on white passes AAA.

### 2.3 Typography

| Role | English (LTR) | Arabic (RTL) |
|---|---|---|
| Display / headings | **Fredoka** (rounded, matches the wordmark) | **Baloo Bhaijaan 2** (rounded Arabic, matches the playful style) |
| Body / UI | **Nunito** | **Tajawal** (clear, very common on Kuwaiti/Gulf sites) |
| Numbers / prices | Nunito (tabular figures) | Use **Western digits (0-9)** in prices and phone numbers. This is the norm on Kuwait e-commerce sites. |

All fonts are free on Google Fonts. **Self-host them** in `wwwroot/fonts` for performance and privacy.

### 2.4 Visual language
- **Border radius:** large and soft. Cards 20px, buttons fully rounded (pill), inputs 12px.
- **Shadows:** soft and low-contrast (`0 6px 20px rgba(15,43,60,.08)`).
- **Decorative elements:** paw prints, small hearts and teal sparkle strokes from the logo, used sparingly as section dividers and empty-state art.
- **Photography:** real, bright, happy pets on light backgrounds. Include cats and dogs typical of Kuwait (Persian, Scottish Fold, British Shorthair, Husky, Pomeranian, Golden Retriever).
- **Illustration:** reuse the logo's puppy and kitten for empty cart, 404, success pages and loaders.
- **Icons:** rounded line icons (**Phosphor Icons**, "regular" weight), plus custom pet-type icons (cat, dog, bird, fish, small pet, reptile).

---

## 3. Technology Stack for the HTML Phase

| Concern | Choice | Why |
|---|---|---|
| Markup | **HTML5**, semantic | Maps 1:1 to Razor |
| CSS framework | **Bootstrap 5.3** (with the official **RTL build** `bootstrap.rtl.min.css`) | Default in ASP.NET templates; built-in RTL; grid and utilities the .NET team already knows |
| Custom styles | **SCSS** compiled to `site.css` (or plain CSS with custom properties) | Design tokens, logical properties |
| JavaScript | **Vanilla JS (ES6 modules)** plus Bootstrap bundle | No framework lock-in; easy to wire to .NET APIs later |
| Carousels | **Swiper.js** | Supports RTL (`dir="rtl"`) |
| Icons | **Phosphor Icons** (webfont or SVG sprite) | Rounded style matches the brand |
| Build (optional) | **Vite** or **npm scripts** (sass + postcss + autoprefixer) | Output goes straight into `wwwroot/` |
| Linting | HTMLHint, Stylelint, Prettier | Consistency |
| Version control | Git (repository not initialized yet) | — |

**Avoid:** jQuery-dependent plugins, inline `<style>`/`onclick` handlers, and CSS-in-JS. These make Razor conversion and CSP (Content Security Policy) harder.

---

## 4. Project Folder Structure (.NET-ready)

The folder layout mirrors **ASP.NET Core MVC** so files can be moved across directly.

```
petmami-html/
├── wwwroot/                         ← copied as-is into the .NET project
│   ├── css/
│   │   ├── site.css                 ← compiled output (shared)
│   │   └── site.rtl.css             ← Arabic overrides only (small)
│   ├── scss/
│   │   ├── _tokens.scss             ← colors, fonts, spacing, radii
│   │   ├── _base.scss
│   │   ├── _rtl.scss
│   │   ├── components/              ← _header.scss, _product-card.scss, ...
│   │   └── pages/                   ← _home.scss, _pdp.scss, _checkout.scss, ...
│   ├── js/
│   │   ├── site.js                  ← global init (header, search, cart drawer)
│   │   ├── i18n.js                  ← HTML-phase ONLY (language preview)
│   │   ├── modules/                 ← cart.js, filters.js, checkout.js, pdp.js ...
│   │   └── mock/                    ← HTML-phase ONLY: products.json, cart.json
│   ├── lib/                         ← bootstrap, swiper, phosphor (vendor)
│   ├── fonts/                       ← self-hosted woff2
│   ├── images/
│   │   ├── brand/                   ← logo.svg, logo-ar.svg, favicon, og-image
│   │   ├── icons/pets/              ← cat.svg, dog.svg, bird.svg ...
│   │   ├── illustrations/           ← empty-cart.svg, 404.svg ...
│   │   ├── banners/                 ← hero-en.webp, hero-ar.webp
│   │   ├── payments/                ← knet.svg, visa.svg, mastercard.svg, applepay.svg
│   │   └── placeholders/            ← product-placeholder.webp
│   └── i18n/                        ← HTML-phase ONLY
│       ├── en.json
│       └── ar.json                  ← same keys → become .resx files
│
├── Views/                           ← mirrors ASP.NET Views folder
│   ├── Shared/
│   │   ├── _Layout.html             ← master layout (becomes _Layout.cshtml)
│   │   ├── _Header.html
│   │   ├── _Footer.html
│   │   ├── _ProductCard.html
│   │   ├── _Breadcrumb.html
│   │   ├── _Pagination.html
│   │   ├── _CartDrawer.html
│   │   ├── _NewsletterBox.html
│   │   └── _WhatsAppButton.html
│   ├── Home/Index.html
│   ├── Catalog/Category.html, Search.html, Brands.html, Brand.html, Offers.html
│   ├── Product/Details.html
│   ├── Cart/Index.html
│   ├── Checkout/Index.html, Payment.html, Success.html, Failed.html
│   ├── Account/Login.html, Register.html, Otp.html, ForgotPassword.html
│   ├── MyAccount/Dashboard.html, Orders.html, OrderDetails.html, Addresses.html,
│   │            Pets.html, Wishlist.html, Rewards.html, Subscriptions.html, Profile.html
│   ├── Services/Index.html, Grooming.html, Booking.html
│   ├── Blog/Index.html, Post.html
│   ├── Pages/About.html, Contact.html, Faq.html, Delivery.html, Returns.html,
│   │         Terms.html, Privacy.html, StoreLocator.html
│   └── Errors/404.html, 500.html, Maintenance.html
│
├── preview/                         ← full assembled pages for client review
│   ├── en/index.html ...            ← generated (see §5.3)
│   └── ar/index.html ...
├── EmailTemplates/                  ← order-confirmation, shipped, otp, reset (EN/AR)
├── docs/
│   ├── PETMAMI_WEBSITE_DEVELOPMENT_PLAN.md
│   ├── razor-conversion-map.md
│   └── i18n-keys.md
└── package.json
```

---

## 5. .NET Integration Rules (must-follow)

> **Target framework:** confirm with the backend team whether this is **ASP.NET Core MVC / Razor Pages (.NET 8 or .NET 10 LTS)**, which is recommended, or legacy **ASP.NET MVC 5 on .NET Framework 4.8**. The rules below work for both.

### 5.1 Layout and partials
- Write **one master layout** (`_Layout.html`) containing `<head>`, header, footer, scripts, and a clearly marked body slot:
  ```html
  <main id="main-content">
    <!-- @RenderBody() -->
  </main>
  ```
- Every reusable block is a **separate partial file** and is marked in page previews:
  ```html
  <!-- PARTIAL:_ProductCard START  model: ProductCardViewModel -->
  ...
  <!-- PARTIAL:_ProductCard END -->
  ```
- Reserve **optional slots** for page-specific CSS/JS and meta: `<!-- @RenderSection("Styles", false) -->`, `<!-- @RenderSection("Scripts", false) -->`, `<!-- @RenderSection("Meta", false) -->`.

### 5.2 Dynamic data markers
- **Never hard-code business data inside logic.** Mark dynamic values so the .NET developer can find them:
  ```html
  <article class="product-card" data-product-id="{{Product.Id}}">
    <a href="/en/product/{{Product.Slug}}">
      <img src="/images/placeholders/product-placeholder.webp"
           alt="{{Product.Name}}" loading="lazy" width="300" height="300">
    </a>
    <h3 class="product-card__title">{{Product.Name}}</h3>
    <span class="price" data-price="{{Product.Price}}">{{Product.PriceFormatted}}</span>
  </article>
  ```
- Use `{{Model.Property}}` placeholder syntax **only in HTML comments or attributes** documented in `razor-conversion-map.md`. The visible preview uses realistic sample text.
- **Repeating items:** show 1 real item plus 3 or more duplicates, wrapped in:
  `<!-- LOOP:foreach Product in Model.Products START -->` … `<!-- LOOP END -->`
- **Conditionals:** `<!-- IF:Product.IsOnSale -->` … `<!-- ENDIF -->`

### 5.3 Forms
- Every form uses real `method`, `action`, `name` attributes that match expected ViewModel property names in **PascalCase** (`name="Email"`, `name="Address.Block"`).
- Include a placeholder for the anti-forgery token: `<!-- @Html.AntiForgeryToken() -->`.
- Each field gets an empty validation message element for ASP.NET's tag helpers:
  ```html
  <span class="field-validation-valid text-danger" data-valmsg-for="Email" data-valmsg-replace="true"></span>
  ```
- Client-side validation must work with **jQuery Unobtrusive Validation** later. Keep `data-val-*` attribute names free, and don't write a competing validation library.

### 5.4 JavaScript
- **No inline JS.** Behaviour attaches through `data-*` hooks (`data-action="add-to-cart"`, `data-qty-input`).
- All server calls go through **one API wrapper** (`js/modules/api.js`) with endpoint constants:
  ```js
  export const API = {
    cartAdd:    '/api/cart/items',
    cartUpdate: '/api/cart/items/{id}',
    wishlist:   '/api/wishlist',
    search:     '/api/search/suggest?q=',
    areas:      '/api/locations/areas?governorate=',
    slots:      '/api/delivery/slots?date=',
  };
  ```
  In the HTML phase, `api.js` returns data from `js/mock/*.json`. Later the .NET team only swaps the base URL and removes the mocks.
- Read CSRF tokens from `<meta name="csrf-token">` and send them in headers.
- Read language and direction from `document.documentElement.lang` and `dir`. Never hard-code them.

### 5.5 URLs and routing
- Use culture-prefixed URLs: `/en/...` and `/ar/...`. They map to ASP.NET Core `RouteDataRequestCultureProvider`.
- Use lowercase, hyphenated slugs: `/en/cats/cat-food/dry-food`, `/en/product/royal-canin-kitten-2kg`.
- Keep all links **root-relative** (`/images/...`) so they work under `wwwroot`.

### 5.6 Assets
- Give every image explicit `width`/`height` and use WebP with a JPG fallback via `<picture>`.
- Keep CSS/JS in external files only, so they work with ASP.NET bundling and `asp-append-version`.

---

## 6. Bilingual & RTL Strategy (English / Arabic)

### 6.1 Approach
- **One HTML template per page, not separate EN and AR copies.**
- `<html lang="en" dir="ltr">` or `<html lang="ar" dir="rtl">`, set by the server later.
- **All UI text uses translation keys:**
  ```html
  <button class="btn btn-primary" data-i18n="Cart.AddToCart">Add to Cart</button>
  ```
  - HTML phase: `i18n.js` swaps the text from `i18n/ar.json` for preview (`?lang=ar`).
  - .NET phase: becomes `@Localizer["Cart.AddToCart"]`, and `en.json`/`ar.json` convert directly to `SharedResource.en.resx` / `SharedResource.ar.resx`.
- **Key naming:** `Section.Element` in PascalCase (`Header.SearchPlaceholder`, `Checkout.Governorate`, `Validation.Required`).
- **Product and content data** (names, descriptions, blog posts) are **not** translation keys. They come from the database with `NameEn`/`NameAr` fields. Mark them with `{{Product.Name}}`.

### 6.2 RTL layout rules
1. Use **CSS logical properties** everywhere: `margin-inline-start`, `padding-inline-end`, `inset-inline-start`, `text-align: start`, `border-start-start-radius`. With these, most RTL work comes free.
2. Load `bootstrap.rtl.min.css` when `dir="rtl"`. Use Bootstrap's `ms-*`/`me-*`/`ps-*`/`pe-*` utilities, which are logical, rather than hard left/right.
3. **Mirror** directional icons (arrows, chevrons, "back" icons, progress steps) with `[dir="rtl"] .icon-directional { transform: scaleX(-1); }`.
4. **Don't mirror:** logos, product images, media play buttons, clocks, the checkmark, brand marks, or phone/price digits.
5. Carousels: initialize Swiper with the `dir` attribute. Slide order reverses automatically.
6. Mixed content (English brand names inside Arabic text): wrap in `<bdi>` or `<span dir="ltr">`. This applies to SKUs, emails, phone numbers (`+965 5xxx xxxx`) and prices.
7. **Fonts:** switch the font family on `:lang(ar)`. Arabic needs a slightly **larger line-height (1.7–1.8)** and must **never use letter-spacing**, because it breaks cursive letter joins.
8. **Logo:** provide an Arabic lock-up ("بت مامي") for the Arabic header if the brand owner approves. Otherwise the English logo is acceptable on the Arabic site.
9. **Language switcher:** show "العربية" on the English site and "English" on the Arabic site. It keeps the current page and swaps only the `/en/` ↔ `/ar/` prefix.
10. Test **every page in both directions** at every breakpoint.

### 6.3 Sample keys (`i18n/en.json` ↔ `i18n/ar.json`)

| Key | English | Arabic |
|---|---|---|
| `Brand.Tagline` | Happy Pets, Happy Life | حيوانات سعيدة، حياة سعيدة |
| `Header.SearchPlaceholder` | Search food, toys, brands… | ابحث عن طعام، ألعاب، ماركات… |
| `Nav.ShopByPet` | Shop by Pet | تسوق حسب الحيوان |
| `Nav.Brands` | Brands | الماركات |
| `Nav.Offers` | Offers | العروض |
| `Nav.Services` | Services | الخدمات |
| `Pet.Cat` / `Pet.Dog` | Cats / Dogs | القطط / الكلاب |
| `Pet.Bird` / `Pet.Fish` | Birds / Fish | الطيور / الأسماك |
| `Pet.SmallPet` / `Pet.Reptile` | Small Pets / Reptiles | الحيوانات الصغيرة / الزواحف |
| `Cart.AddToCart` | Add to Cart | أضف إلى السلة |
| `Cart.Checkout` | Checkout | إتمام الشراء |
| `Cart.FreeDeliveryProgress` | You're {0} KD away from free delivery | باقي {0} د.ك للحصول على توصيل مجاني |
| `Product.InStock` / `Product.OutOfStock` | In stock / Out of stock | متوفر / غير متوفر |
| `Product.SubscribeSave` | Subscribe & Save {0}% | اشترك ووفّر {0}% |
| `Checkout.Governorate` | Governorate | المحافظة |
| `Checkout.Area` | Area | المنطقة |
| `Checkout.Block` | Block | القطعة |
| `Checkout.Street` | Street | الشارع |
| `Checkout.Avenue` | Avenue (optional) | الجادة (اختياري) |
| `Checkout.House` | House / Building | المنزل / المبنى |
| `Checkout.CashOnDelivery` | Cash on Delivery | الدفع عند الاستلام |
| `Common.Currency` | KD | د.ك |

> **All Arabic copy must be reviewed by a native Gulf-Arabic copywriter** before launch.

---

## 7. Sitemap

```
Home
├── Shop by Pet
│   ├── Cats ─ Food (Dry, Wet, Kitten, Prescription) · Treats · Litter & Accessories ·
│   │          Toys · Scratchers & Furniture · Grooming · Health & Wellness ·
│   │          Carriers & Travel · Bowls & Feeders · Collars
│   ├── Dogs ─ Food · Treats & Chews · Toys · Beds · Collars & Leashes · Grooming ·
│   │          Health · Training · Carriers · Clothing
│   ├── Birds ─ Food · Cages · Accessories · Health
│   ├── Fish ─ Food · Aquariums · Filters & Pumps · Water Care · Decor · Lighting
│   ├── Small Pets ─ Rabbit · Hamster · Guinea Pig — Food · Bedding · Cages
│   └── Reptiles ─ Food · Terrariums · Heating & Lighting
├── Brands (A–Z) → Brand page
├── Offers & Deals
├── Bundles / Starter Kits
├── Services
│   ├── Grooming (booking)
│   ├── Vet Consultation (booking / partner clinics)
│   └── Aquarium setup & cleaning
├── Pet Guides (Blog) → Post
├── Search results
├── Cart → Checkout → Payment (KNET / Card / Apple Pay / COD) → Success | Failed
├── Account: Login · Register · OTP · Forgot password
├── My Account: Dashboard · Orders · Order details / tracking · Addresses ·
│               My Pets · Wishlist · Rewards · Subscriptions (Autoship) · Profile
└── Info: About · Contact · FAQ · Delivery info · Returns & Refunds ·
          Terms · Privacy · Store locator · 404 · 500 · Maintenance
```

---

## 8. Page-by-Page Specification

### 8.1 Global header (all pages)
1. **Announcement bar** (coral-light background, dismissible, rotating messages): "Free delivery on orders over 10 KD", "Same-day delivery before 6 PM".
2. **Main bar:**
   - Logo on the start side.
   - Search with **autosuggest** (products, brands, categories) in the center.
   - Icons on the end side: language switch, account, wishlist (with count), cart (with count and **mini-cart drawer**).
3. **Navigation:**
   - Shop by Pet **mega-menu**: pet icon + subcategories + 3 featured brands + a promo tile.
   - Brands, Offers, Bundles, Services, Pet Guides.
4. **Mobile:**
   - Sticky compact header with a hamburger that opens an off-canvas menu (slides from the start side, so from the right in RTL).
   - Search sits below the header.
   - **Bottom tab bar:** Home · Categories · Cart · Wishlist · Account.
5. **Delivery-area selector** (optional, phase 2): "Deliver to: Salmiya".

### 8.2 Global footer
- Newsletter sign-up with a playful illustration.
- Link columns: Shop · Customer Care · About PetMami · Services.
- Contact: WhatsApp, phone (+965), email, working hours (with the **Fri/Sat weekend** noted).
- Social icons: Instagram (primary in Kuwait), TikTok, Snapchat, X, YouTube.
- App-store badges (placeholder for later).
- Payment icons: **KNET**, Visa, Mastercard, Apple Pay, Cash.
- Copyright, CR (commercial registration) number placeholder, and legal links.
- **Floating WhatsApp button** on every page (end side, above the mobile tab bar).

### 8.3 Home page (in order)
1. **Hero slider:** 3 slides with **separate EN/AR banner images** (text baked into the image must be localized) and a CTA.
2. **Shop by Pet:** round icon tiles (Cats, Dogs, Birds, Fish, Small Pets, Reptiles) in the brand colors.
3. **USP strip:** Fast delivery · KNET & Apple Pay · Genuine products · Easy returns.
4. **Deals of the Day:** product carousel with a countdown timer.
5. **Shop by Category (Cats):** image tiles such as Dry food, Wet food, Litter, Toys.
6. **Best Sellers:** tabbed carousel (Cats / Dogs / All).
7. **Featured Brands:** logo carousel.
8. **"Tell us about your pet" banner:** CTA to create a pet profile and get recommendations.
9. **Subscribe & Save promo.**
10. **Starter Kits / Bundles.**
11. **Services teaser:** Grooming booking CTA.
12. **Pet Guides:** 3 latest blog cards.
13. **Customer reviews / Instagram feed** (the UGC grid is a placeholder).
14. **Newsletter.**

### 8.4 Category / product listing page (PLP)
- Breadcrumb, category title, short SEO intro (collapsible), subcategory chips.
- **Filters** (sidebar on desktop, bottom-sheet on mobile):
  - Brand, price range slider (KD), life stage (kitten/adult/senior), breed size, food type, special diet (grain-free, sensitive, weight control), flavor, pack size, rating, in stock only, on offer.
- **Toolbar:** result count, sort (Popularity, Newest, Price ↑/↓, Rating), grid/list toggle, active-filter chips with "Clear all".
- **Product grid:** 2 columns (mobile) / 3 (tablet) / 4 (desktop).
- **Pagination** plus an optional "Load more" button. URLs must be server-render friendly (`?page=2&brand=royal-canin`).
- **Empty state** with an illustration.

### 8.5 Product card
Image (hover swaps to a second image), badges (Sale −20%, New, Best Seller, Subscribe & Save), wishlist heart, brand, name (2-line clamp), rating stars and count, price and old price (KD, 3 decimals), variant hint ("3 sizes"), **Add to Cart** button with a quantity stepper after adding, and an out-of-stock state with "Notify me".

### 8.6 Product details page (PDP)
- **Gallery:** thumbnails, zoom, swipe on mobile.
- **Info column:**
  - Brand link, name, rating, SKU.
  - Price and discount.
  - **Variant selector** (weight/size/flavor as pills).
  - Quantity stepper.
  - **One-time purchase vs Subscribe & Save** radio (with frequency select: every 2/4/6/8 weeks).
  - Add to Cart, Buy Now, wishlist.
  - Delivery estimate ("Order within 2h 15m for same-day delivery").
  - Stock status and reward points earned.
- **"Suitable for" chips:** species, life stage, breed size.
- **Tabs / accordions:** Description · Ingredients & Guaranteed Analysis · **Feeding Guide (table by pet weight)** · Reviews · Delivery & Returns.
- **Frequently bought together** bundle and **Similar products** carousel.
- **Sticky add-to-cart bar** on mobile.
- Product structured data (JSON-LD) placeholder.

### 8.7 Cart
- Line items: image, name, variant, quantity stepper, price, remove, move to wishlist.
- Free-delivery progress bar.
- Coupon code field.
- Order summary: subtotal, discount, delivery fee, **total in KD**.
- Recommended add-ons (treats, toys).
- Empty-cart illustration (logo puppy and kitten).
- The **mini-cart drawer** offers the same actions in condensed form.

### 8.8 Checkout (single page, collapsible steps; guest checkout allowed)
1. **Contact:** name, **mobile (+965, 8 digits)**, email (optional), login prompt.
2. **Delivery address (Kuwait format):**
   - Governorate (select), Area (dependent select), Block, Street, Avenue/Jadda (optional), House/Building no., Floor, Apartment, Additional directions.
   - Optional **PACI number** and **map pin** (Google Maps placeholder).
   - Address type: Home / Office / Other. Saved addresses shown for logged-in users.
3. **Delivery method:** Same-day / Next-day / Scheduled. **Date and time-slot picker.** Express fee option.
4. **Payment:** **KNET** (default), Credit/Debit card, **Apple Pay** (shown only on supported devices), **Cash on Delivery**, and an optional BNPL placeholder (Tabby/Tamara).
5. **Review:** items, gift note (optional), terms checkbox, **Place Order**.

The order summary stays sticky on desktop and collapses on mobile.

**Payment gateway note:** KNET and cards are processed through a Kuwaiti gateway such as **MyFatoorah, Tap Payments, UPayments, Hesabe or Checkout.com**. The HTML only needs to provide:
- the redirect/loader page,
- the success page,
- the failed page, which must show the KNET-required transaction details: **Payment ID, Result, Transaction ID, Auth, Reference No., Amount, Date/Time**.

### 8.9 Order success / failure
- **Success:** celebration illustration, order number, summary, delivery slot, "Track order", and "Create account to earn points" for guests.
- **Failure:** reason, KNET transaction details, "Retry payment" and "Choose another method".

### 8.10 Authentication
- **Login:** mobile number + OTP (primary) *or* email + password. Social login placeholders (Google, Apple).
- **Register:** name, mobile, email, password, language preference, marketing opt-in.
- **OTP screen:** 4–6 digit input with auto-advance and a resend timer. Keep digit order LTR even on the Arabic page.
- **Forgot / Reset password.**

### 8.11 My Account
- **Dashboard:** greeting with pet avatars, recent orders, points balance, quick links.
- **Orders:** list with status badges (Placed, Confirmed, Out for delivery, Delivered, Cancelled, Returned). **Order details** with a tracking timeline and "Reorder".
- **Addresses:** CRUD using the Kuwait address form.
- **My Pets:** add/edit pet (photo, name, species, breed, gender, birth date, weight, allergies) with personalized recommendations.
- **Wishlist**, **Rewards** (balance, history, how to earn), **Subscriptions** (next delivery, skip, pause, change frequency, cancel), and **Profile & password** (with language preference).

### 8.12 Services
- **Services landing:** grooming packages (price cards by pet size), vet consult, aquarium services.
- **Booking flow:** choose service, pet, date/time, location (in-store / mobile grooming van at home), then confirm.

### 8.13 Content pages
- **Blog list:** categories (Cats, Dogs, Nutrition, Health, Kuwait Summer Tips) and a featured post.
- **Blog post:** reading time, table of contents, related products block, share buttons.
- **About:** story, mission, values, team, and the logo mascots.
- **Contact:** form, WhatsApp, phone, map, hours.
- **FAQ:** accordion grouped by Orders, Delivery, Payment, Returns, Account.
- **Delivery info:** areas, fees, times. **Returns policy**, **Terms**, **Privacy** (long-form text template with a sticky TOC).
- **Store locator:** list plus map (if physical stores exist).
- **404 / 500 / Maintenance:** brand illustration with search and home CTA.

### 8.14 Email templates (EN + AR, table-based, inline CSS)
Order confirmation · Payment failed · Order shipped / out for delivery · Delivered + review request · OTP · Password reset · Welcome · Subscription reminder · Back-in-stock.

---

## 9. Component Library

Build a **`/Views/Shared/StyleGuide.html`** page that shows every component in both LTR and RTL:

| Group | Components |
|---|---|
| Foundations | Colors, typography scale (EN + AR), spacing, radii, shadows, icons, pet icons |
| Buttons | Primary (teal), Secondary (outline), Accent (coral), Ghost, Icon button, Pill, Loading state, Disabled |
| Forms | Input, select, dependent select, textarea, checkbox, radio card, switch, quantity stepper, OTP input, phone input (+965), date/slot picker, range slider, validation states |
| Navigation | Header, mega-menu, off-canvas menu, mobile tab bar, breadcrumb, tabs, pagination, stepper |
| Commerce | Product card (grid/list/mini), price block, badge, rating, variant pills, mini-cart drawer, cart line, order summary, coupon box, free-delivery progress, countdown timer, payment method card, address card, order status timeline |
| Feedback | Toast (added to cart), alert, modal, bottom sheet, skeleton loader, empty state, spinner (paw-print animation) |
| Content | Hero slide, promo banner, category tile, brand logo tile, blog card, testimonial, accordion, newsletter box, WhatsApp float |

**Naming:** use **BEM** (`.product-card__title--sale`) with a `pm-` prefix on custom components so they don't collide with Bootstrap classes (`.pm-product-card`).

---

## 10. Kuwait-Specific Requirements

| Topic | Requirement |
|---|---|
| **Currency** | Kuwaiti Dinar, **3 decimal places** (1 KD = 1000 fils). Format: `KD 12.500` (EN) / `12.500 د.ك` (AR). |
| **Phone** | `+965` prefix plus 8 digits. Mobile numbers start with 4, 5, 6 or 9. Use `inputmode="tel"`. |
| **Address** | Governorate → Area → Block → Street → Avenue (opt.) → House/Building → Floor → Apt. Optional PACI no. |
| **Governorates** | Al Asimah (Capital), Hawalli, Al Farwaniyah, Mubarak Al-Kabeer, Al Ahmadi, Al Jahra. Each has its own area list, served from the API. |
| **Payments** | KNET (must-have), Visa/Mastercard, Apple Pay, Cash on Delivery; optional BNPL. |
| **Delivery** | Same-day / next-day / scheduled slots; free-delivery threshold (~10 KD market norm); evening delivery. |
| **Week / hours** | Weekend is **Friday–Saturday**. Show working hours accordingly. Prepare a **Ramadan hours** banner variant. |
| **Calendar** | Gregorian dates. Optional Hijri date display in Arabic is a nice-to-have. |
| **Seasonal campaigns** | Ramadan, Eid Al-Fitr, Eid Al-Adha, Kuwait National & Liberation Day (25–26 Feb), White Friday (Nov), Back-to-school, **summer heat pet-safety** content. Design banner slots for these. |
| **Support** | WhatsApp Business as the primary channel; phone; email. |
| **Social** | Instagram-first; also Snapchat and TikTok. |
| **Legal / compliance** | Commercial Registration no. in the footer; Terms, Privacy, Returns pages; cookie consent banner. Data handling should follow Kuwait's **CITRA Data Privacy Protection Regulation**, to be confirmed with legal counsel. Any sale of **live animals or veterinary medicines** needs a regulatory check (e.g., PAAAFR). Recommendation: launch with supplies only. |
| **Cultural** | Modest, family-friendly imagery; avoid religious symbols in promos unless it's a seasonal greeting; greet with "Ramadan Kareem" / "Eid Mubarak" banners. |

---

## 11. Design System Tokens (CSS)

```css
/* wwwroot/scss/_tokens.scss (output as CSS custom properties) */
:root {
  /* Brand */
  --pm-navy: #0F2B3C;
  --pm-teal: #14A395;
  --pm-teal-dark: #0E7F74;
  --pm-teal-light: #E3F6F3;
  --pm-coral: #F2705F;
  --pm-coral-light: #FDECE9;
  --pm-gold: #E9A64A;
  --pm-gold-light: #FDF3E3;
  --pm-gray: #8C9299;
  --pm-gray-100: #F4F5F6;
  --pm-gray-300: #DDE0E3;
  --pm-bg: #FFFCF8;
  --pm-white: #FFFFFF;
  --pm-success: #2BA56B;
  --pm-danger: #D64545;

  /* Typography */
  --pm-font-heading: "Fredoka", "Baloo Bhaijaan 2", system-ui, sans-serif;
  --pm-font-body: "Nunito", "Tajawal", system-ui, sans-serif;
  --pm-fs-xs: .75rem;  --pm-fs-sm: .875rem; --pm-fs-md: 1rem;
  --pm-fs-lg: 1.25rem; --pm-fs-xl: 1.5rem;  --pm-fs-2xl: 2rem; --pm-fs-3xl: 2.75rem;
  --pm-lh-body: 1.6;

  /* Spacing (4px base) */
  --pm-space-1: .25rem; --pm-space-2: .5rem; --pm-space-3: .75rem;
  --pm-space-4: 1rem;   --pm-space-6: 1.5rem; --pm-space-8: 2rem; --pm-space-12: 3rem;

  /* Shape */
  --pm-radius-sm: 8px; --pm-radius-md: 12px; --pm-radius-lg: 20px; --pm-radius-pill: 999px;
  --pm-shadow-sm: 0 2px 8px rgba(15,43,60,.06);
  --pm-shadow-md: 0 6px 20px rgba(15,43,60,.08);

  /* Layout */
  --pm-container: 1320px;
  --pm-header-h: 72px;
}

:lang(ar) {
  --pm-font-heading: "Baloo Bhaijaan 2", "Tajawal", system-ui, sans-serif;
  --pm-font-body: "Tajawal", system-ui, sans-serif;
  --pm-lh-body: 1.8;
}

/* Bootstrap overrides (Sass) */
/* $primary: #14A395; $secondary: #0F2B3C; $danger: #D64545; $warning: #E9A64A;
   $border-radius: 12px; $btn-border-radius: 999px; $font-family-base: var(--pm-font-body); */
```

---

## 12. Responsive, Accessibility & Performance

### 12.1 Breakpoints (Bootstrap)
`<576` mobile · `≥576` sm · `≥768` tablet · `≥992` desktop · `≥1200` wide · `≥1400` xl.
Design **mobile-first**. Test on iPhone SE/15, Galaxy S-series, iPad and 1440px desktop.

### 12.2 Accessibility (WCAG 2.2 AA)
- Semantic landmarks, a "Skip to content" link, one `<h1>` per page.
- Visible focus rings (teal-dark, 3px); keyboard support for mega-menu, drawers and modals (focus trap, Esc to close).
- `alt` text on all images (localized), `aria-label` on icon buttons (localized), `aria-live` for cart updates.
- Minimum 44×44px touch targets; color is never the only indicator.
- Respect `prefers-reduced-motion` for sliders and animations.

### 12.3 Performance budget
- LCP < 2.5s on 4G, CLS < 0.1, INP < 200ms. Lighthouse 90+ on mobile.
- WebP/AVIF images with `srcset`; `loading="lazy"` below the fold; the hero image preloaded.
- Self-hosted, subsetted `woff2` fonts with `font-display: swap`; preload one EN and one AR font.
- Load only the needed direction's Bootstrap CSS; `defer` all scripts; page-specific JS loaded per page.

---

## 13. SEO
- Per-page `<title>` and `<meta description>` placeholders (localized).
- `hreflang` tags: `en-KW`, `ar-KW` and `x-default`. Canonical URLs.
- **JSON-LD:** `Organization`, `WebSite` + `SearchAction`, `BreadcrumbList`, `Product` (+ `Offer` in KWD, `AggregateRating`), `FAQPage`, `Article`, and `LocalBusiness` for any stores.
- Open Graph / Twitter cards with `og-image` in both languages.
- Clean slugs (Arabic slugs optional; English slugs are simpler for both languages).
- `robots.txt` and `sitemap.xml` are generated by .NET later. Reserve the paths.

---

## 14. Razor Conversion Map

| HTML template marker | Razor equivalent (ASP.NET Core) |
|---|---|
| `Views/Shared/_Layout.html` | `Views/Shared/_Layout.cshtml` |
| `<!-- @RenderBody() -->` | `@RenderBody()` |
| `<!-- @RenderSection("Scripts", false) -->` | `@await RenderSectionAsync("Scripts", required: false)` |
| `<!-- PARTIAL:_ProductCard -->` | `<partial name="_ProductCard" model="item" />` or a View Component |
| `data-i18n="Cart.AddToCart"` | `@Localizer["Cart.AddToCart"]` (IViewLocalizer / shared resource) |
| `i18n/en.json`, `i18n/ar.json` | `Resources/SharedResource.en.resx`, `.ar.resx` |
| `{{Product.Name}}` | `@Model.Name` |
| `<!-- LOOP:foreach ... -->` | `@foreach (var p in Model.Products) { ... }` |
| `<!-- IF:Product.IsOnSale -->` | `@if (Model.IsOnSale) { ... }` |
| `href="/en/cart"` | `asp-controller="Cart" asp-action="Index"` (culture route value) |
| `<html lang="en" dir="ltr">` | `<html lang="@culture" dir="@(isRtl ? "rtl" : "ltr")">` |
| Bootstrap CSS switch | `@if (isRtl) { <link href="~/lib/bootstrap/css/bootstrap.rtl.min.css" /> }` |
| `<!-- @Html.AntiForgeryToken() -->` | `@Html.AntiForgeryToken()` / form tag helper |
| Form `name="Address.Block"` | `asp-for="Address.Block"` |
| `field-validation-valid` span | `<span asp-validation-for="Email"></span>` |
| `js/mock/*.json` | Delete; `api.js` points to real controllers |
| `<link href="/css/site.css">` | `<link href="~/css/site.css" asp-append-version="true" />` |

For **.NET Framework MVC 5**, use `@Html.Partial`, `@Resources.SharedResource.Key`, `@Styles.Render` / `@Scripts.Render` bundles and `@Html.TextBoxFor`. The same markers apply.

---

## 15. Development Phases & Milestones

| Phase | Scope | Output |
|---|---|---|
| **0. Discovery** (≈3 days) | Confirm answers in §17, collect vector logo, brand assets, product catalogue sample, payment gateway, delivery rules | Signed-off scope |
| **1. Design** (≈1.5–2 weeks) | Moodboard; Figma wireframes then UI for Home, PLP, PDP, Cart, Checkout, Account (mobile + desktop, EN + AR) | Approved Figma |
| **2. Foundation** (≈1 week) | Repo, build, tokens, fonts, Bootstrap theme + RTL, `_Layout`, header, footer, i18n loader, mock API, style-guide page | Style guide in EN/AR |
| **3. Core commerce pages** (≈2 weeks) | Home, PLP (filters), PDP, search, brands, offers, cart + drawer | Clickable shop |
| **4. Checkout & account** (≈1.5 weeks) | Checkout, payment result pages, auth/OTP, full My Account, My Pets, subscriptions | End-to-end flow |
| **5. Services & content** (≈1 week) | Services + booking, blog, info/legal pages, error pages, email templates | All pages |
| **6. QA & handover** (≈1 week) | Cross-browser/device, RTL audit, a11y, Lighthouse, Arabic copy review, `razor-conversion-map.md`, `i18n-keys.md` | Handover package to .NET team |

**Total: roughly 8–9 weeks** for one front-end developer plus a designer. Parallel work can shorten this.

---

## 16. QA Checklist

- [ ] Every page renders correctly in **EN/LTR and AR/RTL** at 360, 768, 1024 and 1440px
- [ ] No hard-coded `left`/`right` in custom CSS (use logical properties)
- [ ] Directional icons mirror; logos, digits and prices don't
- [ ] All UI strings have `data-i18n` keys present in **both** JSON files (script check for missing keys)
- [ ] Prices show 3 decimals and KD / د.ك correctly
- [ ] Kuwait address form: governorate → area dependency works; phone validation for +965
- [ ] KNET success/failure pages show all required transaction fields
- [ ] Forms have `name`, `method`, `action`, validation spans and an anti-forgery placeholder
- [ ] No inline JS/CSS; all JS behaviour uses `data-*` hooks
- [ ] Partials and loops are marked with the agreed comment syntax
- [ ] Keyboard navigation and screen-reader labels (EN + AR)
- [ ] Lighthouse mobile ≥ 90 (Performance, Accessibility, Best Practices, SEO)
- [ ] Chrome, Safari (iOS), Samsung Internet, Firefox, Edge
- [ ] HTML validates (W3C); Stylelint/Prettier pass
- [ ] Arabic copy reviewed by a native speaker
- [ ] Handover docs complete

---

## 17. Open Questions for the Client
1. .NET target: **ASP.NET Core (.NET 8/10)** or **.NET Framework 4.8 MVC 5**?
2. Payment gateway provider (MyFatoorah / Tap / UPayments / Hesabe / other)? Is BNPL needed?
3. Delivery rules: fee, free-delivery threshold, same-day cutoff time, slot times, areas served?
4. Physical store(s)? This decides whether the store locator and click-and-collect are needed.
5. Will PetMami offer **grooming/vet services** at launch or later?
6. Loyalty points rules and Subscribe & Save discount %?
7. Catalogue size and pet types at launch (live animals excluded?)
8. Is an Arabic logo lock-up wanted? Is the original vector (AI/SVG) logo available?
9. Mobile app planned? This affects account/OTP flows and app banners.
10. Who provides Arabic/English copy and product photography?

---

## 18. Sources
- [Petzone Kuwait](https://www.petzone.com/)
- [24 Seven Mega Store](https://24sevenmegastore.com/en/)
- [Petsmarket](https://www.petsmarket.com/) · [Petsmarket cats](https://www.petsmarket.com/cats) · [Petsmarket app](https://apps.apple.com/kw/app/petsmarket-we-get-you/id1317605618)
- [Pet Planet Kuwait](https://petplanetapp.com/)
- [PawApp](https://pawapp.net/)
- [ZUE Pet Supplies](https://www.zue.com.kw/) · [Smart Pet KW](https://www.smartpetkw.com/)
- [Talabat Kuwait – pet shops](https://www.talabat.com/kuwait/cuisine/pet-shop) · [Talabat FAQ](https://www.talabat.com/kuwait/faq)
- [Checkout.com – KNET](https://www.checkout.com/payment-methods/knet) · [Tap Payments – KNET](https://www.tap.company/en-us/products/payment-methods/knet)
- [Kuwait Pet Market Forecast 2034 – The Report Cubes](https://www.thereportcubes.com/report-store/pet-market-kuwait)
- [Kuwait Dog and Cat Food Market – 6W Research](https://www.6wresearch.com/industry-report/kuwait-dog-and-cat-food-market-2020-2026)
- [Kuwait Pet Food Market – 6W Research](https://www.6wresearch.com/industry-report/kuwait-pet-food-market-outlook)
- [GlobalPETS – Pet industry in the Middle East](https://globalpetindustry.com/article/pet-industry-middle-east/)
