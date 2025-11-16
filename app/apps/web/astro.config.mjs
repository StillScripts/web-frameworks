import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import svelte from "@astrojs/svelte";
import vue from "@astrojs/vue";
import react from "@astrojs/react";
import preact from "@astrojs/preact";

import lit from "@astrojs/lit";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    // Configure JSX renderers with file patterns to avoid conflicts
    react({
      include: ['**/React.tsx']
    }),
    preact({
      include: ['**/Preact.tsx']
    }),
    solidJs({
      include: ['**/Solid.tsx']
    }),
    svelte(),
    vue(),
    lit()
  ]
});