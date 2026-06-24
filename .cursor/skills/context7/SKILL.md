---
name: context7
description: Fetches up-to-date, version-specific library documentation via Context7 MCP or the ctx7 CLI. Use when implementing features with external libraries, when the user says "use context7", asks about library APIs, framework setup, or when training data may be outdated (Next.js, React, Prisma, Supabase, etc.).
---

# Context7

Ground library-specific code in current documentation instead of training data. Context7 indexes 1000+ libraries with version-specific docs and code examples.

## When to Use

- Implementing or debugging third-party library APIs
- Framework setup, configuration, or migration
- User adds `use context7` to a prompt
- Library version in the project differs from common training examples

**Do not** use Context7 for project-local code — read the codebase directly.

## MCP Workflow (Preferred in Cursor)

Check MCP tool schemas first, then:

### 1. Resolve library ID

Call `resolve-library-id` unless the user provides an explicit ID like `/vercel/next.js` or `/mongodb/docs`.

- `libraryName`: package or framework name (e.g. `next.js`, `prisma`)
- `query`: the user's specific task — improves ranking

### 2. Query documentation

Call `query-docs` with:

- `libraryId`: exact ID from step 1 (format `/org/project` or `/org/project/version`)
- `query`: specific question (e.g. "How to add middleware that redirects unauthenticated users")

**Version-specific:** use `/vercel/next.js/v14.3.0` when the project pins a version.

### Skip resolution when known

```
use context7 with /supabase/supabase for row-level security
use context7 with /vercel/next.js for app router metadata
```

## CLI Fallback (no MCP)

```bash
# Step 1 — find library ID (query improves relevance)
ctx7 library nextjs "How to set up app router middleware"

# Step 2 — fetch docs (ID must start with /)
ctx7 docs /vercel/next.js "How to add middleware for route protection"
```

JSON output for scripting: append `--json`.

## Setup

```bash
npx ctx7 setup --cursor          # interactive: MCP or CLI+skills
npx ctx7 setup --cursor --mcp    # MCP server mode
npx ctx7 setup --cursor --cli    # CLI + docs skill mode
npx ctx7 setup --cursor --project  # project-scoped MCP config
```

MCP endpoint: `https://mcp.context7.com/mcp` with `CONTEXT7_API_KEY` header.

Browse libraries: https://context7.com/libraries

## Best Practices

- Be specific in queries — "JWT auth middleware in Next.js 15 App Router" beats "auth"
- Mention versions when they matter
- If results are off-topic, re-query with a narrower question or different library ID
- Combine with Composer: fetch docs first, then generate code from them

## Troubleshooting

| Issue | Fix |
|-------|-----|
| MCP tools missing | Run `npx ctx7 setup --cursor --mcp` or check `.cursor/mcp.json` |
| Rate limited | `ctx7 login` or set `CONTEXT7_API_KEY` |
| Wrong library returned | Include version in query or pick higher snippet-count result |
| `ctx7 docs react` fails | IDs must start with `/` — run `ctx7 library` first |

Docs index: https://context7.com/docs/llms.txt
