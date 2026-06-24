---
name: shadcn-ui
description: Installs and composes shadcn/ui components in React/Next.js projects using the shadcn CLI, components.json, Tailwind CSS, and Radix primitives. Use when adding UI components, theming, forms, dialogs, data tables, or when the user mentions shadcn, shadcn/ui, or copy-paste component libraries.
---

# shadcn/ui

Copy-paste React components built on Radix UI + Tailwind CSS. Components live in your repo — you own and customize them.

## Prerequisites

- React 18+ / Next.js (App Router recommended)
- Tailwind CSS configured
- `components.json` at project root (created by `init`)

## Init

```bash
# New project from template
npx shadcn@latest init -t next

# Existing project
npx shadcn@latest init
```

Visual preset builder: https://ui.shadcn.com/create

`init` creates `components.json`, installs `cn` utility, configures Tailwind theme tokens, and sets import aliases.

## Add Components

```bash
npx shadcn@latest add button
npx shadcn@latest add dialog card form input select
npx shadcn@latest add button -y          # skip prompts
npx shadcn@latest add button -o        # overwrite existing
npx shadcn@latest add button -p src/components/ui  # custom path
```

Import from the configured `ui` alias:

```tsx
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
```

## components.json Essentials

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks",
    "utils": "@/lib/utils"
  },
  "registries": {
    "@shadcn": "https://ui.shadcn.com/r/{name}.json"
  }
}
```

- `style`: `new-york` (preferred; `default` is deprecated)
- `rsc: true` — CLI adds `"use client"` where needed
- `tailwind.config`: leave blank for Tailwind v4
- `cssVariables: true` — semantic tokens (`background`, `primary`, etc.)

## Namespaced Registries

Add third-party registries to `components.json`:

```json
{
  "registries": {
    "@magicui": "https://magicui.design/r/{name}.json",
    "@aceternity": "https://ui.aceternity.com/registry/{name}.json"
  }
}
```

Install: `npx shadcn@latest add @magicui/blur-fade`

## Theming

Components use CSS variables defined in `globals.css`. Customize `--background`, `--foreground`, `--primary`, etc. Dark mode via `.dark` class on `<html>`.

Use `cn()` from `@/lib/utils` to merge Tailwind classes:

```tsx
<Button className={cn("w-full", isLoading && "opacity-50")} />
```

## Common Patterns

| Task | Components |
|------|------------|
| Forms | `form`, `input`, `label`, `select`, `checkbox` + react-hook-form |
| Overlays | `dialog`, `sheet`, `popover`, `dropdown-menu` |
| Data display | `table`, `badge`, `avatar`, `skeleton` |
| Feedback | `toast` (sonner), `alert` |
| Layout | `card`, `separator`, `tabs`, `sidebar` |

## Rules

1. **Read existing `components.json`** before adding — match aliases and style
2. **Prefer CLI over manual copy** — installs peer dependencies automatically
3. **Customize in place** — edit files under `components/ui/` directly
4. **Compose primitives** — build feature components from shadcn building blocks
5. **Fetch latest API docs** via Context7 (`/shadcn/ui`) when unsure about CLI flags

Docs: https://ui.shadcn.com/docs
