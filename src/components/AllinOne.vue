<template>
  <div class="s-allinone">
    <div class="s-allinone__title">{{$t('allevents')}}</div>
    <div class="s-allinone__text" v-html="$t('frombirthday')" />
    <a class="s-allinone__link" v-on:click="scroll">Get the app ></a>
    <img v-if="checkWidth" class="s-allinone__img" src="../assets/allinone-img.png" alt="" />
    <img v-else class="s-allinone__img" src="../assets/allinone-img-small.png" alt="" />
  </div>
</template>
<script>
export default {
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
    }
  }
}
</script>

<style lang="scss" scoped>
.s-allinone {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  // background: #faf8f1;
  padding-top: 70px;
  padding-bottom: 85px;
  max-width: 100%;
  background-image: linear-gradient(to bottom, rgba(255,255,255,1) 0, rgba(255,255,255,0) 210px, rgba(255,255,255,0) 100%);
  background-image: -o-linear-gradient(to bottom, rgba(255,255,255,1) 0, rgba(255,255,255,0) 210px, rgba(255,255,255,0) 100%);
  background-image: -moz-linear-gradient(to bottom, rgba(255,255,255,1) 0, rgba(255,255,255,0) 210px, rgba(255,255,255,0) 100%);
  background-image: -webkit-linear-gradient(to bottom, rgba(255,255,255,1) 0, rgba(255,255,255,0) 210px, rgba(255,255,255,0) 100%);
  background-image: -ms-linear-gradient(to bottom, rgba(255,255,255,1) 0, rgba(255,255,255,0) 210px, rgba(255,255,255,0) 100%);

  &__title {
    font: 600 6rem/1 "Montserrat", sans-serif;
    color: #222349;
    margin: 0 0 20px;
  }
  &__text {
    font: 400 2rem/1.45 "Montserrat", sans-serif;
    color: #222349;
    margin-bottom: 30px;
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
  &__img {
    margin-top: 70px;
    width: 1080px;
    max-width: 90%;

    img {
        max-width: 98%;
    }
  }
}
@media(max-width: 640px){
  .s-allinone {
    padding-top: 30px;
    background: none;

    &__title {
      margin-bottom: 40px;
    }
    &__text {
      padding: 0 20px;
    }
    &__link {
      display: none;
    }
    &__img {
      margin-top: 0;
      width: 100%;
    }
  }
}
</style>
