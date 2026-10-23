import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
import { existsSync } from 'node:fs';
import path from 'node:path';

// Every tag in use; a typo fails the build instead of quietly creating a new tag page.
export const TAGS = ['meta', 'sidequest', 'smallworld', 'codespace', 'infrastructure', 'databodies', 'fiction', 'ai'] as const;

const postSchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  draft: z.boolean().optional(),
  tags: z.array(z.enum(TAGS)).default([]),
  description: z.string().optional(),
  // Site-absolute path to a file under public/; checked at build time so a typo fails loudly.
  image: z.string()
    .refine(p => p.startsWith('/') && existsSync(path.join(process.cwd(), 'public', p)), 'image must be an existing path under public/, starting with /')
    .optional(),
  modified_date: z.coerce.date().optional(),
  redirect_to: z.string().optional(),
  // Per-post CSS/JS, as paths under src/assets/ (e.g. sg-fare-hikes/fares.css); Astro hashes them for cache busting.
  styles: z.array(z.string()).default([]),
  scripts: z.array(z.string()).default([]),
  permalink: z.string().optional(),
  reading_time: z.number().optional(),
});

export const collections = {
  writings: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/writings' }),
    schema: postSchema,
  }),
  projects: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
    schema: postSchema,
  }),
  journal: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/journal' }),
    schema: postSchema,
  }),
};
