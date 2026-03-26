import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

// Static-only Vite config — no backend, no tRPC, no Manus platform plugins.
// Builds to dist/ for deployment to VentraIP cPanel (upload dist/ contents to public_html/).

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
    },
  },
  envDir: path.resolve(import.meta.dirname),
  root: path.resolve(import.meta.dirname, "client"),
  publicDir: path.resolve(import.meta.dirname, "client", "public"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunk for React core
          "vendor-react": ["react", "react-dom"],
          // Vendor chunk for routing
          "vendor-router": ["wouter"],
          // Vendor chunk for UI libraries
          "vendor-ui": ["framer-motion", "lucide-react"],
          // Vendor chunk for form libraries
          "vendor-forms": ["react-hook-form", "@hookform/resolvers", "zod"],
          // Vendor chunk for Radix UI
          "vendor-radix": [
            "@radix-ui/react-accordion",
            "@radix-ui/react-dialog",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-select",
            "@radix-ui/react-tabs",
            "@radix-ui/react-tooltip",
          ],
        },
      },
    },
  },
  server: {
    host: true,
    port: 3000,
    allowedHosts: [
      ".manuspre.computer",
      ".manus.computer",
      ".manus-asia.computer",
      ".manuscomputer.ai",
      ".manusvm.computer",
      "localhost",
      "127.0.0.1",
    ],
  },
});
