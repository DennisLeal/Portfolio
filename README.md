# Dennis Leal — Portfolio

Personal portfolio for Dennis Leal, an IEX Administrator with experience in workforce management, real-time operations, and technical troubleshooting.

Live site: <https://dennisleal.github.io/Portfolio/>

Profile, résumé-based experience, practical WFM work, public projects, LinkedIn recommendations, and supplied course certificates are maintained in this repository. Project descriptions are based on the supplied résumé and project carousel or on the linked public repositories.

## Stack

Vite 6, React 19, TypeScript, CSS custom properties, Three.js, GSAP, Lenis, React Router 7, Phosphor icons, and Poppins.

## Run locally

```bash
npm install
npm run dev
npm run build
npm run lint
```

`npm run build` runs the TypeScript check and creates the static site in `dist/`, including a GitHub Pages fallback so direct links and page refreshes continue to load the React app. GitHub Actions deploys the site to GitHub Pages when changes are pushed to `main`.

## Content and assets

- `src/data/siteContent.ts` — profile summary, support areas, experience, education, projects, certifications, and recommendations.
- `src/data/profile.ts` — home identity, profile image, social links, and summary stats.
- `public/projects/` — project previews from the supplied project carousel.
- `public/certifications/` — supplied LinkedIn Learning certificate images.
- `public/ProfilePhoto.png` — supplied profile image.
- The visitor count uses Hits.sh and counts page views, not unique people. See the Privacy Policy for its disclosure.

## Credits

- Contour background technique inspired by the landonorris.com site by OFF+BRAND. The simplex noise is Ashima Arts / Ian McEwan (MIT).
- Icons: [Phosphor](https://phosphoricons.com) (MIT). Third-party marks identify their respective products.
- Font: Poppins (SIL Open Font License).

## License

[PolyForm Noncommercial 1.0.0](LICENSE), plus one extra permission: you can use it for **your own** portfolio, even if that portfolio promotes your paid services.

What it does not allow without a commercial license: selling or reselling this template, or building portfolio sites for other people for payment. For a commercial license, email brewedops@gmail.com.

Versions up to tag `v1.0.0-mit` (commit d3c05da) were MIT and stay MIT. Everything after that is under the license above.
