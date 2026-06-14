import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rehypeImgAttrs from './src/plugins/rehype-img-attrs.mjs';

export default defineConfig({
  site: 'https://vnck.xyz',
  integrations: [sitemap()],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  markdown: {
    rehypePlugins: [rehypeImgAttrs],
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      defaultColor: false,
    },
  },
});
