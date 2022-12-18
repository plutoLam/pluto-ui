import { App } from "vue";
import { PlButton } from "./components/Button";
import { PlDivider } from "./components/Divider";

// 导出单独组件
export { PlButton, PlDivider };

// 编写一个插件，实现一个install方法

export default function install(app: App): void {
  app.component("PlButton", PlButton);
  app.component("PlDivider", PlDivider);
}
