import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import sitemap from '@astrojs/sitemap';
import rehypeImgAttrs from './src/plugins/rehype-img-attrs.mjs';

export default defineConfig({
  site: 'https://vnck.xyz',
  integrations: [sitemap()],
  // Astro 7 defaults to 'jsx', which strips whitespace between inline elements.
  compressHTML: true,
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  markdown: {
    // Astro 7 defaults to its native Markdown pipeline; unified() keeps rehype plugins working.
    processor: unified({ rehypePlugins: [rehypeImgAttrs] }),
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      defaultColor: false,
    },
  },
});
