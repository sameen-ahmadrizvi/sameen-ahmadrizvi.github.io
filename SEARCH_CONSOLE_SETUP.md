# Google Search Console setup — important after deployment

The website now contains canonical URLs, robots directives, an XML sitemap, Open Graph metadata, structured data, and crawlable internal navigation. These help search engines understand the site, but they do not force immediate indexing or ranking.

## 1. Deploy this entire folder to the root of the GitHub Pages repository

The repository should contain `index.html`, `sitemap.xml`, `robots.txt`, `assets/`, `css/`, and `js/` at the root.

## 2. Add the site to Google Search Console

Use the URL-prefix property:

`https://sameen-ahmadrizvi.github.io/`

For a GitHub Pages site, the HTML-file verification method is convenient: Search Console gives you a file named something like `google1234567890abcdef.html`. Put that exact file in the repository root, commit it, wait for GitHub Pages to deploy, then click **Verify** in Search Console.

Alternatively, use the HTML-tag verification method and paste the verification meta tag into the `<head>` of `index.html`.

## 3. Submit the sitemap

In Search Console → **Sitemaps**, submit:

`sitemap.xml`

The public URL is:

`https://sameen-ahmadrizvi.github.io/sitemap.xml`

## 4. Request indexing for the homepage

In Search Console → **URL Inspection**, inspect:

`https://sameen-ahmadrizvi.github.io/`

Run **Test live URL**, then choose **Request indexing**. After the homepage is processed, inspect the Publications and CogFusion pages as well.

## 5. Strengthen discovery

Keep the personal-website link on LinkedIn. If possible, also add the same website URL to the official SRM University–AP faculty profile, ORCID, Google Scholar profile, DBLP/ResearchGate where supported, conference bios, and future paper/project pages. Consistent links from authoritative academic profiles help search engines connect the website with the same researcher identity.

## 6. Check indexing

After Google has had time to crawl the site, search:

`site:sameen-ahmadrizvi.github.io`

Then search your full name:

`"Syed Sameen Ahmad Rizvi"`

A new site can take time to be crawled and ranked. Search Console's Page Indexing and URL Inspection reports are the authoritative way to diagnose whether Google has discovered and indexed each URL.
