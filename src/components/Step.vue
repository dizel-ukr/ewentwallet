<template>
  <div class="s-steps__item" :key="step.id">
    <div class="s-steps__line">
        <img v-if="step.id == 1" src="../assets/left-to-center-img.png" alt="">
        <img v-else-if="step.id % 2 == 0" src="../assets/left-to-right-img.png" alt="">
        <img v-else-if="step.id % 2 == 1" src="../assets/right-to-left-img.png" alt="">
    </div>

    <div class="s-steps__content">
      <div class="s-steps__img">
        <img :src="step.imgUrl" alt="" />
      </div>
      <div class="s-steps__text-wrapper">
        <span class="s-steps__title">{{ step.title }}</span>
        <span class="s-steps__text">{{ step.text }}</span>
        <a class="s-steps__link" href="#">Get the App ></a>
      </div>
    </div>
  </div>
</template>
<script>
// console.log(step);
export default {
  name: "Step",
  props: {
    step: {
        id: Number,
        title: String,
        text: String,
        imgUrl: String
    }
  }
};
</script>
<style lang="scss" scoped>
.s-steps {
  // padding-bottom: 120px;
  &__item {
    &:nth-child(even) {
      .s-steps__content {
        flex-direction: row-reverse;
      }
    }
    &:first-child {
      margin-top: -115px;
    }
  }
  &__line {
    width: 1388px;
    max-width: 100%;
    margin: 0 auto;

    img {
        max-width: 100%;
    }
  }
  &__content {
    width: 1388px;
    margin: 0 auto;
    max-width: 100%;
    display: flex;
  }
  &__img {
    width: 50%;
    img {
        max-width: 100%;
    }
  }
  &__text-wrapper {
    width: 50%;
    text-align: left;
    padding: 12.25% 7% 0;
    box-sizing: border-box;
  }
  &__title {
    display: block;
    font: 600 6rem/1 "Montserrat", sans-serif;
    color: #222349;
    // margin-top: 170px;
    margin-bottom: 120px;
    text-align: left;
  }
  &__text {
    display: block;
    font: 400 2rem/1.5 "Montserrat", sans-serif;
    color: #222349;
    text-align: left;
    margin-bottom: 25px;
  }
  &__link {
    font: 600 1.8rem/1 "Montserrat", sans-serif;
    color: #007aff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
