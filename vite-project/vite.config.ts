import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist"
  },
  server: {
    port: 3000
  },
  base: "/",
  define: {
    "process.env": {} // Fixes potential env issues
  }
});
