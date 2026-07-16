import { defineConfig } from "vite";

export default defineConfig({
  base: "/CDLP26-team-impulso/", // 👈 clave
  build: {
    outDir: "docs", // 👈 carpeta que va a leer GitHub Pages
  },
});
