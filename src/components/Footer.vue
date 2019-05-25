<template>
  <div class="s-footer">
    <div class="s-footer__nav">
        <a class="s-footer__nav-item" href="//eventswallet.com/en/privacy">{{$t('privacy')}}</a>
        <a class="s-footer__nav-item" href="//play.google.com/store/apps/details?id=edsson.eventswallet">{{$t('getgplay')}}</a>
        <a class="s-footer__nav-item" href="//itunes.apple.com/us/app/eventswallet/id1457564301?ls=1&mt=8">{{$t('getappstore')}}</a>
        <a class="s-footer__nav-item" href="//eventswallet.com">{{$t('signin')}}</a>
    </div>
    <div class="s-footer__copy">(c){{$t('allrights')}}</div>
  </div>
</template>


<style lang="scss" scoped>
.s-footer {
    background: #1c1d49;
    padding: 75px 0 20px;

    &__nav {
        display: flex;
        justify-content: space-around;
        width: 1280px;
        margin: 0 auto 50px;
        max-width: 100%;
    }
    &__nav-item {
        // width: 20%;
        font: 400 1.8rem/1 "Montserrat", sans-serif;
        font-variant: small-caps;
        color: #f7f3e9;
        text-align: center;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
    &__copy {
        width: 1388px;
        max-width: 100%;
        margin: 0 auto;
        text-align: center;
        color: #f7f3e9;
        font: 200 1.4rem/1 "Montserrat", sans-serif;
    }
}
@media(max-width: 1388px){
    .s-footer {
        &__nav,
        &__copy {
            padding: 0 25px;
            box-sizing: border-box;
        }
    }
}
@media(max-width: 640px){
    .s-footer {
        background: url('../assets/logo.png') center 60px no-repeat, #a7d9ff;
        padding-top: 135px;

        &__nav,
        &__copy {
            padding: 0 25px;
            box-sizing: border-box;
        }
        &__nav {
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        &__nav-item {
            font-size: 16px;
            width: auto;
            margin-bottom: 37px;
        }
        &__copy {
            font-size: 16px;
        }
    }
}
</style>