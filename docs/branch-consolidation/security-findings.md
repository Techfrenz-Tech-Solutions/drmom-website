# Security Findings — drmom-website

## Secrets scan

Scanned **full reachable history** (`git rev-list --all`, not just branch
tips) with `git grep` across all commits for:

- `API_KEY|SECRET|PASSWORD|PRIVATE_KEY|BEARER|sk_live|sk_test|AIza…|-----BEGIN|TOKEN`
- Any committed `.env*` file (`git log --all --diff-filter=A --name-only`)
- Any committed certificate/key file (`.pem`, `.key`, `.crt`, `.p12`)

**Result: zero matches across all three branches' full history.** No
secrets, no `.env` file was ever committed, no private key/cert was ever
committed.

`.gitignore` on every branch correctly excludes `.env`, `.env.*` (with an
explicit `!.env.example` allow-exception), `dist/`, `node_modules/`, and
common IDE/OS cruft.

## Configuration review

- `API_BASE_URL` is read from `import.meta.env.VITE_API_BASE_URL`, a
  Vite-standard browser-exposed public config value — appropriate, since
  it's just the backend's public URL, not a secret.
- No hardcoded production URLs were found in application source outside
  the intentional dev-proxy comment in `vite.config.js` (documented as a
  local development convenience, not shipped to production builds).
- `Dockerfile`/`nginx.conf` were reviewed; neither embeds credentials.

## Recommendation

No remediation required for this repository. `gitleaks`/`trufflehog`
were not available in this environment to run as a second pass; the
manual `git grep` pattern sweep across full history is the evidence this
finding rests on.
