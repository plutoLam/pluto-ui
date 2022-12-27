import { App } from "vue";
import componentsPlugin from "./components";

export default function install(app: App): void {
  componentsPlugin.forEach((component) => {
    app.use(component);
  });
}
