# New repository checklist

Use this when creating or migrating an Every Benefits / Pulse repo.

1. [ ] Create `everybenefits/pulse-<name>` (private unless design-system / docs intentionally public)
2. [ ] Copy [templates/editorconfig](templates/editorconfig) → `.editorconfig`
3. [ ] Copy [templates/gitattributes](templates/gitattributes) → `.gitattributes`
4. [ ] Add README pointer to [ENGINEERING.md](ENGINEERING.md)
5. [ ] Secrets: `.gitignore` for `.env*`, ship `.env.example` only
6. [ ] CI from the matching template:
   - Node/Next → [templates/github/ci-node.yml](templates/github/ci-node.yml)
   - Flutter → [templates/github/ci-flutter.yml](templates/github/ci-flutter.yml)
   - Functions/backend → [templates/github/ci-functions.yml](templates/github/ci-functions.yml)
7. [ ] **TypeScript apps:** depend on `@everybenefits/eslint-config` + `@everybenefits/typescript-config` (this repo’s packages) at a pinned tag
8. [ ] **Flutter:** copy [templates/flutter/analysis_options.yaml](templates/flutter/analysis_options.yaml)
9. [ ] Enable secret scanning (GitHub default + optional [templates/secret-scanning.md](templates/secret-scanning.md))
10. [ ] Dependabot or Renovate for the primary ecosystem
11. [ ] Confirm no `file:` or cross-repo `workspace:` in committed `package.json` / `pubspec.yaml` path deps to siblings
12. [ ] **TypeScript product apps:** depend on `@everybenefits/client` for User/Org/Roles (and later migrated verticals); do not wire those Gen2 callables ad hoc — see ADR-014 in pulse-web
13. [ ] **UI:** depend on `@pulse/ui` only — no private `packages/*-ui` in the app repo
14. [ ] First green CI on `main`
