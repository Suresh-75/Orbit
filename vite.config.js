import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [tailwindcss()],
  base: "/orbit/",
  resolve: {
    alias: {
      "@": path.resolve(path.dirname(import.meta.url), "src"), // Define alias for "src" folder
    },
  },
});
