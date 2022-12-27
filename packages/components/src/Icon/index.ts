import PlIcon from "./icon.vue";
import { App } from "vue";

// 导出Button组件
export { PlIcon };

// 导出Vue插件
export default {
  install(app: App) {
    app.component(PlIcon.name, PlIcon);
  },
};
