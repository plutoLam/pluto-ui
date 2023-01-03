import { defineConfig, InlineConfig } from "vite";
// import pluginVue from "@vitejs/plugin-vue";
import { UserConfig } from "vite";
import path from "path";

const rollupOptions = {
  output: {
    assetFileNames: `[name].css`, // 防止出现哈希后缀
  },
};
const baseDir = path.resolve(__dirname, "../../dist/theme");
export const config = {
  plugins: [],
  build: {
    rollupOptions,
    minify: false, // boolean | 'terser' | 'esbuild' 是否开启混淆 两个混淆工具  terser、esbuild
    sourcemap: true, // 输出单独 source文件
    brotliSize: true, // 生成压缩大小报告
    cssCodeSplit: true,
    lib: {
      entry: path.resolve(__dirname, "./index.scss"),
      name: "theme",
      fileName: "theme", // 输出文件名的前缀，和模块类型配合组成最终的文件名
    },
    outDir: baseDir,
  },
};

export default defineConfig(config as UserConfig) as InlineConfig;
