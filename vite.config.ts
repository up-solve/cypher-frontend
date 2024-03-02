import { defineConfig, loadEnv } from "vite";

import svgr from "vite-plugin-svgr";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default ({ mode }: { mode: string }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    server: {
      port: parseInt(process.env.VITE_PORT!) | 3000,
    },
    resolve: {
      alias: {
        "./runtimeConfig": "./runtimeConfig.browser",
        "@assets": path.resolve(__dirname, "./src/assets"),
        "@components": path.resolve(__dirname, "./src/components"),
        "@constants": path.resolve(__dirname, "./src/constants"),
        "@helpers": path.resolve(__dirname, "./src/helpers"),
        "@hooks": path.resolve(__dirname, "./src/hooks"),
        "@layouts": path.resolve(__dirname, "./src/layouts"),
        "@pages": path.resolve(__dirname, "./src/pages"),
        "@services": path.resolve(__dirname, "./src/services"),
        "@stores": path.resolve(__dirname, "./src/stores"),
        "@routes": path.resolve(__dirname, "./src/routes"),
        "@interfaces": path.resolve(__dirname, "./src/interfaces"),
        "@validations": path.resolve(__dirname, "./src/validations"),
      },
    },
    plugins: [react(), svgr()],
  });
};
