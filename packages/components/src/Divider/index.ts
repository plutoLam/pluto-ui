import PlDivider from "./Divider.vue";
import { App } from "vue";

// 导出Button组件
export { PlDivider };

// 导出Vue插件
export default {
  install(app: App) {
    app.component("PlDivider", PlDivider);
  },
};
