# Stable Medusa v2 + Next.js Ecommerce Boilerplate

This repository is a clean agency starter generated with the official Medusa v2 monorepo generator and its bundled Next.js Starter Storefront. It intentionally keeps the official backend, admin, API, and storefront code close to the generated source of truth. It does not include client branding, custom commerce logic, payment integrations, or a custom dashboard.

## Verified stack

- Medusa: `2.22.7`
- Official bundled Next.js Starter Storefront: `1.0.3`
- Next.js: `16.3.8`
- React and React DOM: `19.0.5`
- Node.js: `22.23.4` or later within Node 22 LTS, and below Node 25
- npm: `10.9.9`
- PostgreSQL-compatible database, including Neon
- npm workspaces with one root `package-lock.json`

The scaffold was created with the official npm command:

```powershell
npx create-medusa-app@latest --with-nextjs-starter --use-npm
```

The bundled starter is installed in the monorepo from Medusa v2.14.0 onward. The old standalone starter is not used here.

## Project structure

```text
medusa-stable-boilerplate/
├── apps/
│   ├── backend/                 # Medusa API and Admin
│   │   ├── src/
│   │   ├── medusa-config.ts
│   │   ├── .env.template
│   │   └── package.json
│   └── storefront/              # Official Next.js App Router storefront
│       ├── src/
│       ├── public/
│       ├── .env.template
│       └── package.json
├── .env.example
├── package.json
├── package-lock.json
└── README.md
```

## Prerequisites

Install Node.js `22.23.4+` and keep it below Node 25. Install Git and have access to a PostgreSQL database. Neon is supported through its standard PostgreSQL connection string. This project uses npm only. Do not run pnpm or Yarn commands and do not add another lockfile.

## Installation on Windows PowerShell

1. Extract the ZIP and open the extracted folder in VS Code.

2. Confirm the runtime:

```powershell
node --version
npm --version
```

3. Copy the environment templates:

```powershell
Copy-Item .env.example .env
Copy-Item apps/backend/.env.template apps/backend/.env
Copy-Item apps/storefront/.env.template apps/storefront/.env.local
```

4. Edit `apps/backend/.env`. Set `DATABASE_URL`, `JWT_SECRET`, and `COOKIE_SECRET`. Use long random values for both secrets. Do not commit this file.

5. Run installation from the repository root:

```powershell
npm install
```

6. Run database migrations from the backend directory. The database must exist and the connection string must be valid:

```powershell
Set-Location apps/backend
npx medusa db:migrate
Set-Location ../..
```

7. Create an admin user:

```powershell
Set-Location apps/backend
npx medusa user -e admin@example.com -p ReplaceWithAStrongPassword
Set-Location ../..
```

8. Start the backend in one PowerShell window:

```powershell
npm run backend:dev
```

The backend API is normally at `http://localhost:9000` and Medusa Admin is at `http://localhost:9000/app`.

9. Open Medusa Admin, sign in, and go to **Settings → Publishable API Keys**. Create or copy a publishable key.

10. Put that key in `apps/storefront/.env.local` as `NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY`. Confirm `NEXT_PUBLIC_MEDUSA_BACKEND_URL=http://localhost:9000`.

11. Start the storefront in a second PowerShell window from the repository root:

```powershell
npm run storefront:dev
```

The storefront is normally at `http://localhost:8000`.

## Environment variables

### Backend

- `DATABASE_URL`: PostgreSQL/Neon connection string. Use `?sslmode=require` for Neon when required.
- `STORE_CORS`: comma-separated storefront origins, normally `http://localhost:8000`.
- `ADMIN_CORS`: comma-separated admin origins, normally `http://localhost:9000`.
- `AUTH_CORS`: origins allowed for authentication requests.
- `JWT_SECRET`: backend JWT signing secret.
- `COOKIE_SECRET`: backend cookie signing/encryption secret.

### Storefront

- `NEXT_PUBLIC_MEDUSA_BACKEND_URL`: public URL of the Medusa API.
- `NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY`: publishable key created in Medusa Admin.
- `NEXT_PUBLIC_DEFAULT_REGION`: default two-letter country/region code configured in Medusa.
- `NEXT_PUBLIC_BASE_URL`: public storefront URL used for canonical URLs and metadata.

Only values intentionally required in the browser use the `NEXT_PUBLIC_` prefix. Never put backend secrets or R2 credentials in storefront variables.

## Neon PostgreSQL

Use a Neon PostgreSQL connection string in `DATABASE_URL`. A pooled Neon URL is suitable for normal application traffic. For schema migrations, use the direct connection string when Neon recommends it for your project, because migrations need a stable database connection. Do not hardcode a local database URL. The repository does not include SQLite configuration.

After changing `DATABASE_URL`, run migrations again from `apps/backend`:

```powershell
npx medusa db:migrate
```

Neon connectivity and migrations were not run in this build environment because no external database credentials were provided. Test them after adding your own credentials.

## Optional Cloudflare R2 file storage

Local development does not require R2. When the R2 variables are absent, the generated project keeps its default local file-storage behavior. The backend configuration enables Medusa's official S3-compatible file provider only when all required R2 variables are present.

Add these variables to `apps/backend/.env`:

```dotenv
S3_FILE_URL=https://YOUR_CUSTOM_DOMAIN_OR_R2_DEV_URL
S3_ACCESS_KEY_ID=replace-with-r2-access-key-id
S3_SECRET_ACCESS_KEY=replace-with-r2-secret-access-key
S3_BUCKET=replace-with-r2-bucket-name
S3_ENDPOINT=https://YOUR_ACCOUNT_ID.r2.cloudflarestorage.com
S3_REGION=auto
```

In Cloudflare, create an R2 bucket and an API token with object read/write permission. Use the S3-compatible endpoint shown in the R2 dashboard. `S3_REGION=auto` is the documented Cloudflare value. `S3_FILE_URL` should be your custom domain or the public R2.dev URL used to serve uploaded files. Configure a public custom domain for production rather than relying on an R2.dev URL.

Restart the backend after changing R2 variables. Then create or update a product image in Medusa Admin and confirm the uploaded image resolves through the configured file URL. R2 upload testing was not performed here because no Cloudflare credentials were provided.

## Available npm commands

Run these from the repository root:

```powershell
npm install
npm run dev             # all workspace dev tasks through Turbo
npm run backend:dev     # Medusa backend only
npm run storefront:dev  # Next.js storefront only
npm run build           # workspace builds through Turbo
npm run start           # workspace production starts through Turbo
npm run lint            # workspace lint tasks through Turbo
npm run test            # workspace test tasks through Turbo
npm run backend:seed    # official backend seed task, when applicable
```

The backend also exposes its generated scripts from `apps/backend`, including `npm run build`, `npm run start`, `npm run dev`, `npm run lint`, and the generated Jest integration/unit test commands. The storefront exposes `npm run build`, `npm run start`, `npm run dev`, `npm run lint`, and `npm run analyze`.

There is no invented root `typecheck` command. Use the generated TypeScript configuration and the official build commands as the compatibility check.

## Verification report

- **PASS** — official generator completed with `--with-nextjs-starter --use-npm --skip-db --no-browser`.
- **PASS** — Node.js `v22.23.4` and npm `10.9.9` are installed.
- **PASS** — Medusa packages are consistently pinned to `2.22.7` in the generated manifests and lockfile.
- **PASS** — root `package-lock.json` exists.
- **PASS** — no pnpm workspace file or Yarn lockfile is included.
- **PASS** — real `.env` and `.env.local` files were removed from the deliverable.
- **PASS** — backend and storefront environment templates contain placeholders only.
- **PASS** — storefront points to `http://localhost:9000` by default and uses the publishable-key variable required by the official starter.
- **NOT TESTED** — `npm run build`, backend startup, migrations, admin login, storefront runtime, Neon connectivity, publishable-key requests, and R2 uploads. These require a configured database and, for R2, external storage credentials.

## Common issues

**Database connection errors:** confirm that the database exists, that `DATABASE_URL` has no placeholder text, and that Neon SSL requirements are satisfied. Run migrations from `apps/backend`, not from an arbitrary directory.

**Storefront says the publishable key is missing:** create the key in Medusa Admin, put it in `apps/storefront/.env.local`, and restart Next.js.

**CORS errors:** ensure the storefront origin is present in `STORE_CORS` and authentication requests are covered by `AUTH_CORS`. Restart the backend after editing environment files.

**Port already in use:** stop the process using port 9000 or 8000, or change the generated application script and update the documented URLs together.

**Node version errors:** use Node 22 LTS below Node 25. Do not combine a different Node major version with this lockfile without retesting the full install and build.

## Production preparation

Use production-grade secrets, a managed PostgreSQL database, HTTPS origins, a public R2 custom domain if storing images in R2, and a deployment platform that supports Node 22. Update all CORS values to exact production origins. Run migrations as a controlled deployment step and never commit `.env` files or credentials.

## Official references

- [Medusa create-medusa-app documentation](https://docs.medusajs.com/resources/create-medusa-app)
- [Medusa Next.js Starter Storefront documentation](https://docs.medusajs.com/resources/nextjs-starter)
- [Medusa S3 File Module Provider documentation](https://docs.medusajs.com/resources/infrastructure-modules/file/s3)
