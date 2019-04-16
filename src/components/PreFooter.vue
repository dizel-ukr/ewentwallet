<template>
    <div class="s-prefooter">
        <div class="s-prefooter__title">Time to create your first event QR!</div>
        <div class="s-prefooter__content">
            <div class="s-prefooter__qr-wrapper">
                <div class="s-prefooter__text">Scan the QR code below<br>or press the Google Play / App Store buttons below<br>to download the app to your phone right now!</div>
                <div class="s-prefooter__qr">
                    <img src="../assets/qr.png" alt="" srcset="">
                </div>
                <Buttons />
            </div>
            <div class="s-prefooter__phone">
                <img src="../assets/prefooter-phone-img.png" alt="">
            </div>
        </div>
    </div>
</template>
<script>
import Buttons from './Buttons.vue';

export default {
    name: 'Prefooter',
    components: {
        Buttons
    }
}
</script>
<style lang="scss" scoped>
.s-prefooter {
    background: url("../assets/prefooter-bg.jpg") bottom center no-repeat, #f7f3e9;

    &__title {
        font: 600 6rem/1 "Montserrat", sans-serif;
        color: #222349;
        padding: 85px 0 110px;
    }

    &__content {
        display: flex;
        justify-content: space-between;
        width: 1388px;
        margin: 0 auto;
        max-width: 100%;
    }
    &__qr-wrapper {
        width: 50%;
        padding: 65px 5.8% 85px;
        box-sizing: border-box;
        background: #fff;
        border-radius: 50px;
        margin-bottom: 20px;
    }
    &__text {
        font: 400 2rem/1.5 "Montserrat", sans-serif;
        margin-bottom: 50px;
    }
    &__qr {
        margin-bottom: 70px;
    }
    &__phone {
        width: 50%;
        text-align: center;
        img {
            max-width: 98%;
        }
    }
    .buttons {
        justify-content: center;
    }
}
</style>
