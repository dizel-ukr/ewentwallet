<template>
  <div class="buttons">
    <a class="button" href="https://play.google.com/store/apps/details?id=edsson.eventswallet" target="_blank">
      <img v-if="checkWidth" src="../assets/gplay-btn.png" alt="" />
      <img v-else src="../assets/gplay-btn-square.png" alt="" />
    </a>
    <a class="button" href="https://itunes.apple.com/us/app/eventswallet/id1457564301?ls=1&mt=8" target="_blank">
      <img v-if="checkWidth" src="../assets/apple-btn.png" alt="" />
      <img v-else src="../assets/apple-btn-square.png" alt="" />
    </a>
  </div>
</template>
<script>
export default {
  computed: {
    checkWidth: function() {
      return window.innerWidth > 640;
    }
  }
}
</script>

<style lang="scss">
.buttons {
  width: 100%;
  display: flex;
  justify-content: flex-start;
}
.button {
  display: inline-block;
  &:first-child {
    margin-right: 25px;
  }
  img {
    max-width: 100%;
  }
}
</style>
