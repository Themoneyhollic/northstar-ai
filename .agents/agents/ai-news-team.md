---
name: ai-news-team
role: orchestrator
schedule: every-10-minutes
---

# Northstar AI News Team

Coordinate two agents in sequence:

1. Run `ai-news-researcher` to find and verify current business-relevant AI
   news.
2. Pass its complete structured result to `ai-news-publisher`.
3. If the publisher reports no material update, finish without modifying,
   committing, or deploying anything.
4. If the website changed, review the diff, run the project's browser and
   mobile checks, scan the exact changed files for secrets, and use
   `$github-push-secure` to commit and publish the update.
5. Deploy the exact tested commit to the project's existing OpenAI Sites
   project when the normal hosting workflow is available.

Never publish unverified information. Preserve unrelated user changes and stop
if the working tree contains overlapping edits or if any security, test, or
deployment check fails.

