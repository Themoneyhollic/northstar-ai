---
description: Securely scan, document, and publish this static project to GitHub, update repository metadata, and deploy GitHub Pages without exposing secrets.
argument-hint: "[optional GitHub repository URL; defaults to the existing origin]"
---

# /github-push-secure

Securely publish the current project to GitHub. Treat secret detection as a
blocking gate: never commit or transmit files until the complete candidate
change set passes.

## 1. Resolve the target

- Use the repository URL supplied as the command argument.
- Otherwise use `git remote get-url origin`.
- If neither exists, stop and ask for the exact GitHub repository URL.
- Never embed credentials, access tokens, or API keys in a remote URL or Git
  configuration.

## 2. Protect sensitive and generated files

Ensure `.gitignore` contains:

```gitignore
.env
.env.*
*.pem
*.key
*.p12
*.pfx
credentials.json
secrets.json
.netrc
.npmrc
.playwright-mcp/
*.zip
**/reference/
```

Reject any candidate file matching those rules. Unstage sensitive files without
deleting the local copy.

## 3. Run the blocking security scan

Build the candidate file list from tracked modifications and untracked files.
Scan file contents for:

- AWS access keys and secret keys
- private-key headers
- database connection URLs
- bearer, OAuth, access, and refresh tokens
- Google, Stripe, Twilio, SendGrid, Slack, GitHub, OpenAI, and Anthropic keys
- JWTs
- assignments containing `password`, `secret`, `credential`, `api_key`, or
  `api_secret`

Use `/usr/bin/grep` one pattern at a time to avoid regex-engine ambiguity.
Report every finding as `file:line` and stop before staging, committing, or
pushing. Do not print the full secret value in the report.

Also inspect Git history for sensitive filenames and run a dedicated scanner
such as `gitleaks` when it is already installed. Do not install software or send
source code to an online scanner without approval.

Proceed only after reporting:

```text
Security scan complete: No secrets detected.
```

## 4. Refresh project documentation

For a web project:

- capture or refresh `screenshot.png` from the live site;
- embed it near the top of `README.md`;
- document the real files, technologies, setup, deployment, and architecture;
- ensure the website footer says:
  `Powered by Tertiary Infotech Academy Pte Ltd`.

Do not claim Node.js, npm, a framework, database, or backend when the project is
plain HTML, CSS, and browser JavaScript.

## 5. Configure GitHub Pages

For this static site, maintain `.github/workflows/deploy-pages.yml` using:

- `actions/checkout@v4`
- `actions/configure-pages@v5`
- `actions/upload-pages-artifact@v3`
- `actions/deploy-pages@v4`

The workflow must copy only the public website files into its Pages artifact.
It must not use Node.js.

## 6. Stage and review explicitly

- Run `git status --short`.
- Stage specific approved paths only. Never use `git add .` or `git add -A`.
- Run `git diff --cached --check`.
- Run the full secret scan again against the staged blobs.
- Show `git diff --cached --stat`.
- Commit with a conventional commit message.

## 7. Push safely

- Ensure the branch is `main`.
- Add `origin` only when it does not already exist.
- Push with `git push -u origin main`.
- If rejected, inspect the remote state before using
  `git pull --rebase origin main`; never force-push unless the user explicitly
  authorizes it.

## 8. Update the GitHub repository

Using authenticated `gh` commands:

- set a concise About description;
- set the homepage to the verified GitHub Pages URL;
- add relevant topics without removing existing topics;
- enable Discussions;
- enable Pages with `build_type=workflow`;
- verify the latest Pages workflow and live URL.

## 9. Report

Return the scan result, branch, commit hash, repository URL, About changes,
Discussions status, workflow result, and GitHub Pages URL. Report blockers
plainly and never expose credentials.
