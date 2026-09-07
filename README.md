# Dr. Syed Sameen Ahmad Rizvi — Academic Website

Production-ready static website for GitHub Pages.

## Deploy

1. Create/use the repository `sameen-ahmadrizvi.github.io`.
2. Upload **the contents of this folder** to the repository root.
3. In GitHub: **Settings → Pages → Deploy from a branch → main → /(root)**.
4. Visit `https://sameen-ahmadrizvi.github.io/`.

## SEO included

- Descriptive page titles and meta descriptions
- Canonical URLs for every indexable page
- `robots.txt` with sitemap discovery
- `sitemap.xml` with all public pages
- Schema.org JSON-LD (`Person`, `WebSite`, page types, publications, courses, CogFusion organization)
- Open Graph and Twitter/X social-preview metadata
- 1200×630 social preview image
- Favicon, Apple touch icon, and web-app manifest
- Search-engine-friendly internal navigation
- `noindex` on the 404 page
- Accessible responsive navigation and reduced-motion support

## Search Console

Read `SEARCH_CONSOLE_SETUP.md` after deployment. **This step matters**: technical SEO makes the site indexable, but Search Console is the fastest way to verify discovery, submit the sitemap, and request indexing.

## Contact form

The current contact page uses the supplied Google Forms short URL and includes a direct-link fallback. If you later copy Google Forms → Send → Embed (`<>`) and obtain the full `docs.google.com/forms/.../viewform?embedded=true` URL, replace the iframe `src` in `contact.html` for the most reliable inline embed.

## Updating content

This site uses plain HTML, CSS, and JavaScript: no build step, package manager, or framework is required.
