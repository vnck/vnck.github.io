import { getCollection, type CollectionEntry } from 'astro:content';

export type PostCollection = 'writings' | 'projects' | 'journal';
export type Post = CollectionEntry<PostCollection>;

export async function getPublished<C extends PostCollection>(collection: C): Promise<CollectionEntry<C>[]> {
  return getCollection(collection, ({ data }: { data: { draft?: boolean } }) => !data.draft);
}

export const byDateDesc = (a: Post, b: Post) => b.data.date.getTime() - a.data.date.getTime();

export function postUrl(entry: Post): string {
  return `/${entry.collection}/${deriveSlug(entry.id, entry.data.permalink)}`;
}

export function readingTime(body: string | undefined, override?: number): number {
  if (override !== undefined) return override;
  const prose = (body ?? '')
    .replace(/^\[\^[^\]]+\]:.*$/gm, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/https?:\/\/\S+/g, '');
  const words = prose.split(/\s+/).filter(Boolean).length;
  // ~230 wpm: typical adult reading speed for English prose
  return Math.max(1, Math.round(words / 230));
}

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

// Frontmatter dates parse as UTC midnight; UTC getters keep the day right whatever the build machine's zone.
export function formatDate(date: Date): string {
  return `${date.getUTCDate()} ${MONTHS[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
}

export function deriveSlug(id: string, permalink?: string): string {
  if (permalink) {
    const parts = permalink.split('/').filter(Boolean);
    return parts[parts.length - 1];
  }
  return id.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.md$/, '');
}

export function getAllTags(entries: { data: { tags?: string[] } }[]): string[] {
  return [...new Set(entries.flatMap(e => e.data.tags ?? []))].sort();
}
