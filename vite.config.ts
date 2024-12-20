import { defineConfig, PluginOption } from "vite";
import deno from "@deno/vite-plugin";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  root: "src/client", // Set the root directory to 'src/client'
  build: {
    rollupOptions: {
      input: "src/client/index.html", // Define the entry point for the build
    },
  },
  plugins: [deno() as PluginOption, react() as PluginOption],
});
