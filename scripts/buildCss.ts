import { build } from "vite";
import config from "../packages/theme/vite.config";
import fs from "fs-extra";
import path from "path";

export default async function buildCss() {
  await build(config);

  const packageJson = require("../packages/theme/package.json");
  console.log(
    "packageJson: ",
    path.resolve(__dirname, "../packages/theme/readme.md")
  );
  const baseOutDir = config.build.outDir;

  // 拷贝 README.md文件, 必须先创建dist目录
  fs.copyFileSync(
    path.resolve(__dirname, "../packages/theme/readme.md"),
    path.resolve(baseOutDir + "/readme.md")
  );
  // 拷贝package.json文件
  fs.outputFile(
    path.resolve(baseOutDir, `package.json`),
    JSON.stringify(packageJson, null, 2)
  );
}
