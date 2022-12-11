import { App } from "vue";
import { PlButton } from "./components/Button";
import { Link } from "./components/Link";

// 导出单独组件
export { PlButton };

// 编写一个插件，实现一个install方法

export default function install(app: App): void {
  app.component(PlButton.name, PlButton);
  app.component(Link.name, Link);
}
