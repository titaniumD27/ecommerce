# Verification Report

Tested on Node.js `v22.23.4` and npm `10.9.9`.

| Check | Result | Notes |
|---|---|---|
| Official scaffold | PASS | `create-medusa-app@latest --with-nextjs-starter --use-npm --skip-db --no-browser` completed. |
| Clean dependency install | PASS | `npm ci --ignore-scripts` completed from the committed root lockfile. |
| Lockfile | PASS | `package-lock.json` is lockfile version 3. |
| Package manager consistency | PASS | npm workspace; no pnpm workspace file or Yarn lockfile. |
| Backend build | PASS | `npm run build --workspace=@dtc/backend`. |
| Backend lint | PASS | `npm run lint --workspace=@dtc/backend`. |
| Storefront build | PASS | `NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY=pk_test_placeholder npm run build --workspace=@dtc/storefront`. |
| Storefront lint | FAIL | Official generated starter reports 10 ESLint errors and 28 warnings under the generated ESLint/React rule set. Source was not rewritten to hide these findings. |
| Environment safety | PASS | Real generated `.env` files were removed; only placeholder templates remain. |
| Neon migrations/runtime | NOT TESTED | Requires user-provided database credentials. |
| Medusa Admin/login/API requests | NOT TESTED | Requires a configured database and admin user. |
| Cloudflare R2 upload | NOT TESTED | Requires user-provided R2 credentials and bucket. |

`npm ci` reported 33 dependency audit findings (10 low, 21 moderate, 1 high, 1 critical) in the generated dependency tree. No automatic upgrades were applied because changing transitive versions would move away from the official generated compatibility set.
