---
name: tia-frontend-design-site
description: This site's own design system for Northstar AI, a static lead-generation site for an AI consultancy — navy, cobalt and coral on paper, built around the Opportunity Map. Load with the user-level tia-frontend-design skill.
---

# Northstar AI — Site Design System

In Claude Code, also load the user-level `tia-frontend-design` skill. It owns the group's rules: no dead space or gaps, no chips, no template layouts, an animated hero, generated images and a lighter theme by default. This file records how they apply on this site and wins on theme and look.

## Constraints

Read `.agents/product-marketing.md` before designing. Preserve the site as plain
`index.html`, `styles.css`, and browser-only `script.js`; do not introduce
Node.js, npm, a framework, or a build step.

Design around one job: move a qualified business visitor from AI uncertainty to
an enquiry for a complimentary 30-minute strategy call and personalised
one-page AI Opportunity Map.

- Preserve the established navy, cobalt, coral, paper, and cream palette unless
  the user requests a rebrand.
- Use the Opportunity Map as the signature visual rather than generic AI
  imagery, glowing brains, robots, circuit patterns, or stock dashboards.
- Keep CTA language consistent with the actual form and delivery mechanism.
- Treat the current testimonial as sample copy until a verified quote exists.
- Maintain visible focus, reduced-motion support, 44px touch targets, 16px
  mobile form text, and no horizontal overflow.
- Keep local assets relative so GitHub project Pages renders below
  `/northstar-ai/`.
- Test the complete page at desktop, 390px phone, and 768px tablet widths after
  material changes.

Approach this as the design lead at a small studio known for giving every client a visual identity that could not be mistaken for anyone else's. This client has already rejected proposals that felt templated, and is paying for a distinctive point of view: make deliberate, opinionated choices about palette, typography, and layout that are specific to this brief, and take one real aesthetic risk you can justify.

## Theme

Light, because the visitors are business owners evaluating a consultancy. Tokens are in `styles.css`.

| Token | Value |
|---|---|
| `--ink` | `#10233a` |
| `--ink-soft` | `#43556a` |
| `--blue` | `#3157d5` |
| `--coral` | `#ff6b55` |
| `--cream` | `#f7f4ed` |
| `--paper` | `#fffdf8` |
| `--line` | `#dbe1e8` |

## Known violations

Do not copy these. Fix them when you touch the file.

- **Hero:** the Opportunity Map preview is static, and `styles.css` has no animation. Animate the map with CSS, without adding a build step.
