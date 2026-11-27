# Val Kononoff

Storefront for courses, digital materials (PDFs / templates) and bookable consultations on QA & test automation.

## Managing products

All products, prices, promo badges and payment / booking links live in
`src/content/products.ts`. Set `checkoutUrl` on a product (Stripe Payment
Link, Gumroad, Calendly, …) to send the buy / book button there; while it is
empty the button opens a pre-filled email order. `SITE.bookingUrl` and
`SITE.questionUrl` control the header "Book a consultation" link and the
floating "Ask a question" button.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**, **TypeScript**, **Tailwind v4**
- Static, content-driven — no database; checkout is handled by external payment links

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or `--port 3001` if 3000 is taken).

## Build

```bash
npm run build
npm start
```

## Project structure

```
src/
  app/
    layout.tsx              # root layout: nav, content column, footer
    globals.css             # Tailwind v4 + theme tokens (light/dark)
    page.tsx                # / — bio
    work/page.tsx           # /work — projects
    music/page.tsx          # /music — releases
    writing/page.tsx        # /writing — articles index
    interests/page.tsx      # /interests — interests
  components/
    site-nav.tsx            # shared top nav
```

Each section page hardcodes its entries as a typed array at the top of the file — swap Lorem entries for real ones in place.

## Roadmap

- Real bio / work / music / interests copy
- MDX-backed `/writing/[slug]` so the writing index links to actual posts
- Deploy to Vercel
