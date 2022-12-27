import { defineConfig, InlineConfig } from "vite";
// import pluginVue from "@vitejs/plugin-vue";
import { UserConfig } from "vite";
import dts from "vite-plugin-dts";
import path from "path";

const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    assetFileNames: `[name].css`, // 防止出现哈希后缀
    globals: {
      // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
      vue: "Vue",
    },
  },
};
const baseDir = path.resolve(__dirname, "../../dist");
export const config = {
  plugins: [
    // pluginVue(),
    dts({
      outputDir: path.resolve(baseDir, "types"),
      insertTypesEntry: false, // 插入TS 入口
      copyDtsFiles: true, // 是否将源码里的 .d.ts 文件复制到 outputDir
    }),
  ],
  build: {
    rollupOptions,
    minify: false, // boolean | 'terser' | 'esbuild' 是否开启混淆 两个混淆工具  terser、esbuild
    sourcemap: true, // 输出单独 source文件
    brotliSize: true, // 生成压缩大小报告
    cssCodeSplit: true,
    lib: {
      entry: path.resolve(__dirname, "./index.ts"),
      name: "PlutoUI",
      fileName: "pluto-ui", // 输出文件名的前缀，和模块类型配合组成最终的文件名
      // @ts-ignore
      formats: ["esm", "umd", "amd", "cjs"], // 导出模块类型
    },
    outDir: baseDir,
  },
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: "happy-dom",
    // 支持tsx组件，很关键
    transformMode: {
      web: [/.[tj]sx$/],
    },
    provider: "istanbul", // or 'c8',
    reporter: ["dot", "json"], // 没有text这个选项，加上这个报错
  },
};

export default defineConfig(config as UserConfig) as InlineConfig;
