# Abe Harry & Son: website design options

Four website templates for **Abe Harry & Son**, jewelers in Independence, Ohio, so the owners can pick the look they like before the real site is built.

Each template is a complete mini-site with six pages:

| Route (per template) | Page |
| --- | --- |
| `/templates/N` | Homepage |
| `/templates/N/rings` | Rings catalog with category, metal, stone and sort filters |
| `/templates/N/rings/[slug]` | Ring detail page (Add to Cart is a demo button, plus Inquire / Call) |
| `/templates/N/about` | About and services |
| `/templates/N/reviews` | Reviews (real Yelp reviews) |
| `/templates/N/contact` | Hours, map, and a demo contact form |

`/` is a chooser page that links to all four. A floating bar on every template page lets the client flip between designs.

| # | Template | Feel |
| --- | --- | --- |
| 1 | Classic & Elegant | Ivory, navy, gold, serif type |
| 2 | Modern Minimal | White space, light sans-serif, photo-first |
| 3 | Warm Heritage | Cream, walnut, copper, rounded, "& Son" family story |
| 4 | Bold Dark | Near-black, champagne gold, large display type |

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all pages are pre-rendered)
```

If `npm run dev` ever fails with a `@vercel/turbopack-next ... font` error right after a `npm run build`, delete the `.next` folder and start again.

## How it is organized

```
src/
  app/
    page.tsx                      chooser page (/)
    templates/[template]/...      the 6 routes; one set of files serves all 4 templates
  templates/
    config.ts                     the 4 templates (name, theme, swatches)
    styles.ts                     per-template class recipes (buttons, cards, headings)
    fonts.ts                      Google fonts for each template
  components/
    homes/                        one homepage per template (the biggest design differences)
    site/                         shared pieces: header, footer, catalog, product page, forms...
    ui/                           small building blocks
  data/
    business.ts                   name, address, phone, hours, services
    products.ts                   sample ring catalog (15 rings)
    reviews.ts                    real Yelp reviews
  app/globals.css                 the color theme for each template (CSS variables)
```

Colors and fonts live in `globals.css` (`[data-theme="..."]` blocks). Components use semantic classes like `bg-bg`, `text-fg`, `bg-accent`, `font-display`, so a theme change is one place.

**Add or tweak a template:** add an entry in `templates/config.ts`, a theme block in `globals.css`, fonts in `fonts.ts`, a style recipe in `styles.ts`, and a home component in `components/homes/`.

## What is real vs. placeholder

Real (from their public listing): business name, address, phone, hours, and the two Yelp reviews.

**Placeholder, confirm with the client before launch**
- Ring names, prices, descriptions and specs (`data/products.ts`). Set `SHOW_PRICES = false` in `data/business.ts` to show "Inquire for pricing" instead.
- Service list, About copy, and the "Honest advice / Patient service / Personal attention" values.
- Contact email (`hello@example.com`). It is only used by the demo form.
- All photos are free-to-use [Unsplash](https://unsplash.com) images referenced by id and hot-linked through `src/lib/image-loader.ts`. The people shown at the workbench are stock photos, not the owners. Replace with shop photos by putting files in `public/` and using their path (`/photos/ring-1.jpg`) in place of an Unsplash id.
- No logo yet. The header uses a text wordmark.

**Not connected on purpose (comes after the client picks a template)**
- Add to Cart and the contact form are demo-only and do not send or store anything.
- No accounts, database, or payments yet.

## Next steps once a template is chosen

1. Delete the three unused templates (and the chooser) and keep one theme.
2. Move `data/products.ts` into Supabase (`products`, `product_images` tables) and read from it in the pages.
3. Add Stripe Checkout for Add to Cart, and a Supabase table plus email for the contact form.
4. Add real photos, logo, and copy. Add more reviews.
5. Deploy (Vercel, Netlify, or Cloudflare Pages). Note that Vercel's free Hobby plan is for non-commercial use, so a live business site there is on the Pro plan; Netlify and Cloudflare Pages have more lenient free tiers.

Built with Next.js (App Router), TypeScript and Tailwind CSS v4.
