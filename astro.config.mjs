// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import aiRobotsTxt from 'astro-ai-robots-txt';

// https://astro.build/config
export default defineConfig({
  site: 'https://sensi.no',
  integrations: [sitemap(), aiRobotsTxt()]
});
