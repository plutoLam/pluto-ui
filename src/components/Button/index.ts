import PlButton from "./Button.vue";
import { App } from "vue";

// 导出Button组件
export { PlButton };

// 导出Vue插件
export default {
  install(app: App) {
    app.component(PlButton.name, PlButton);
  },
};
