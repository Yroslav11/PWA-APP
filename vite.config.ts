import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA, type ManifestOptions } from "vite-plugin-pwa";

const manifest: Partial<ManifestOptions> = {
  theme_color: "#ffd438",
  background_color: "#2EC6FE",
  icons: [
    {
      purpose: "maskable",
      sizes: "512x512",
      src: "icon512_maskable.png",
      type: "image/png",
    },
    {
      purpose: "any",
      sizes: "512x512",
      src: "icon512_rounded.png",
      type: "image/png",
    },
  ],
  screenshots: [{
    src: "/screenshots/desktop.png",
    type: "image/png",
    sizes: '454x818',
    form_factor: 'narrow'
  }, 
  {
    src: "/screenshots/mobile.png",
    type: "image/png",
    sizes: '1919x967',
    form_factor: 'wide'
  }
],
  orientation: "any",
  display: "standalone",
  lang: "ru",
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{html, css, js, ico, png, svg}"],
      },
      manifest: manifest,
    }),
  ],
});
