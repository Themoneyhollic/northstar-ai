<div align="center">

# Northstar AI

**A mobile-first lead-generation website for an AI business consultancy.**

[![Deploy static site to GitHub Pages](https://github.com/alfredang/northstar-ai/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/alfredang/northstar-ai/actions/workflows/deploy-pages.yml)
![HTML](https://img.shields.io/badge/HTML5-static-E34F26?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-responsive-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-browser_only-F7DF1E?logo=javascript&logoColor=111)

[Live Demo](https://alfredang.github.io/northstar-ai/) ·
[Report a Bug](https://github.com/alfredang/northstar-ai/issues) ·
[Request a Feature](https://github.com/alfredang/northstar-ai/discussions)

</div>

## Screenshot

![Northstar AI mobile home screen](screenshot.png)

## About

Northstar AI is a one-page consultancy landing page built to convert business
visitors into qualified enquiries. The lead magnet offers a complimentary
30-minute AI strategy call and a personalised AI Opportunity Map.

The project is deliberately lightweight: it uses plain HTML, CSS, and browser
JavaScript with no Node.js, npm, framework, database, or build step.

## Features

- Conversion-focused hero and lead-magnet offer
- AI Opportunity Map preview
- Consultancy outcomes and testimonial sections
- Mobile-first responsive layout
- FormJS validation loaded directly in the browser
- Pre-submit completeness hook for every visible enquiry field
- Spoken and visible post-submit confirmation
- Email-based enquiry handoff for static hosting
- Accessible form labels, focus states, and reduced-motion support
- Open Graph and X social-sharing metadata
- Automated GitHub Pages deployment

## Tech stack

| Layer | Technology |
| --- | --- |
| Structure | Semantic HTML5 |
| Styling | Responsive CSS3 |
| Interaction | Vanilla browser JavaScript |
| Form validation | FormJS via jsDelivr |
| Hosting | GitHub Pages and OpenAI Sites |
| Automation | GitHub Actions |

## Architecture

```text
Browser
├── index.html        Page structure and content
├── styles.css        Responsive visual system
├── script.js         FormJS validation, hooks, and enquiry flow
├── .agents/hooks/    Pre-submit validation and post-submit voice hooks
└── og.png            Social-sharing artwork
         │
         └── mailto:  Prepared enquiry opens in the visitor's email client
```

There is no application server or persistent database. Enquiries are prepared
for `angch@tertiaryinfotech.com` in the visitor's default email application.

## Project structure

```text
northstar-ai/
├── .agents/
│   ├── product-marketing.md
│   ├── commands/
│   │   └── github-push-secure.md
│   ├── hooks/
│   │   ├── pre-submit.js
│   │   └── post-submit.js
│   └── skills/
│       ├── frontend-design/
│       ├── github-push-secure/
│       ├── lead-magnets/
│       └── seo-audit/
├── .github/
│   └── workflows/
│       └── deploy-pages.yml
├── .openai/
│   └── hosting.json
├── index.html
├── styles.css
├── script.js
├── og.png
├── screenshot.png
├── worker.js          OpenAI Sites static-file adapter
└── README.md
```

## Getting started

No installation is required.

```bash
git clone https://github.com/alfredang/northstar-ai.git
cd northstar-ai
open index.html
```

You can also serve the folder with any basic static-file server.

## Enquiry delivery

The form validates the enquiry using FormJS and opens a prepared email to
`angch@tertiaryinfotech.com` for the visitor to review and send.

Before the email is prepared, the pre-submit hook requires every visible field
to be complete and valid. After a successful submission, the post-submit hook
shows and speaks a confirmation that Northstar AI will respond within three
business days.

## Deployment

Every push to `main` triggers
[the GitHub Pages workflow](.github/workflows/deploy-pages.yml). It prepares a
minimal artifact containing only the public website files and deploys it without
Node.js.

- GitHub Pages: <https://alfredang.github.io/northstar-ai/>
- OpenAI Sites: <https://northstar-ai-consultancy.sales531787.chatgpt.site/>

## Secure publishing skill

Invoke
[`$github-push-secure`](.agents/skills/github-push-secure/SKILL.md) to run the
project publishing workflow. It blocks exposed secrets, validates GitHub
project-page asset paths, tests desktop and mobile rendering, deploys through
GitHub Actions, and verifies the live page before reporting success.

Sensitive environment files, private keys, credentials, archives, and
third-party reference material are excluded through `.gitignore`.

## Project skills

Codex can invoke these repository-scoped workflows:

- [`$frontend-design`](.agents/skills/frontend-design/SKILL.md) — improve the
  conversion-focused visual design without changing the static technology stack.
- [`$lead-magnets`](.agents/skills/lead-magnets/SKILL.md) — optimize the
  Opportunity Map offer, enquiry form, qualification, and delivery journey.
- [`$seo-audit`](.agents/skills/seo-audit/SKILL.md) — audit both live
  deployments, technical SEO, on-page content, mobile performance, and trust.
- [`$github-push-secure`](.agents/skills/github-push-secure/SKILL.md) — scan,
  publish, deploy, and verify GitHub Pages.

The shared [product marketing context](.agents/product-marketing.md) keeps all
four skills aligned with Northstar AI’s audience, offer, evidence rules, visual
identity, and plain HTML/CSS/JavaScript constraints.

## Contributing

1. Fork the repository.
2. Create a focused branch.
3. Test the static site locally.
4. Open a pull request with a clear summary.

Use [GitHub Discussions](https://github.com/alfredang/northstar-ai/discussions)
for ideas and general questions.

## Developed by

[Tertiary Infotech Academy Pte Ltd](https://www.tertiaryinfotech.com/)

If this project is useful, consider starring the repository.
