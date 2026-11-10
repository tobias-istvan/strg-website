# strg website

One-page static site for [strg](https://strg.app). Vanilla HTML, CSS and a little JS (copy button). No build step, no tracking.

- Site root: `public/`
- Fonts (Inter, JetBrains Mono; SIL OFL) are self-hosted in `public/assets/fonts/`.


## Local preview

    cd public && python3 -m http.server 8000

## Deploy (Cloudflare, from GitHub)

Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git:

- Framework preset: None
- Build command: (empty)
- Build output directory: `public`

Then add `strg.app` under Custom domains. `public/_headers` sets security and cache headers.
