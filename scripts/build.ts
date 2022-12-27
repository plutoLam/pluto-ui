import fs from "fs-extra";
import path from "path";
import config from "../packages/components/vite.config";
import buildComponents from "./buildComponents";
// import { generateDTS } from "./type";
const buildAll = async () => {
  // const inline: InlineConfig =
  //   viteConfig;

  const baseOutDir = config.build.outDir;
  // console.log("baseOutDir: ", baseOutDir);
  const packageJson = require("../package.json");
  packageJson.main = "pluto-ui.umd.js";
  packageJson.module = "pluto-ui.esm.js";
  // ts的类型定义入口文件
  packageJson.types = "pluto-ui.d.ts";
  fs.outputFile(
    path.resolve(baseOutDir, `package.json`),
    JSON.stringify(packageJson, null, 2)
  );

  // 拷贝 README.md文件
  fs.copyFileSync(
    path.resolve("./readme.md"),
    path.resolve(baseOutDir + "/readme.md")
  );
  // console.log(
  //   "path",
  //   path.normalize(path.resolve(config.build.outDir, `pluto-ui.esm.js`))
  // );
  // 生成配置DTS配置文件入口
  // generateDTS(
  //   path.normalize(path.resolve(config.build.outDir, `pluto-ui.esm.js`))
  // );
  buildComponents();
};

buildAll();
