import Theme from "vitepress/dist/client/theme-default";
// import PlutoUI from "../../../packages/pluto-ui/index";
import PlutoUI from "pluto-ui";
import "@pluto-ui/theme";
// 主题样式
import "vitepress-theme-demoblock/theme/styles/index.css";
// 插件的组件，主要是demo组件
import Demo from "vitepress-theme-demoblock/components/Demo.vue";
import DemoBlock from "vitepress-theme-demoblock/components/DemoBlock.vue";

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(PlutoUI);
    app.component("Demo", Demo);
    app.component("DemoBlock", DemoBlock);
  },
};
