import type { CollectionEntry } from 'astro:content';

export type BlogEntry = CollectionEntry<'blog'>;

export function getRelatedPosts(current: BlogEntry, all: BlogEntry[], limit = 3): BlogEntry[] {
  const others = all.filter((p) => p.id !== current.id && !p.data.draft);

  const byTag = others.filter((p) =>
    p.data.tags.some((tag) => current.data.tags.includes(tag)),
  );

  const merged = [...byTag];
  for (const post of others.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())) {
    if (!merged.find((p) => p.id === post.id)) merged.push(post);
  }

  return merged.slice(0, limit);
}
