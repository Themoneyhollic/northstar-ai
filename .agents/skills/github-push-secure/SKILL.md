---
name: github-push-secure
description: Securely publish a repository to GitHub and verify that a static website renders correctly on GitHub Pages. Use when asked to push, publish, deploy, or update this project on GitHub; run secret scanning, maintain the README and screenshot, configure repository metadata and Pages, validate project-subpath asset URLs, and test the deployed desktop and mobile site.
---

# GitHub Push Secure

Publish the current repository only after it passes security, documentation,
deployment, and live-rendering checks. Treat secret findings and broken
production assets as blocking failures.

## 1. Resolve scope and target

- Inspect `git status`, the current branch, and all remotes.
- Use the supplied repository URL or the existing `origin`.
- Require an exact target before creating or replacing a remote.
- Never place credentials, tokens, or API keys in a remote URL.
- Preserve unrelated user changes and stage only approved files.

## 2. Scan before staging

Build the candidate list from tracked modifications and untracked files.

Reject sensitive files such as:

```text
.env
.env.*
*.pem
*.key
*.p12
*.pfx
credentials.json
secrets.json
id_rsa
id_ed25519
*.keystore
*.jks
.htpasswd
.netrc
.npmrc
```

Confirm `.gitignore` protects applicable sensitive and generated files,
including browser automation output.

Scan candidate contents for private-key headers, cloud credentials, database
URLs, bearer/OAuth tokens, JWTs, and Google, Stripe, Twilio, SendGrid, Slack,
GitHub, OpenAI, or Anthropic keys. Also flag suspicious assignments containing
`password`, `secret`, `credential`, `api_key`, or `api_secret`.

Use a local scanner such as `gitleaks` when already installed. Do not install
software or upload source to an online scanner without approval. Redact secret
values in reports. If anything is found, stop before staging or pushing.

Proceed only after reporting:

```text
Security scan complete: No secrets detected.
```

## 3. Prepare a GitHub Pages-safe static site

For plain HTML/CSS/browser-JavaScript projects:

- Keep the deployment free of Node.js, npm, frameworks, and build steps unless
  the repository already requires them.
- Maintain `.github/workflows/deploy-pages.yml`.
- Copy only public website files into the Pages artifact.
- Include `.nojekyll` in the artifact.
- Use the current supported major versions of the official Pages actions.

Determine the expected Pages base URL:

```text
https://OWNER.github.io/REPOSITORY/
```

GitHub project pages are hosted below `/REPOSITORY/`. Inspect every local asset
reference in HTML, CSS, and JavaScript:

- Prefer `styles.css`, `./styles.css`, `images/logo.png`, and similar relative
  paths.
- Reject root-relative project assets such as `/styles.css`, `/script.js`, or
  `/images/logo.png`; they resolve against `https://OWNER.github.io/` and
  commonly return 404.
- Do not rewrite anchors, `mailto:`, `tel:`, `data:`, or absolute external URLs.
- For a user/organization Pages repository named `OWNER.github.io` or a verified
  custom domain, validate against its actual root before changing paths.

Check at minimum:

- `<link href>`
- `<script src>`
- `<img src>` and `srcset`
- `<source src>` and `srcset`
- Open Graph and social image URLs
- CSS `url(...)`
- JavaScript fetches and module imports

## 4. Refresh documentation

For a website:

- Confirm `screenshot.png` exists and accurately represents the current site.
- Embed the screenshot near the top of `README.md`.
- Keep the live demo URL, files, technology, setup, architecture, and
  deployment instructions accurate.
- Ensure the footer contains `Powered by Tertiary Infotech Academy Pte Ltd`.

Do not claim a backend, database, Node.js, npm, or framework when the project is
plain HTML, CSS, and browser JavaScript.

## 5. Test locally before publishing

Serve the public directory with a basic static server. Do not test only through
`file://`.

Validate:

- the page loads and its primary content is visible;
- every local CSS, JavaScript, image, and font request returns success;
- there are no browser console errors or failed network requests;
- navigation, CTAs, and form validation work;
- the page has a viewport meta tag;
- there is no horizontal overflow at 375×667, 390×844, and 768×1024;
- form inputs use at least 16px text on mobile;
- screenshots show a coherent desktop and mobile layout.

Fix failures and repeat the checks before committing.

## 6. Stage, rescan, and push

- Stage explicit paths only. Never use `git add .` or `git add -A`.
- Run `git diff --cached --check`.
- Rescan the exact staged blobs for secrets.
- Review `git diff --cached --stat` and the staged diff.
- Commit with a conventional commit message.
- Push the active branch, normally `main`, without force.
- If rejected, inspect remote history before considering a rebase.

## 7. Configure and verify GitHub

When authenticated access is available:

- set a concise repository About description;
- set the homepage to the expected Pages URL;
- add relevant topics without removing existing ones;
- enable Discussions when requested by the repository workflow;
- configure Pages with `build_type=workflow`;
- wait for the triggered Pages workflow to complete successfully.

After deployment, open the live Pages URL with a cache-busting query string tied
to the commit hash. Repeat the browser checks from the local test, including
desktop and mobile viewports.

Explicitly verify that stylesheet and script URLs contain the project base path,
for example:

```text
https://OWNER.github.io/REPOSITORY/styles.css
https://OWNER.github.io/REPOSITORY/script.js
```

Treat any 404, console error, missing styles, broken interaction, or horizontal
overflow as a failed deployment. Fix, recommit, redeploy, and recheck instead of
reporting success.

## 8. Report

Return:

- security scan result;
- branch and commit hash;
- repository and live Pages URLs;
- GitHub Actions result;
- repository metadata changes;
- desktop and mobile verification results;
- any remaining blocker without exposing credentials.
