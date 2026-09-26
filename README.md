# pr-autofix-sandbox

Regression smoke stand for [trained-assist/pr-autofix](https://github.com/trained-assist/pr-autofix).
Open a PR that breaks `npm test` → CI fails → the autofix job (pinned in `.github/workflows/ci.yml`)
diagnoses and pushes a `fix/ci-*` branch. Never merge smoke PRs; close them after the check.

Note: the org forbids GITHUB_TOKEN from creating PRs, so without an `AUTOFIX_PAT` secret the run
stops after pushing the fix branch — open the PR from that branch by hand to see its CI.
