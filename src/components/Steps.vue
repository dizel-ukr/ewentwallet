<template>
  <div class="s-steps">
    <Step
      v-for="(step, i) in stepsData[this.$i18n.locale].steps"
      :step="step"
      :i="i"
      :key="i"
    />
    <div class="s-steps__scroll-btn" v-on:click="scrollToNext"></div>
  </div>
</template>

<script>
import Step from "./Step.vue";
import stepsD from "../lang/json/data.json";

export default {
  name: "Steps",
  components: {
    Step
  },
  data() {
    return {
      datalocale: this.$i18n.locale,
      stepsData: stepsD
    };
  },
  methods: {
    scrollToNext: function() {
      window.scrollTo({
        top: document.querySelector(".s-header").offsetHeight
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.s-steps {
  position: relative;
  padding-bottom: 120px;
  margin-top: -225px;

  &__scroll-btn {
    display: block;
    position: absolute;
    width: 50px;
    height: 50px;
    background: url("../assets/arrow-blue-down.png") center no-repeat, #ffffff;
    bottom: calc(100% - 52px);
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    cursor: pointer;
  }
}
@media (max-width: 1388px) {
  .s-steps {
    padding-bottom: 100px;
    margin-top: -175px;
  }
}
@media (max-width: 640px) {
  .s-steps {
    padding-bottom: 0;
    margin-top: 0;

    &__scroll-btn {
      display: none;
    }
  }
}
</style>
