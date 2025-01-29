import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: "src",
  server: {
    cors: "*",
    hmr: {},
    fs: {
      allow: [".."],
    },
  },
  optimizeDeps: {
    include: ["gsap", "gsap/ScrollTrigger"],
  },
  build: {
    minify: true,
    emptyOutDir: true,
    outDir: resolve(__dirname, "dist"),
    rollupOptions: {
      // Multiple entry points for page-specific scripts
      input: {
        main: resolve(__dirname, "src/js/index.js"),
        // home: resolve(__dirname, "src/js/pages/home.js"),
      },
      output: {
        format: "esm", // Use 'esm' or 'iife' instead of 'umd' for multiple entries
        entryFileNames: "[name].[hash].js", // Dynamic file names with hashes to avoid caching issues
        chunkFileNames: "assets/[name].[hash].js", // Separate chunk files (if necessary)
        assetFileNames: "assets/[name].[ext]", // Asset files (like images) will be bundled into assets/
        compact: true,
        inlineDynamicImports: false, // Ensure this is disabled
      },
    },
  },
});
