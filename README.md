# Baha'i‑Kavi (Next.js)

Trilingual website (FA/PS/EN) implemented in **Next.js (Pages Router)** based on the full UI/UX specification.

## Tech
- Node.js: **24.12.0**
- Next.js: **14.2.12**
- React: **18.2.0**

## Run
```bash
npm install
npm run dev
```

## Routes
- `/` redirects to `/fa`
- `/fa`, `/ps`, `/en` (Home)
- `/fa/what-is-bahai` (and same for ps/en)
- `/fa/qa`
- `/fa/mahdism`
- `/fa/history`
- `/fa/critique`
- `/fa/articles`
- `/fa/media`
- `/fa/contact`

## Notes
- This is UI/UX-first scaffolding: content is **placeholder/demo** where the spec requires real articles/resources.

## Security + DB (safe defaults)
- There is **no database** in this build (to avoid DB/security headaches at your current phase).
- The Contact form posts to `/api/contact` which includes:
  - server-side validation (Zod)
  - simple same-origin check
  - a small in-memory rate limit
- Later, if you want to store messages or articles, the recommended path is Prisma + SQLite/Postgres with environment variables (never hardcode credentials).
