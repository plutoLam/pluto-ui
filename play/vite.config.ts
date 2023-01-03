import { defineConfig } from "vite";
import pluginVue from "@vitejs/plugin-vue";
import { UserConfig } from "vite";

export const config = {
   plugins: [pluginVue()],
};

export default defineConfig(config as UserConfig);
