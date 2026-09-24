# Secret scanning

GitHub secret scanning + push protection should stay enabled on every `everybenefits/*` repo.

## Optional local / CI (gitleaks)

```bash
# Install: https://github.com/gitleaks/gitleaks
gitleaks detect --source . --verbose
```

Example CI step:

```yaml
- uses: gitleaks/gitleaks-action@v2
  env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

## Never commit

- `.env`, `.env.local`, `*-service-account*.json`, private JWKs
- Classic PATs or `ghp_` tokens in docs / scripts
- Firebase emulator host vars set for production App Hosting
