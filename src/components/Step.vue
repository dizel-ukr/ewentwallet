<template>
  <div class="s-step__item" :key="step.id">
    <div class="s-step__line">
        <img v-if="step.id == 1" src="../assets/left-to-center2-img.png" alt="">
        <img v-else-if="step.id % 2 == 0" src="../assets/left-to-right-img.png" alt="">
        <img v-else-if="step.id % 2 == 1" src="../assets/right-to-left-img.png" alt="">
        <span class="s-step__line-number">{{ step.id }}</span>
    </div>

    <div class="s-step__content">
      <div class="s-step__img">
        <img v-if="checkWidth" :src="step.imgUrl" alt="" />
        <img v-else :src="step.imgAltUrl" alt="" />
      </div>
      <div class="s-step__text-wrapper">
        <span class="s-step__title">{{ step.title }}</span>
        <span class="s-step__text">{{ step.text }}</span>
        <span class="s-step__link" v-on:click="scroll">Get the App ></span>
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
        imgUrl: String,
        imgAltUrl: String
    }
  },
  computed: {
    checkWidth: function() {
      return window.innerWidth > 640;
    }
  },
  methods: {
    scroll: function(){      
      window.scrollTo({
          top: document.querySelector('#id-prefooter').offsetTop,
          behavior: "smooth"
      });
      // document.querySelector('#id-prefooter').pageYOffset
    }
  }
};
</script>
<style lang="scss" scoped>
.s-step {
  overflow: hidden;
  max-width: 100%;
  &__item {
    overflow: hidden;
    max-width: 100%;
    &:nth-child(even) {
      .s-step__text-wrapper{
        &:after {
          right: calc(100% - 40px);
        }
      }
      
      .s-step__content {
        flex-direction: row-reverse;
      }
    }
    &:nth-child(odd) {
      .s-step__text-wrapper{
        &:after {
          left: calc(100% - 40px);
        }
      }
    }
    &:first-child {
      // margin-top: -115px;
    }
  }
  &__line {
    width: 1388px;
    max-width: 100%;
    margin: 0 auto;

    img {
      width: 1370px;
      max-width: 100%;
    }
  }
  &__line-number {
      display: none;
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
    padding: 10% 7% 0;
    box-sizing: border-box;
    background: #fff;
    border-radius: 40px;
    position: relative;

    &:after {
      content: '';
      display: block;
      position: absolute;
      height: 100%;
      width: 500px;
      background: #fff;
      top: 0;
    }
  }
  &__title {
    display: block;
    font: 600 5.9rem/1 "Montserrat", sans-serif;
    color: #222349;
    // margin-top: 170px;
    margin-bottom: 18%;
    text-align: left;
  }
  &__text {
    display: block;
    font: 400 2.4rem/1.5 "Montserrat", sans-serif;
    color: #222349;
    text-align: left;
    margin-bottom: 25px;
  }
  &__link {
    font: 600 2rem/1 "Montserrat", sans-serif;
    color: #007aff;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
}
@media(max-width: 640px){
    .s-step {
        &__item {
            z-index: 1;
            background: linear-gradient(to bottom, transparent 0%, transparent calc(100% - 60px), #a7d9ff calc(100% - 59px) ,#a7d9ff 100%);

            &:first-child {
                margin-top: 0;
                .s-step__line-number {
                    padding-top: 0;
                }
            }
            &:nth-child(even){
              background: linear-gradient(to bottom, #a7d9ff 0%, #a7d9ff calc(100% - 60px), transparent calc(100% - 59px) ,transparent 100%);

                .s-step__line-number {
                    color: #fff;
                    border-color: #fff;
                }
            }
        }
        &__line {
            padding-top: 20px;
            img {
                display: none;
            }
        }
        &__line-number {
            display: inline-block;
            width: 40px;
            height: 40px;
            margin-bottom: 35px;
            border: 2px solid #a7d9ff;
            border-radius: 50%;

            font: 400 16px/40px "Montserrat", sans-serif;
            color: #a7d9ff;
        }
        &__content {
            flex-direction: column-reverse !important;
            img {
                z-index: 9999;
            }
        }
        &__img,
        &__text-wrapper {
            width: 100%;
            background: none;
            padding-top: 0;
            text-align: center;

            &:after {
                display: none;
            }
        }
        &__title,
        &__text {
            text-align: center;
            margin-bottom: 30px;
        }
        &__link {
          font-size: 2.5rem;
          display: inline-block;
          margin-bottom: 45px;
        }
    }
}
</style>