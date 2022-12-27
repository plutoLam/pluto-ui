import { defineConfig } from "vite";
import { UserConfig } from "vite";
import pluginVue from "@vitejs/plugin-vue";

export const config = {
  plugins: [pluginVue()],
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: "happy-dom",
    // 支持tsx组件，很关键
    // transformMode: {
    //   web: [/.[tj]sx$/],
    // },
    provider: "istanbul", // or 'c8',
    reporter: ["dot", "json"], // 没有text这个选项，加上这个报错
  },
};

export default defineConfig(config as UserConfig);
