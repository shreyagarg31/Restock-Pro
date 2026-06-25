# Restock Pro Marketing Site

Static SEO marketing website for [Restock Pro](https://www.restock-pro.com) — a Shopify app for back-in-stock notifications.

Built with **Astro 7**, **MDX Content Collections**, **Tailwind CSS v4**, and **React islands** for animated sections.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, features, FAQ |
| `/features` | Product feature deep-dive |
| `/pricing` | Free beta pricing |
| `/blog` | Blog index |
| `/blog/[slug]` | MDX blog posts |
| `/privacy`, `/terms` | Legal pages |

## Development

Requires **Node.js 22+** (see `package.json` engines).

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Build

```bash
npm run build
npm run preview
```

Output is static HTML in `dist/` — suitable for Cloudflare Pages or any static host.

## Adding a blog post

Create a new `.mdx` file in `src/content/blog/`:

```mdx
---
title: Your post title
description: Meta description for SEO
pubDate: 2026-03-20
tags: ['shopify', 'inventory']
---

Your content here...
```

Rebuild to publish. No routing code changes needed.

## Deploy to Cloudflare Workers (free)

This site is a static Astro build. Cloudflare reads [`wrangler.jsonc`](wrangler.jsonc) for the output directory (`./dist`).

### 1. Push to GitHub

```bash
git add .
git commit -m "Add Cloudflare Workers deploy config"
git push -u origin main
```

### 2. Create the Workers project

[Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → **Create application** → **Import a repository**

Select **`shreyagarg31/Restock-Pro`** and use:

| Field | Value |
|-------|-------|
| Production branch | `main` |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |

There is no separate “output directory” field — `wrangler.jsonc` sets `"directory": "./dist"`.

**Worker name:** use `restock-pro-ui` in the dashboard (must match `"name"` in `wrangler.jsonc`).

**Environment variable** (after project is created):

Workers & Pages → your project → **Settings** → **Variables and Secrets** → Add:

| Name | Value | Type |
|------|-------|------|
| `NODE_VERSION` | `22` | Build |

Or rely on [`.node-version`](.node-version) in the repo.

Confirm the `*.workers.dev` preview URL loads before attaching your domain.

### 3. Custom domain — `www.restock-pro.com`

Project → **Settings** → **Domains & Routes** (or **Custom domains**) → add `www.restock-pro.com`.

This replaces the existing `www` CNAME (currently pointing at `restock-pro.com`) with your Workers hostname.

### Domain split (important)

| Host | Purpose |
|------|---------|
| `www.restock-pro.com` | This marketing site (Cloudflare Workers) |
| `restock-pro.com` (apex) | Shopify app, OAuth, `/api` routes (Render) |
| `mail.restock-pro.com` | Resend email DNS — leave unchanged |

**Do not** point apex `@` to Cloudflare Pages or redirect apex → www — that breaks Shopify OAuth.

After deploy, verify:

- `https://www.restock-pro.com` → marketing homepage
- `https://restock-pro.com` → Shopify app admin (unchanged)

### Ongoing deploys

Every `git push` to `main` triggers a production deploy via Workers Builds.

**Local deploy (optional):** `npm run deploy` (requires `npx wrangler login` once).

## Configuration

Update [`src/lib/constants.ts`](src/lib/constants.ts):

- `APP_INSTALL_URL` — Shopify App Store listing URL
- `SITE_URL` — canonical domain (`https://www.restock-pro.com`)
- `SUPPORT_EMAIL`

Also set `site` in [`astro.config.mjs`](astro.config.mjs) to match production URL.

## Project structure

```
src/
  components/     Astro + React islands
  content/blog/   MDX blog posts
  layouts/        Page layouts
  lib/            SEO helpers, constants
  pages/          Routes
  styles/         Global CSS + design tokens
public/           Static assets (favicon, logo, screenshots)
```

## What is not committed

See [`.gitignore`](.gitignore). Key exclusions:

- `dist/`, `.astro/`, `node_modules/` — generated / installed
- `.env*` — secrets
- `.vscode/`, `.idea/` — editor settings
- `.cursor/*` except `.cursor/skills/` — local Cursor state

## Cursor skills

Agent skills in [`.cursor/skills/`](.cursor/skills/) guide UI and SEO work:

- `shadcn-ui`, `magicui`, `aceternity-ui` — React island components
- `programmatic-seo` — SEO patterns for blog/landing pages
- `context7` — up-to-date library documentation
