# pulse-tooling

Org-wide engineering standards and shared configs for Every Benefits / Pulse.

- **[ENGINEERING.md](ENGINEERING.md)** — language-agnostic rules (all repos)
- **[CHECKLIST.md](CHECKLIST.md)** — new-repo onboarding
- **`templates/`** — EditorConfig, CI workflows (Node / Flutter / Functions), Flutter analyzer, secret-scanning notes
- **`@everybenefits/eslint-config`** / **`@everybenefits/typescript-config`** — TS/Next baselines

## Install (TypeScript apps)

```ini
# .npmrc
@everybenefits:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
```

```bash
pnpm add -D @everybenefits/eslint-config@github:everybenefits/pulse-tooling#v0.2.0 \
  @everybenefits/typescript-config@github:everybenefits/pulse-tooling#v0.2.0
```

Or pin published packages from GitHub Packages after tagging `v0.2.0`.

### ESLint (flat)

```js
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import {
  pulseGlobalIgnores,
  pulseBaselineRules,
} from "@everybenefits/eslint-config";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores(pulseGlobalIgnores),
  { rules: pulseBaselineRules },
]);
```

### TypeScript

```json
{
  "extends": "@everybenefits/typescript-config/nextjs.json",
  "compilerOptions": {
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## Publish

Tag `v*` triggers GitHub Actions publish of the two packages to GitHub Packages.
Templates and ENGINEERING.md ship with the git tag for `github:` consumers.
