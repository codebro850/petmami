# Razor conversion map

How each marker in the PetMami HTML template becomes Razor. Written for **ASP.NET Core MVC /
Razor Pages**; the .NET Framework MVC 5 equivalent is in the last column.

## 1. Structure

Each page is a complete HTML document. When converting, split it:

| Part of the file | Goes to |
|---|---|
| `<head>` … `</head>` | `Views/Shared/_Layout.cshtml` (title/description per page via a section or `ViewData`) |
| `<!-- PARTIAL: _OfferStrip -->` block | `Views/Shared/_OfferStrip.cshtml` |
| `<header class="pm-header">` … plus the mobile drawer | `Views/Shared/_Header.cshtml` |
| `<main>` … `</main>` | the page view (`Index.cshtml`, `Details.cshtml`, …) |
| `<footer class="pm-footer">`, WhatsApp button, tab bar | `Views/Shared/_Footer.cshtml` |

| HTML template | ASP.NET Core | MVC 5 |
|---|---|---|
| repeated header markup | `<partial name="_Header" />` | `@Html.Partial("_Header")` |
| `<!-- REPEATABLE: product card -->` | `<partial name="_ProductCard" model="item" />` | `@Html.Partial("_ProductCard", item)` |
| `<link rel="stylesheet" href="css/custom.css">` | `<link href="~/css/custom.css" asp-append-version="true" />` | `@Styles.Render("~/bundles/site")` |
| `<script src="js/main.js">` | `<script src="~/js/main.js" asp-append-version="true"></script>` | `@Scripts.Render("~/bundles/site")` |
| `href="product.html"` | `asp-controller="Product" asp-action="Details" asp-route-slug="@item.Slug"` | `@Url.Action("Details","Product")` |

**Tailwind:** the CDN script is fine for development. For production either keep the CDN or run the
Tailwind CLI once over the `.cshtml` files and ship a single built stylesheet — the class names do
not change either way. Move `wwwroot/` assets: `css/`, `js/`, `images/` go under `wwwroot/`.

## 2. Data binding

Repeated cards and rows exist in the templates only to fill the grid — keep **one** inside the loop.

| Template | Razor |
|---|---|
| `<article class="pm-product-card" data-product-id="1001">` | `data-product-id="@item.Id"` |
| product name, brand, price, rating | `@item.Name`, `@item.BrandName`, `@item.Price.ToString("F3")`, `@item.Rating` |
| `<!-- {{User.FirstName}} -->Noura` | `@Model.User.FirstName` |
| `{{Payment.PaymentId}}` (checkout-confirm) | `@Model.Payment.PaymentId` |
| badge blocks (`-20%`, `New`, `Out of stock`) | wrap in `@if (item.IsOnSale) { … }` etc. |

KWD is always **3 decimals** — use `ToString("F3")` with an invariant or `en-KW` culture, never the
Arabic culture's digits (Kuwaiti e-commerce uses Western digits).

## 3. Localization (EN / AR)

The template uses the `data-en` / `data-ar` convention:

```html
<span data-en="Add to cart" data-ar="أضف إلى السلة">Add to cart</span>
<input data-placeholder-en="Search..." data-placeholder-ar="ابحث..." placeholder="Search..." />
<span data-html-en="You're <b>2.750 KD</b> away" data-html-ar="باقي <b>2.750 د.ك</b>">…</span>
```

In .NET replace with resources:

```cshtml
<span>@Localizer["Cart.AddToCart"]</span>
<input placeholder="@Localizer["Header.SearchPlaceholder"]" />
```

A short script can walk the HTML, collect every `data-en` / `data-ar` pair and emit
`SharedResource.en.resx` / `SharedResource.ar.resx`, using a `Section.Key` naming scheme.

Setup:

```csharp
builder.Services.AddLocalization(o => o.ResourcesPath = "Resources");
builder.Services.AddControllersWithViews()
    .AddViewLocalization()
    .AddDataAnnotationsLocalization();

var cultures = new[] { new CultureInfo("en-KW"), new CultureInfo("ar-KW") };
app.UseRequestLocalization(new RequestLocalizationOptions
{
    DefaultRequestCulture = new RequestCulture("en-KW"),
    SupportedCultures = cultures,
    SupportedUICultures = cultures,
    RequestCultureProviders = { new RouteDataRequestCultureProvider { RouteDataStringKey = "culture" } }
});

app.MapControllerRoute("default", "{culture=en}/{controller=Home}/{action=Index}/{id?}");
```

Layout:

```cshtml
@inject IViewLocalizer Localizer
@{
    var culture = CultureInfo.CurrentUICulture.TwoLetterISOLanguageName;   // "en" | "ar"
    var isRtl   = culture == "ar";
}
<html lang="@culture" dir="@(isRtl ? "rtl" : "ltr")">
```

Product names, blog posts and category titles are **not** resource keys — they come from the
database as `NameEn` / `NameAr`:

```cshtml
<h3>@(isRtl ? item.NameAr : item.NameEn)</h3>
```

### RTL — already handled
- Tailwind logical utilities (`ms-*`, `me-*`, `ps-*`, `pe-*`, `start-*`, `end-*`) flip automatically with `dir`.
- `css/custom.css` mirrors the gradient scrims, the select arrow and the `.pm-flip` icons.
- `.pm-ltr` keeps prices, phone numbers, SKUs and OTP fields left-to-right inside Arabic text.
- Keep the `dir` attribute driven by the culture and nothing else needs doing.

## 4. Forms

| Template | Razor |
|---|---|
| `<!-- .NET: @Html.AntiForgeryToken() -->` | `@Html.AntiForgeryToken()` (or the form tag helper) |
| `<input id="Block" name="Address.Block">` | `<input asp-for="Address.Block" class="pm-input …" />` |
| `<span class="field-validation-valid" data-valmsg-for="FullName">` | `<span asp-validation-for="FullName"></span>` |
| `<form action="checkout-payment.html" method="post">` | `<form asp-controller="Checkout" asp-action="Payment" method="post">` |

Add `_ValidationScriptsPartial` on pages with forms. The template ships no validation library, so
nothing conflicts with jQuery Unobtrusive Validation.

### Expected ViewModels

```csharp
public record ProductCardViewModel(
    int Id, string Slug, string NameEn, string NameAr, string BrandName, string ImageUrl,
    decimal Price, decimal? OldPrice, double Rating, int ReviewCount,
    bool IsOnSale, bool IsNew, bool IsBestSeller, bool HasSubscription,
    bool InStock, int VariantCount);

public class KuwaitAddress          // matches the checkout form field names exactly
{
    public string Governorate { get; set; }   // capital|hawalli|farwaniya|mubarak|ahmadi|jahra
    public string Area { get; set; }
    public string Block { get; set; }
    public string Street { get; set; }
    public string Avenue { get; set; }
    public string House { get; set; }
    public string Floor { get; set; }
    public string Apartment { get; set; }
    public string Directions { get; set; }
    public string AddressType { get; set; }   // home|office|other
}
```

## 5. JavaScript hooks

`js/main.js` is a static demo. Keep the hooks, swap the bodies for real API calls.

| Hook | Where | Replace with |
|---|---|---|
| `data-add-to-cart` | product cards, product page | `POST /api/cart/items` |
| `data-qty="1" / "-1"` | steppers | `PUT /api/cart/items/{id}` |
| `data-remove-line` | cart lines | `DELETE /api/cart/items/{id}` |
| `data-wishlist` | product cards | `POST /api/wishlist` |
| `#governorate` → `#area` (`AREAS` map) | checkout | `GET /api/locations/areas?governorate=` |
| delivery slot buttons | checkout | `GET /api/delivery/slots?date=` |
| `data-countdown` | home, offers | deal end time from the database |
| `#langToggle` | header | culture route + `.resx`; delete the JS toggle |

Send the anti-forgery token with AJAX calls (read it from a `<meta name="csrf-token">` you add in
the layout, or from the hidden form input).

## 6. After conversion

Delete:
- the `data-en` / `data-ar` attributes once `.resx` is wired
- the language-toggle block in `js/main.js`
- demo data (hard-coded product cards, sample orders and pets)

Keep:
- `pm-*` semantic classes and every `data-*` hook
- `.pm-ltr` on prices, phone numbers, SKUs and order numbers
- `.pm-flip` on directional icons
- `width`/`height` on images and `loading="lazy"` below the fold
