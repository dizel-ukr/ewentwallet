import Vue from "vue";
import VueI18n from "vue-i18n";
// import ru from "./json/ru.json";
import en from "./json/data.json";

Vue.use(VueI18n);

let conf = {
  locale: "en",
  fallbackLocale: "en",
  messages: {
    ru: en.ru,
    en: en.en,
    cn: en.cn
  }
};
const i18n = new VueI18n(conf);

export default i18n;
