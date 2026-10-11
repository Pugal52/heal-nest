# Aadhan's Heal Nest Health Care Clinic: Website

A responsive single-page website built with **React + Vite + TypeScript + Tailwind CSS** and Lucide icons.

## Quick start

```bash
npm install
cp .env.example .env     # optional, see below
npm run dev              # http://localhost:5173
npm run build            # production build in /dist
npm run preview          # serve the production build locally
```

Requires Node 18+.

## Project structure

```
public/            robots.txt, sitemap.xml, favicon, /images (logo crops + clinic photos, WebP)
src/data/site.ts   ALL content: clinic details, treatments, FAQs, gallery, legal text
src/components/    Navbar, Hero, About, Treatments (+TreatmentCard), Approach, WhyChoose,
                   Gallery (lightbox), FAQ, Contact (form), Location (map), Footer, Modal, etc.
src/lib/           env.ts (env variables), hooks.ts
index.html         title, meta, Open Graph, JSON-LD structured data
```

Edit wording, treatments, FAQs and phone numbers in `src/data/site.ts`; most of the site updates from there.

## Things to do before launch

1. **Replace `https://www.example.com`** with the real domain in `index.html` (canonical, Open Graph, JSON-LD), `public/robots.txt` and `public/sitemap.xml`.
2. **Add the direct Google reviews link** (and optionally real reviews), see "Appointments and Google reviews" below.
3. **Pin the exact map location.** The Location section is a static, illustrated map panel, not a live Google map. Tapping it and the "Get Directions" button open Google Maps. Set `VITE_MAPS_PLACE_URL` in `.env` to the clinic's exact Google Maps listing link so they open the right pin.
4. **Add herb / wellness-ingredient photos** to the gallery if you want them: put real photos in `public/images/` and add entries to `GALLERY` in `src/data/site.ts`.
5. **Review and finalise the Privacy Policy and Medical Disclaimer text** in `src/data/site.ts` under `LEGAL`. Both are marked PLACEHOLDER and should be reviewed by the clinic.

## Appointments and Google reviews

Appointments are booked by phone only: every "Call to Book" button is a `tel:` link to 9994333853 and there is no booking form.

The Reviews section links to the clinic's Google listing (`SITE.reviewsUrl` in `src/data/site.ts`; replace it with the direct Google reviews link if you have one). No rating or review text is invented or copied. The two Google reviews shown come from the `REVIEWS` array in `site.ts` (word for word, supplied by the clinic). Add more only with the reviewer's permission. To show an overall star rating, fill in `RATING_SUMMARY` with the exact figures from the live Google profile. For an automatic live feed you would need the Google Places API (requires an API key and a small backend or proxy).

## Deploying to Vercel (free Hobby plan)

**Option A: GitHub (recommended, auto-redeploys on every change)**
1. Create a GitHub repository and push this project (`.env` is git-ignored).
2. Go to vercel.com, sign up with GitHub, click *Add New, Project* and import the repository.
3. Vercel detects Vite automatically (settings are also in `vercel.json`). Click *Deploy*.

**Option B: Vercel CLI**
```bash
npm i -g vercel
vercel          # follow the prompts, then run `vercel --prod` for the live URL
```

After you get your URL (for example `heal-nest.vercel.app`, or your own domain under *Settings, Domains*), replace `https://www.example.com` in `index.html`, `public/robots.txt` and `public/sitemap.xml`, then redeploy.

## Logo and images

`public/images/logo-emblem.webp` and `logo-full.webp` are unaltered crops of the supplied logo artwork (the corner mark, phone number and address bar were cropped out). Clinic photos are the supplied treatment room, consultation room, entrance and signboard photos, resized to WebP. If you have the original transparent PNG/SVG of the logo, drop it in and update `Navbar.tsx`, `Footer.tsx` and `index.html`.

## Content and compliance notes

- No certifications, awards, patient numbers, testimonials, opening hours, practitioner names or qualifications appear anywhere. Add them only once verified.
- Treatment copy avoids cure and outcome claims, and every treatment points to professional assessment.
- Emergency guidance references 112 (India's emergency number).

## Accessibility and performance

Semantic landmarks, skip link, visible focus, labelled form controls with `aria-invalid` and live status messages, keyboard-operable menu, accordion, dialogs and lightbox (Esc, arrow keys), and `prefers-reduced-motion` respected. Images are lazy-loaded WebP with skeleton and error fallbacks. Fonts load from Google Fonts (Cormorant Garamond and Inter).
