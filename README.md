# Northstar AI Consultancy

A mobile-friendly, one-page lead-magnet website built with plain HTML, CSS,
and browser JavaScript. It does not use Node.js, npm, a framework, or a build
step.

## Website files

- `index.html` — page content and structure
- `styles.css` — layout, design, and responsive styles
- `script.js` — FormJS validation and enquiry interaction
- `og.png` — social sharing image

## Run locally

Open `index.html` directly in a browser, or serve this folder with any basic
static-file server.

The enquiry form loads FormJS from a browser CDN and opens a prepared email
using the address in `data-recipient` on the form. Replace the placeholder
recipient before public promotion.
