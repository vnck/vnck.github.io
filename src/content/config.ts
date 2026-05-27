import { defineCollection, z } from 'astro:content';

const postSchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  draft: z.boolean().optional(),
  tags: z.array(z.string()).default([]),
  description: z.string().optional(),
  image: z.string().optional(),
  modified_date: z.coerce.date().optional(),
  redirect_to: z.string().optional(),
  permalink: z.string().optional(),
  reading_time: z.number().optional(),
  jekyll_layout: z.string().optional(),
  categories: z.union([z.string(), z.array(z.string())]).optional(),
});

export const collections = {
  writings: defineCollection({ type: 'content', schema: postSchema }),
  projects: defineCollection({ type: 'content', schema: postSchema }),
  journal: defineCollection({ type: 'content', schema: postSchema }),
};
