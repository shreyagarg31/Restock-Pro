---
name: aceternity-ui
description: Installs and composes Aceternity UI animated React components (Tailwind CSS + Motion/Framer Motion) via the shadcn CLI registry. Use when building animated landing pages, hero sections, bento grids, spotlight effects, or when the user mentions aceternity, aceternity-ui, or ui.aceternity.com.
---

# Aceternity UI

200+ animated, shadcn-compatible components for marketing sites and landing pages. Built with Tailwind CSS and Motion (Framer Motion).

## Prerequisites

Project must have shadcn/ui initialized:

```bash
npx shadcn@latest init
```

## Registry Setup

Add to `components.json`:

```json
{
  "registries": {
    "@aceternity": "https://ui.aceternity.com/registry/{name}.json"
  }
}
```

## Install Components

```bash
# Namespaced (preferred)
npx shadcn@latest add @aceternity/bento-grid
npx shadcn@latest add @aceternity/spotlight
npx shadcn@latest add @aceternity/infinite-moving-cards

# Direct registry URL
npx shadcn@latest add https://ui.aceternity.com/registry/bento-grid.json
```

### Alternative CLI

```bash
npx aceternity-ui init
npx aceternity-ui add bento-grid
npx aceternity-ui add bento-grid -e   # include demo/example
npx aceternity-ui add --all
```

## Dependencies

Most components require:

- `motion` (or `framer-motion`)
- `cn` utility from shadcn (`@/lib/utils`)
- Tailwind CSS

The CLI installs missing deps automatically.

## Usage

```tsx
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Spotlight } from "@/components/ui/spotlight";

export default function Hero() {
  return (
    <section className="relative">
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />
      <BentoGrid>
        <BentoGridItem title="Feature" description="..." />
      </BentoGrid>
    </section>
  );
}
```

Import paths follow your `components.json` aliases — typically `@/components/ui/`.

## Component Categories

| Category | Examples |
|----------|----------|
| Heroes | `hero-parallax`, `background-beams`, `spotlight` |
| Cards | `bento-grid`, `infinite-moving-cards`, `direction-aware-hover` |
| Backgrounds | `aurora-background`, `grid-background`, `meteors` |
| Text effects | `typewriter-effect`, `text-generate-effect`, `flip-words` |
| Navigation | `floating-navbar`, `navbar-menu` |

Browse all: https://ui.aceternity.com/components

## Rules

1. **Initialize shadcn first** — Aceternity builds on shadcn conventions
2. **Check component page** for required props, demo code, and peer deps
3. **Keep motion performant** — prefer `transform`/`opacity` animations; lazy-load heavy 3D components
4. **Match project Tailwind version** — v4 projects may need adjusted config
5. **Combine with shadcn primitives** — use Aceternity for marketing sections, shadcn for app UI (forms, dialogs)

## Pro vs Free

Free components install via CLI. Premium blocks/templates require Aceternity All-Access Pass — do not assume Pro components are available.

Docs: https://ui.aceternity.com/docs/cli
