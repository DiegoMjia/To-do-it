import { createApp } from "vue";
import "./assets/CSS/style.css";
import router from "./router";
import { createPinia } from "pinia";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import piniaPersistedState  from "pinia-plugin-persistedstate";
import axios from "axios";

const app = createApp(App);

const pinia = createPinia();

app.config.globalProperties.$axios = axios;
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
pinia.use(piniaPersistedState);
app.use(pinia);
app.use(router);
app.mount("#app");
