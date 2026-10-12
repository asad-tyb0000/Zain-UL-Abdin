# Zain Ul Abdin Portfolio

Personal portfolio for **Zain Ul Abdin**, Head of IT and Senior Oracle Forms, Reports, APEX & PL/SQL Developer.

Built with Next.js (App Router) and plain CSS. No backend and no database. The CV is served as a static file from `public/`.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Edit content

All text (experience, clients, skills, contact details) lives in [`data/profile.ts`](data/profile.ts).

To update the CV, replace `public/Zain-Ul-Abdin-CV.pdf` and keep the same filename. Every download button links to it.

## Deploy to Vercel

1. Push this repo to GitHub.
2. In Vercel, choose **Add New → Project**, import the repo and click **Deploy**. Vercel detects Next.js on its own, so there is nothing to configure.
3. Optional: if you add a custom domain, set the environment variable `NEXT_PUBLIC_SITE_URL` (for example `https://zainulabdin.com`) and redeploy. Without it, the canonical URL, sitemap and Open Graph image use the Vercel production URL automatically.

## What's included

- SEO metadata, Open Graph and Twitter cards, and an auto-generated social preview image (`app/opengraph-image.tsx`)
- JSON-LD `Person` structured data
- `sitemap.xml`, `robots.txt` and web manifest
- Favicon and Apple touch icon
- Light and dark themes (follows the system setting and remembers the visitor's choice)
- Responsive layout, keyboard-accessible navigation and reduced-motion support
