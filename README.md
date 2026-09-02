# Dr Syed Sameen Ahmad Rizvi — Academic Website

A lightweight, responsive static academic website prepared for GitHub Pages.

## Pages

- `index.html` — Homepage
- `journey.html` — Journey So Far / biography / education / experience
- `publications.html` — Publications with Journal / Conference filtering
- `courses.html` — Courses taught + teaching philosophy
- `students.html` — Students mentored, grouped by BITS Pilani and SRM University–AP
- `cogfusion.html` — CogFusion lab page
- `contact.html` — Contact details + embedded Google Form
- `404.html` — Custom 404 page

## Deploy to GitHub Pages

1. Create a public GitHub repository named **`YOUR-USERNAME.github.io`**.
2. Upload the **contents of this folder** to the repository root. `index.html` must be at the root.
3. Commit the files to the `main` branch.
4. In GitHub, open **Settings → Pages**.
5. Choose **Deploy from a branch**.
6. Select **`main`** and **`/(root)`**, then save.
7. Your site will appear at `https://YOUR-USERNAME.github.io/` after GitHub finishes deployment.

## Important content links already configured

- University profile: https://www.srmap.edu.in/faculty/dr-syed-sameen-ahmad-rizvi/
- Google Scholar: https://scholar.google.com/citations?user=vFs1I9cAAAAJ&hl=en
- LinkedIn: https://in.linkedin.com/in/syed-sameen-ahmad-rizvi-phd-41b82972
- ORCID: https://orcid.org/0000-0002-3919-5074
- DBLP: https://dblp.org/pid/346/3086.html
- ResearchGate: https://www.researchgate.net/profile/Syed-Sameen-Ahmad-Rizvi
- Google Form: https://forms.gle/P7HZEnZfceSc9yFq9
- Institutional email: sameen.s@srmap.edu.in

## Contact form note

The site currently embeds the supplied Google Forms short link directly in `contact.html`, with a visible fallback link below it. Google may redirect the short URL internally. If the iframe does not render after deployment, open your Google Form and choose **Send → Embed (`<>`)**, then replace only the `src` value of the `<iframe class="google-form">` in `contact.html` with the full `...viewform?embedded=true` URL.

## Public CV

The current CV is stored at:

`assets/cv/Syed_Sameen_Ahmad_Rizvi_CV.pdf`

Replacing that file with a newer PDF using the same filename updates the CV download button automatically.

## Student photographs

Student images are stored in:

`assets/images/students/`

The site does **not** hot-link LinkedIn images; the local copies keep the page stable if LinkedIn changes image URLs.

## Main files to edit later

- Content: the relevant `.html` page
- Colors / visual styling: `css/styles.css`
- Mobile navigation / publication filter: `js/main.js`

No framework, build system, package manager, database or paid hosting is required.
