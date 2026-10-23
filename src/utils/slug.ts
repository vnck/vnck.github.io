// Kept free of astro:content so astro.config.mjs can import it too.
export function deriveSlug(id: string, permalink?: string): string {
  if (permalink) {
    const parts = permalink.split('/').filter(Boolean);
    return parts[parts.length - 1];
  }
  return id.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.md$/, '');
}
