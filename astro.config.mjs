// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://philippe-ong.github.io',
  base: '/jessicas-tea-collection/',
  integrations: [sitemap()],
  i18n: {
    locales: ['de', 'fr', 'en'],
    defaultLocale: 'de',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  build: {
    format: 'directory',
  },
});
