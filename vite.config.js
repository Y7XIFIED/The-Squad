import { defineConfig } from "vite";

export default defineConfig({
  assetsInclude: [
    "**/*.jpeg",
    "**/*.jpg",
    "**/*.png",
    "**/*.svg",
    "**/*.gif",
  ],
  build: {
    copyPublicDir: true,
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },
});
