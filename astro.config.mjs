import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  // ...
  site: 'https://www.bakkat.cl',
  integrations: [sitemap(), partytown()]
});