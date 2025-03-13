import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
    build: {
      outDir: 'build', // Đảm bảo thư mục đầu ra là 'build'
    },
  },
});
