# Northstar AI Consultancy

A mobile-friendly, one-page lead-magnet website built with plain HTML, CSS,
and JavaScript.

## Website files

- `index.html` — page content and structure
- `styles.css` — layout, design, and responsive styles
- `script.js` — FormJS validation and enquiry interaction
- `public/og.png` — social sharing image

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The enquiry form uses FormJS for client-side validation and opens a prepared
email using the address in `data-recipient` on the form. Replace the placeholder
recipient before public promotion.
