import { createApp } from "vue";
import PlutoUI from "pluto-ui";
import "@pluto-ui/theme";

import App from "./App.vue";

createApp(App).use(PlutoUI).mount("#app");
