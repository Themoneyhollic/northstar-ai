# Northstar AI product marketing context

## Business and website

Northstar AI is presented as a practical AI business consultancy for growing
businesses and ambitious teams. The website is a one-page lead-generation site,
not a SaaS application or automated assessment platform.

Public deployments:

- GitHub Pages: `https://alfredang.github.io/northstar-ai/`
- OpenAI Sites: `https://northstar-ai-consultancy.sales531787.chatgpt.site/`

Do not assume which deployment is the primary SEO URL. Confirm that choice
before adding canonical, sitemap, structured-data, or absolute social-image
URLs.

## Audience

Primary visitors are business owners, operations leaders, and functional
decision-makers who are interested in AI but need help choosing a practical,
high-value first use case. They value clarity, manageable risk, a credible
business case, and an executable next step more than technical novelty.

## Offer and conversion

The lead magnet is a complimentary 30-minute strategy call and a personalised
one-page AI Opportunity Map. The promised output includes:

- the top three AI opportunities for the visitor's business;
- an impact, effort, and risk scorecard;
- a recommended first pilot;
- a practical 90-day action plan.

The primary conversion is a completed enquiry form. The current static
implementation uses FormJS for browser validation and opens a prepared
`mailto:` message. It does not store leads, send the map automatically, connect
to a CRM, or verify email delivery.

## Positioning and voice

- Lead with practical business outcomes and decision clarity.
- Present AI as a focused operating improvement, not hype or magic.
- Use direct, calm, specific language for non-technical decision-makers.
- Keep the AI Opportunity Map as the central signature asset.
- Avoid generic AI imagery, jargon, inflated transformation claims, and vague
  promises to "unlock potential."

## Visual system

The established visual language uses deep navy, cobalt blue, coral, warm paper,
and cream. It combines bold editorial typography with an angled blue
Opportunity Map scorecard. Preserve this recognizable system unless the user
requests a rebrand.

## Evidence and integrity

- The existing testimonial is sample copy and must remain labelled until a
  verified client approves a real quote.
- Never invent client names, logos, download counts, conversion metrics, case
  studies, awards, certifications, urgency, or scarcity.
- Enquiries are addressed to `angch@tertiaryinfotech.com`.
- Do not claim automatic fulfilment or data storage while the form uses
  `mailto:`.

## Technical constraints

- Use plain HTML, CSS, and browser JavaScript only.
- Do not add Node.js, npm, a framework, a database, or a backend unless the user
  explicitly changes the project scope.
- Keep local asset references relative for GitHub project Pages under
  `/northstar-ai/`.
- Preserve responsive behavior, keyboard access, reduced-motion support, and
  mobile form text of at least 16px.
