<template>
    <div id="id-prefooter" class="s-prefooter">
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
<style lang="scss">
.s-prefooter {
    background: url("../assets/prefooter-bg.jpg") bottom center no-repeat, linear-gradient(to bottom, #ffffff 0, transparent 210px, transparent 100%);

    &__title {
        font: 600 6rem/1 "Montserrat", sans-serif;
        color: #222349;
        padding: 70px 0 110px;
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

        img {
            max-width: 160px
        }
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
@media(max-width: 640px){
    .s-prefooter {
        background: none;
        &__title {
            position: relative;
            padding-top: 40px;
            padding-bottom: 100px;

            &:after {
                content: '';
                position: absolute;
                width: 16px;
                height: 22px;
                background: url('../assets/arrow-blue-down.png') center no-repeat;
                left: 50%;
                bottom: 37px;
                transform: translateX(-50%);
            }
        }
        &__text,
        &__qr,
        &__phone {
            display: none;
        }
        &__qr-wrapper {
            width: 100%;
            background: #000;
            padding: 0;
            border-radius: 0;
            margin: 0;
        }
        .buttons {
            flex-direction: column;
            align-items: center;
            .button {
                display: inline-block;
                width: 100%;
                padding: 25px 0;

                &:first-child {
                    margin-right: 0;
                    border-bottom: 1px solid #fff;
                }
            }
            img {
                // width: 100%;

            }
        }
    }
}
</style>
