---
name: programmatic-seo
description: Builds programmatic SEO (pSEO) at scale with Next.js App Router — keyword clustering, data-driven templates, generateStaticParams, dynamic metadata, JSON-LD schema, sitemaps, and internal linking. Use when scaling landing pages, bulk page generation, SEO automation, dynamic routes for search traffic, or building a programmatic SEO agent.
---

# Programmatic SEO Agent

Build SEO-optimized pages at scale from structured data and reusable templates. Prioritize **unique, useful content per URL** — thin duplicate templates get ignored by search engines.

## Workflow

```
1. Keyword research → cluster by intent/topic
2. Data source → CSV, JSON, CMS, or database
3. Templates → reusable page components with real prose
4. Dynamic routes → generateStaticParams from data
5. Technical SEO → metadata, schema, sitemap, internal links
```

## Next.js App Router Pattern

```typescript
// app/[slug]/page.tsx
import { notFound } from "next/navigation";

export const dynamicParams = false; // 404 unknown slugs
export const revalidate = 86400; // ISR: 24h

export async function generateStaticParams() {
  const rows = await getAllPages(); // same source as sitemap
  return rows.map((row) => ({ slug: row.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = await getPageBySlug(slug);
  if (!page) return {};

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `https://example.com/${slug}` },
    openGraph: { title: page.title, description: page.description },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = await getPageBySlug(slug);
  if (!page) notFound();

  return (
    <main>
      <article>
        <h1>{page.title}</h1>
        {/* Render structured sections — not a key-value dump */}
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(page.jsonLd) }}
      />
    </main>
  );
}
```

## URL Structure

| Pattern | Example | Use when |
|---------|---------|----------|
| `[entity]` | `/new-york` | Single-dimension pages |
| `[category]/[slug]` | `/integrations/slack` | Hierarchical topics |
| `[a]-vs-[b]` | `/notion-vs-airtable` | Comparison pages |

Use lowercase slugs, hyphens, and stable canonical URLs. Keep depth ≤ 3 segments when possible.

## Sitemap

Build `app/sitemap.ts` from the **same data source** as `generateStaticParams`:

```typescript
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = await getAllPages();
  return pages.map((p) => ({
    url: `https://example.com/${p.slug}`,
    lastModified: p.updatedAt,
    changeFrequency: "weekly",
    priority: p.priority ?? 0.7,
  }));
}
```

For 50k+ URLs, use `generateSitemaps` to chunk into `/sitemap/[id].xml`.

## Content Quality Guardrails

- Each page needs unique title, description, H1, and body copy derived from row data
- Add entity-specific sections: steps, FAQs, comparisons, local facts — not boilerplate
- Programmatic internal links between related pages (hub-and-spoke clusters)
- `notFound()` for missing slugs; never render empty placeholder pages
- Validate minimum word count and required fields before publishing

## Schema Markup

Pick one primary type per page:

| Page type | Schema |
|-----------|--------|
| Article / guide | `Article` or `HowTo` |
| Local / directory | `LocalBusiness` or `ItemList` |
| FAQ-heavy | `FAQPage` |
| Product comparison | `Product` + `Review` |

Embed JSON-LD per page from row data — never reuse identical schema across all URLs.

## SEO Checklist

- [ ] Unique title and meta description per page
- [ ] Canonical URL set
- [ ] JSON-LD structured data
- [ ] Dynamic sitemap with `lastModified`
- [ ] Internal links to related pages
- [ ] Images with descriptive `alt` text
- [ ] `dynamicParams = false` to block crawler bloat
- [ ] Core Web Vitals: server-render, minimal client JS on content pages

## Agent Behavior

When acting as a programmatic SEO agent:

1. **Discover** — ask for or infer the entity dataset, target keywords, and page archetype
2. **Design** — propose URL pattern, data schema (Zod), and template sections
3. **Implement** — dynamic route + `generateStaticParams` + `generateMetadata` + sitemap
4. **Validate** — check uniqueness, canonicals, schema, and internal link graph
5. **Scale** — use ISR (`revalidate`) or on-demand revalidation for large catalogs

Fetch current Next.js metadata APIs via Context7 (`/vercel/next.js`) when APIs may have changed.
