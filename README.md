# Naksha Mehndi — Website

Next.js 15 (App Router) + Tailwind CSS 3 + Framer Motion. No backend, no database,
no environment variables required. Enquiries go to WhatsApp.

## Run on your computer

```bash
npm install
npm run dev        # open http://localhost:3000
npm run build      # production build (run this once before pushing to be safe)
```

Needs Node.js 18.18 or newer.

## Edit content — one file

Everything the client may change lives in **`src/config/siteConfig.js`**.
Rule: anything left empty (`""` or `[]`) is hidden on the website. Nothing placeholder is ever shown.

| What | Where in siteConfig.js | If empty |
|---|---|---|
| Phone / WhatsApp / email / hours | `CONFIRMED` | — |
| Services | `SERVICES` | — |
| Tagline, description, SEO text | `COPY` | — |
| Instagram, Facebook | `INSTAGRAM`, `OTHER_SOCIALS` | Facebook icon hidden |
| Location + Google Maps link | `LOCATION` | Location line hidden |
| Pricing | `PRICING.items` | Pricing section + menu link hidden |
| Customer reviews | `TESTIMONIALS` | Reviews section + menu link hidden |
| Privacy / Terms / Cancellation / Booking policy | `POLICIES.*.content` | Page returns 404, footer link hidden |
| Allow Google to list the site | `PUBLISHING.allowIndexing` | `false` = hidden from search engines |

Each section has a commented example right above it. Copy the example, fill it in.

## Photos

Put images in `public/images/` (keep file names lowercase, no spaces) and point to them in
`GALLERY`, `INSTAGRAM_IMAGES`, `IMAGES` or a review's `photo`. File names are case-sensitive on
Vercel: `Photo.JPG` and `photo.jpg` are different files.

## Logo

Replace `public/logo/nakshu-logo.jpg`, then run `npm run generate:brand` to rebuild the other
logo files, the browser icon and the link-preview image.

## Deploy: GitHub → Vercel

1. Push this folder to a GitHub repository (`.gitignore` already skips `node_modules` and `.next`).
2. On vercel.com choose **Add New → Project**, import the repository, leave every setting as detected
   (Framework: Next.js, Build command: `next build`) and click **Deploy**.
3. Every later `git push` redeploys automatically.

Custom domain: Vercel → Project → Settings → Domains. Then add an environment variable
`NEXT_PUBLIC_SITE_URL` = `https://www.yourdomain.com` and redeploy, so link previews and the sitemap
use the right address.

### Going live in Google

The site ships with `PUBLISHING.allowIndexing = false`, which tells search engines to stay away.
When everything is final, set it to `true`, push, and the site becomes searchable.
For a Google "business" listing also fill `LOCATION.streetAddress` and `LOCATION.locality`.

## Structure

```
src/config/siteConfig.js   all content
src/app/                   pages, layout, robots, sitemap
src/components/            sections (Hero, About, Services, Portfolio, Pricing, Testimonials, Contact …)
src/lib/                   WhatsApp links, menu links, SEO schema
public/images, public/logo photos and logo
scripts/generate-brand.mjs rebuilds logo files
```
