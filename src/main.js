import Vue from "vue";
// import VueI18n from 'vue-i18n';
import i18n from "./lang/lang.js";
import App from "./App.vue";

Vue.config.productionTip = false;
// Vue.use(VueI18n);

new Vue({
  i18n,
  render: h => h(App)
}).$mount("#app");
