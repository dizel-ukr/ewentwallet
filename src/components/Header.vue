<template>
  <div class="s-header">
    <div class="s-header__hat">
      <img src="../assets/logo.png" alt="" class="sheader__logo" />
      <div class="s-header__land-switcher">
        <LangSwitch />
      </div>
    </div>

    <div class="s-header__wrapper">
      <div class="s-header__title-wrapper">
        <div class="s-header__title">
          <b>Y</b>our <span class="s-header__title_orange">events</span><br />
          and tickets<br />
          in a single <span class="s-header__title_blue">wallet</span>
        </div>

        <Buttons />
      </div>

      <div class="s-header__img-wrapper">
        <img src="../assets/header-phone.png" alt="Phone scan QR cods" />
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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.s-header {
  min-height: 704px;
  background: url("../assets/header-bg.png") top center no-repeat;

  &__hat {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1388px;
    max-width: 100%;
    height: 50px;
    margin: 0 auto;
  }

  &__wrapper {
    display: flex;
    justify-content: space-between;
    width: 1388px;
    margin: 0 auto;
    max-width: 100%;
  }
  &__title-wrapper {
    width: 50%;
  }
  &__title {
    color: white;
    text-align: left;
    font: 600 5.6rem/1.25 "Montserrat", sans-serif;
    margin-top: 80px;
    margin-bottom: 130px;
    text-transform: uppercase;

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
  &__img-wrapper {
    width: 50%;

    img {
      // width: 100%;
      margin: 0 -120px;
      max-width: 98%;
    }
  }
}
</style>
