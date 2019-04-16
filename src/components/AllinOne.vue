<template>
  <div class="s-allinone">
    <div class="s-allinone__title">All events in a single Wallet!</div>
    <div class="s-allinone__text">
      From birthdays to music festivals – invite attendees to make it an
      experience,<br />or save events to remember them all
    </div>
    <a class="s-allinone__link" href="#">Get the app ></a>
    <img class="s-allinone__img" src="../assets/allinone-img.png" alt="" />
  </div>
</template>

<style lang="scss" scoped>
.s-allinone {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #faf8f1;
  padding-top: 70px;
  max-width: 100%;

  &__title {
    font: 600 6rem/1 "Montserrat", sans-serif;
    color: #222349;
    margin: 0 0 20px;
  }
  &__text {
    font: 400 2rem/1 "Montserrat", sans-serif;
    color: #222349;
    margin-bottom: 50px;
  }
  &__link {
    font: 600 1.8rem/1 "Montserrat", sans-serif;
    color: #007aff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
  &__img {
    margin-top: 90px;
    max-width: 98%;

    img {
        max-width: 98%;
    }
  }
}
</style>
