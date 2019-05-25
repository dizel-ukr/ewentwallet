<template>
  <div class="s-header">
    <div class="s-header__hat">
      <img src="../assets/logo.png" alt="" class="sheader__logo" />
      <div class="s-header__land-switcher">
        <LangSwitch v-bind:onSelectLang='onSelectLang' lang='cn'/>
      </div>
    </div>

    <div class="s-header__wrapper">
      <div class="s-header__title-wrapper">
        <div class="s-header__title" v-html="$t('title')"></div>

        <Buttons v-if="chekWidth" />
      </div>

      <div class="s-header__img-wrapper">
        <img v-if="chekWidth" src="../assets/header-phone.png" alt="Phone scan QR cods" />
        <img v-else src="../assets/header-phone-small.png" alt="Phone scan QR cods" />
      </div>
    </div>
  </div>
</template>

<script>
import LangSwitch from "./LangSwitch.vue";
import Buttons from "./Buttons.vue";

export default {
  name: "Header",
  components: {
    LangSwitch,
    Buttons
  },
  params: {
    data: Object
  },
  mounted: function () {
      window.addEventListener('resize', this.getWindowWidth);
      window.addEventListener('resize', this.getWindowWidth);
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.getWindowWidth)
  },
  computed: {
    chekWidth(){
      return innerWidth > 640
    }
  },
  methods: {
		getWindowWidth() {
				// chekWidth
    },
    onSelectLang(lang){
      console.log('child component said login', lang.d)
    }
  }
};
</script>

<style scoped lang="scss">
.s-header {
  position: relative;
  min-height: 800px;
  background: url("../assets/header-bg.png") top center no-repeat;

  &__hat {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1280px;
    max-width: 100%;
    height: 50px;
    margin: 0 auto;
    box-sizing: border-box;
  }

  &__wrapper {
    display: flex;
    justify-content: space-between;
    // width: 1388px;
    margin: 0 auto;
    max-width: 100%;
  }
  &__title-wrapper {
    width: 50%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-end;
  }
  &__title {
    color: white;
    text-align: left;
    font: 700 5rem/1.25 "Montserrat", sans-serif;
    margin-top: 80px;
    margin-bottom: 130px;
    text-transform: uppercase;
    width: 640px;
    max-width: 100%;
    box-sizing: border-box;

    b {
      font-weight: 600;
      font-size: 7.2rem;
    }

    &_orange {
      color: #eb5b58;
    }
    &_blue {
      color: #222349;
    }
  }
  .buttons {
    width: 640px;
    max-width: 100%;

  }
  &__img-wrapper {
    width: 50%;

    img {
      // width: 100%;
      margin: 60px 0 0;
      max-width: 100%;
    }
  }
}
@media (max-width: 1388px){
  .s-header {
    &__hat {width: 100%;}
    &__hat,
    &__title-wrapper {
      padding-left: 20px;
      padding-right: 60px;
      box-sizing: border-box;
    }
  }
}
@media (max-width: 1280px){
  .s-header {
    &__hat,
    &__title-wrapper {
      padding-left: 100px;
      padding-right: 120px;
    }
  }
}
@media (max-width: 960px){
  .s-header {
    &__hat,
    &__title-wrapper {
      padding-left: 60px;
      padding-right: 80px;
    }
  }
}
@media(max-width: 640px){
  .s-header {
    background: url("../assets/header-bg-small.png") top center no-repeat;
    background-size: 100% 100%;
    min-height: 650px;

    &__hat {
      padding-left: 20px;
      padding-right: 35px;
    }
    &__wrapper {
      flex-direction: column;
      align-items: center;
    }
    &__title-wrapper {
      width: 100%;
      box-sizing: border-box;
      text-align: center;
      padding-left: 20px;
      padding-right: 20px;
    }
    &__img-wrapper {
      width: 100%;
      padding-top: 48px;

      img {
        width: 100%;
        margin: 0 -25px;
      }
    }
    &__title {
      text-align: center;
      margin-top: 50px;
    }
    &__title {
      margin-top: 40px;
      margin-bottom: 0;
    }
  }
}
</style>
