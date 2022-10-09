import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import solidJs from "@astrojs/solid-js";
import vue from "@astrojs/vue";
import svelte from "@astrojs/svelte";
import preact from "@astrojs/preact";

import lit from "@astrojs/lit";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), solidJs(), svelte(), preact(), lit(), vue()]
});