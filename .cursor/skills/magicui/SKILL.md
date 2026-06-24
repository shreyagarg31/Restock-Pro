---
name: magicui
description: Installs and composes Magic UI animated landing-page components via the shadcn CLI or magicui-cli registry. Use when building marketing pages, hero animations, marquees, particles, globe effects, or when the user mentions magicui, magic ui, or magicui.design.
---

# Magic UI

50+ animated React components for landing pages and marketing sites. Built on shadcn/ui conventions — copy-paste, fully owned source.

## Prerequisites

```bash
npx shadcn@latest init
```

## Registry Setup

Add to `components.json`:

```json
{
  "registries": {
    "@magicui": "https://magicui.design/r/{name}.json"
  },
  "aliases": {
    "components": "@/components",
    "ui": "@/components/ui",
    "magicui": "@/components/magicui",
    "utils": "@/lib/utils"
  }
}
```

The `magicui` alias is optional but keeps animated components separate from core UI.

## Install Components

```bash
# Namespaced (preferred)
npx shadcn@latest add @magicui/blur-fade
npx shadcn@latest add @magicui/marquee
npx shadcn@latest add @magicui/globe
npx shadcn@latest add @magicui/particles

# Direct URL
npx shadcn@latest add "https://magicui.design/r/bento-grid"
```

### Alternative CLI

```bash
npx magicui-cli init
npx magicui-cli add bento-grid
npx magicui-cli add --all
npx magicui-cli add --example    # install with demo
```

If the project already uses shadcn, only add the `magicui` alias to `components.json` — no separate init needed.

## Dependencies

Most components need `framer-motion` (or `motion`). CLI installs it automatically.

## Usage

```tsx
import { BlurFade } from "@/components/ui/blur-fade";
import { Marquee } from "@/components/magicui/marquee";

export default function Landing() {
  return (
    <BlurFade delay={0.2}>
      <h1>Welcome</h1>
      <Marquee pauseOnHover className="[--duration:20s]">
        {/* items */}
      </Marquee>
    </BlurFade>
  );
}
```

Import path depends on where the CLI placed the file — check `components.json` aliases.

## Popular Components

| Component | Use case |
|-----------|----------|
| `blur-fade` | Staggered entrance animations |
| `marquee` | Infinite scrolling logos/text |
| `globe` | 3D globe hero accent |
| `particles` | Background particle effect |
| `bento-grid` | Feature grid layouts |
| `animated-beam` | Connection/flow diagrams |
| `shimmer-button` | CTA with shimmer effect |
| `number-ticker` | Animated stat counters |

Browse all: https://magicui.design/docs/components

## Manual Install

When CLI is unavailable:

1. Open component page on magicui.design
2. Copy source from the Manual tab
3. Paste into `components/ui/` or `components/magicui/`
4. Fix import paths to match project aliases
5. Install `framer-motion` if missing

## Rules

1. **Same install flow as shadcn** — Magic UI is a registry, not an npm package
2. **Separate marketing from app UI** — use `@/components/magicui` for landing effects, `@/components/ui` for shadcn primitives
3. **Check each component's docs** for required CSS variables and Tailwind config
4. **Prefer server components** for static shells; wrap animated children in client components
5. **Combine stacks** — shadcn for forms/buttons, Magic UI for hero sections, Aceternity for advanced motion

Docs: https://magicui.design/docs/installation
