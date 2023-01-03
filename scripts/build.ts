import buildComponents from "./buildComponents";
import buildCss from "./buildCss";
// import { generateDTS } from "./type";
const buildAll = async () => {
  await buildComponents();

  await buildCss();
  // console.log(
  //   "path",
  //   path.normalize(path.resolve(config.build.outDir, `pluto-ui.esm.js`))
  // );
  // 生成配置DTS配置文件入口
  // generateDTS(
  //   path.normalize(path.resolve(config.build.outDir, `pluto-ui.esm.js`))
  // );
};

buildAll();
