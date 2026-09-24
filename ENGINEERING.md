# Every Benefits engineering standards

Language-agnostic rules for **all** repositories under [`everybenefits`](https://github.com/everybenefits). Language-specific templates live in [`templates/`](templates/).

Copy a short pointer into each app README; keep this file as the source of truth.

## Security

- Never commit secrets, service-account JSON, private JWKs, or PATs. Ship `.env.example` with placeholders only.
- Auth surfaces (SSO, OIDC, callables): origin allowlists; no `Access-Control-Allow-Origin: *`.
- Production: never set Firebase emulator host env vars. Emulator flags default **off**.
- When App Check is required (`PULSE_SSO_REQUIRE_APP_CHECK=true`), the corresponding public site key **must** be configured.
- Prefer `checkRevoked` on ID tokens outside the Auth emulator; never disable revocation checks in production.

## Dependencies and versioning

- Shared TS packages: `@everybenefits/*` on GitHub Packages (or `github:everybenefits/…#v*` tags).
- Design system: `@pulse/ui` from [pulse-ui](https://github.com/everybenefits/pulse-ui) (published path / npm when available).
- Apps pin **explicit tags** (`v0.1.2`), not floating `main`.
- Semver + git tags `v*` for publishable packages.
- Forbidden in committed manifests: cross-repo `workspace:*`, `file:` siblings (local overrides only, never pushed).

## CI and quality

Every repo must run, as applicable to its stack:

| Check | Node/Next | Flutter | Cloud Functions |
|-------|-----------|---------|-----------------|
| Install | `pnpm install --frozen-lockfile` | `flutter pub get` | `pnpm install --frozen-lockfile` |
| Lint | `pnpm lint` | `dart analyze` | `pnpm lint` / eslint |
| Types | `pnpm typecheck` | (analyze) | `pnpm typecheck` |
| Tests | `pnpm test` | `flutter test` | `pnpm test` |
| Build | `pnpm build` | `flutter build` (as CI allows) | `pnpm build` |

PRs must be green before merge. Prefer small PRs. No force-push to `main`/`master`.

## Naming

- Repos: `pulse-*` (apps and packages).
- npm scope `@everybenefits/*` for private GH Packages; `@pulse/ui` for the public design system.
- App Hosting backends map 1:1 to app repos with `rootDir` = `.`.

## Polyrepo discipline

- One capability or one app per repository (see ADR-012 in pulse-web).
- Do not recreate a multi-app Turborepo monorepo unless an explicit new ADR accepts it.
- Cross-cutting changes: publish package tag → bump dependents.

## Commits and language

- Keep commit/PR language consistent within a repo (EN or ES).
- Reference issues/ADRs when changing architecture or security posture.

## Onboarding a new repo

Follow [CHECKLIST.md](CHECKLIST.md): copy templates, wire lint/CI, link ENGINEERING.md from README.
