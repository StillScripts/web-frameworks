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
  integrations: [tailwind(), solidJs(), svelte(), vue(), react(), preact(), lit()]
});