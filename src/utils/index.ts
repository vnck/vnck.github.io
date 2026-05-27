export function readingTime(body: string, override?: number): number {
  if (override !== undefined) return override;
  const chars = body.replace(/\s/g, '').length;
  return Math.floor(chars / 600) + 1;
}

export function formatDate(date: Date): string {
  const d = new Date(date);
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

export function deriveSlug(id: string, permalink?: string): string {
  if (permalink) {
    const parts = permalink.split('/').filter(Boolean);
    return parts[parts.length - 1];
  }
  return id.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.md$/, '');
}

export function getAllTags(entries: { data: { tags?: string[] } }[]): string[] {
  const tagSet = new Set<string>();
  for (const entry of entries) {
    for (const tag of entry.data.tags ?? []) {
      tagSet.add(tag);
    }
  }
  return Array.from(tagSet).sort();
}
