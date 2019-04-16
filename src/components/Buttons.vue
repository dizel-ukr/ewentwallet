<template>
  <div class="buttons">
    <a class="button" href="#">
      <img src="../assets/gplay-btn.png" alt="" />
    </a>
    <a class="button" href="#">
      <img src="../assets/apple-btn.png" alt="" />
    </a>
  </div>
</template>

<style lang="scss" scoped>
.buttons {
  width: 100%;
  display: flex;
  justify-content: flex-start;
}
.button {
  &:first-child {
    margin-right: 25px;
  }
  img {
    max-width: 100%;
  }
}
</style>
