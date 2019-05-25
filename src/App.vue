<template>
  <div id="app">
    <Header />
    <Steps />
    <AllinOne />
    <PreFooter />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Steps from "./components/Steps.vue";
import AllinOne from "./components/AllinOne.vue";
import PreFooter from "./components/PreFooter.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Header,
    Steps,
    AllinOne,
    PreFooter,
    Footer
  },
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat:200,400,600,700&subset=cyrillic");
html,
body {
  padding: 0;
  margin: 0;
  font-size: 10px;
  background: #f7f3e9;
  scroll-behavior: smooth;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
@media (max-width: 1280px) {
  html,
  body {
    font-size: 9px !important;
  }
}
@media (max-width: 960px) {
  html,
  body {
    font-size: 8px !important;
  }
}
@media (max-width: 720px) {
  html,
  body {
    font-size: 7px !important;
  }
}
</style>
