<template>
  <div class="s-footer">
    <div class="s-footer__nav">
        <a class="s-footer__nav-item" href="#">Privacy Policy</a>
        <a class="s-footer__nav-item" href="#">Get it on Google Play</a>
        <a class="s-footer__nav-item" href="#">Download on the App Store</a>
        <a class="s-footer__nav-item" href="#">Sign in</a>
    </div>
    <div class="s-footer__copy">(c) All rights reserved, EventsWallet 2019</div>
  </div>
</template>


<style lang="scss" scoped>
.s-footer {
    background: #1c1d49;
    padding: 75px 0 20px;

    &__nav {
        display: flex;
        justify-content: space-between;
        width: 1388px;
        margin: 0 auto 50px;
        max-width: 100%;
    }
    &__nav-item {
        width: 25%;
        font: 400 1.8rem/1 "Montserrat", sans-serif;
        font-variant: small-caps;
        color: #f7f3e9;
        text-align: left;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
    &__copy {
        width: 100%;
        margin: 0 auto;
        text-align: left;
        color: #f7f3e9;
        font: 200 1.4rem/1 "Montserrat", sans-serif;
    }
}
</style>
