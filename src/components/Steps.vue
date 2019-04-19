<template>
  <div class="s-steps">
    <Step v-for="step in stepsData"
        :step="step" 
        :key="step.id"
    />
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
            "Publish your event QR code in all channels or share it from the app to invite attendees, friends, colleagues and partners",
          imgUrl: "/step-two-img.png",
          imgAltUrl: "/step-two-altimg.png"
        },
        {
          id: 3,
          title: "Scan event QR",
          text:
            "Save events in your personal “wallet” simply by scanning QR codes and never miss out any of them",
          imgUrl: "/step-three-img.png",
          imgAltUrl: "/step-three-altimg.png"
        },
        {
          id: 4,
          title: "Save tickets",
          text: "Store tickets in a single “wallet” to acces them anytime",
          imgUrl: "/step-four-img.png",
          imgAltUrl: "/step-four-altimg.png"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.s-steps {
  padding-bottom: 120px;
  margin-top: -225px;
}
@media (max-width: 1388px){
  .s-steps {
    padding-bottom: 0;
    margin-top: -175px;
  }
}
@media (max-width: 640px){
  .s-steps {
    padding-bottom: 0;
    margin-top: 0;
  }
}
</style>
