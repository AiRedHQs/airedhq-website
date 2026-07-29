# Cloudflare deployment

AiRedHQ uses one Cloudflare stack:

- Workers + OpenNext for the Next.js application and route handlers.
- D1 for contact leads and career application metadata.
- A private R2 bucket for resume files.

Local development continues to store submissions under `.data/`, which is ignored by Git.

## 1. Authenticate

```bash
npx wrangler login
```

## 2. Create durable resources

```bash
npx wrangler d1 create airedhq-leads
npx wrangler r2 bucket create airedhq-career-resumes
```

Copy the D1 `database_id` returned by Wrangler into `wrangler.jsonc`, replacing the
all-zero placeholder. Keep the R2 bucket private. Do not enable an `r2.dev` URL.

## 3. Apply the database migration

```bash
npx wrangler d1 migrations apply airedhq-leads --remote
```

## 4. Preview the production Worker

```bash
npm run cf:preview
```

## 5. Deploy

```bash
npm run cf:deploy
```

The first deployment creates the Worker. Configure the production domain in the
Cloudflare dashboard after verifying the generated `workers.dev` deployment.

## Viewing leads

Run a read-only query:

```bash
npx wrangler d1 execute airedhq-leads --remote --command "SELECT id, type, created_at, payload FROM leads ORDER BY created_at DESC;"
```

Resume object keys are stored inside career application payloads. View or download
private resumes from the R2 dashboard, or build an authenticated admin interface that
creates short-lived access links.

## Security checklist

- Keep the R2 bucket private.
- Add Turnstile before public launch to limit form abuse.
- Restrict any future admin interface with Cloudflare Access.
- Never expose D1 or R2 administrative credentials to the browser.
- Define retention and deletion procedures before collecting production resumes.
