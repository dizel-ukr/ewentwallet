<template>
  <div class="s-steps">
    <Step v-for="step in stepsData"
        :step="step" 
        :key="step.id"
    />
    <div class="s-steps__scroll-btn" v-on:click='scrollToNext'></div>
  </div>
</template>

<script>
import Step from "./Step.vue";

export default {
  components: {
    Step
  },
  data() {
    return {
      stepsData: [
        {
          id: 1,
          title: "Create event QR",
          text:
            "Create unique QR code for your event, engage attendees and make it an experience",
          imgUrl: "/step-one-img.png",
          imgAltUrl: "/step-one-altimg.png"
        },
        {
          id: 2,
          title: "Share event QR",
          text:
            "Publish your event QR code anywhere or share it from the app to invite attendees, friends and partners",
          imgUrl: "/step-two-img.png",
          imgAltUrl: "/step-two-altimg.png"
        },
        {
          id: 3,
          title: "Scan event QR",
          text:
            "Save events in your personal “wallet” simply by scanning QR codes, and never miss out any of them",
          imgUrl: "/step-three-img.png",
          imgAltUrl: "/step-three-altimg.png"
        },
        {
          id: 4,
          title: "Save tickets",
          text: "Store tickets in a single “wallet” to skip the lines at the entrance – just show your ticket in the app",
          imgUrl: "/step-four-img.png",
          imgAltUrl: "/step-four-altimg.png"
        }
      ]
    };
  },
  methods: {
    scrollToNext: function(){      
      window.scrollTo({
          top: document.querySelector('.s-header').offsetHeight
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
    background: url('../assets/arrow-blue-down.png') center no-repeat, #ffffff;
    bottom: calc(100% - 52px);
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    cursor: pointer;
  }
}
@media (max-width: 1388px){
  .s-steps {
    padding-bottom: 100px;
    margin-top: -175px;
  }
}
@media (max-width: 640px){
  .s-steps {
    padding-bottom: 0;
    margin-top: 0;

    &__scroll-btn {
    display: none;
    }
  }
}
</style>
