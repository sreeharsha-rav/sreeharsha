import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindv4 from "@tailwindcss/vite";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://astro-nano-demo.vercel.app",
  integrations: [mdx(), sitemap(), react()],
  vite: {
    plugins: [tailwindv4()],
  },
});
