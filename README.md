# pr-autofix-sandbox

**GCP VM exit (05.10.2026):** New work on `alesa-personal-assistent/us-central1-a/alesa-vm` is prohibited. Use serverless by default; the existing French VM only for a proven persistent or local requirement. Other Google services remain allowed. See [the exit plan](https://github.com/trained-assist/trained-agent-architecture/issues/145).


Regression smoke stand for [trained-assist/pr-autofix](https://github.com/trained-assist/pr-autofix).
Open a PR that breaks `npm test` → CI fails → the autofix job (pinned in `.github/workflows/ci.yml`)
diagnoses and pushes a `fix/ci-*` branch. Never merge smoke PRs; close them after the check.

Note: the org forbids GITHUB_TOKEN from creating PRs, so without an `AUTOFIX_PAT` secret the run
stops after pushing the fix branch — open the PR from that branch by hand to see its CI.
