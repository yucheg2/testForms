<template>
    <div class="login-page">
        <div class="login-page__form">
            <form  
                class="login-page__form-header"
                @submit.prevent="router.push('/forms')"
            >
                <h1 class="login-page__form-heading">Авторизация</h1>
                <div>
                    <MyInput
                        type="text"
                        name="login"
                        placeholder="Логин"
                    />
                    <MyInput
                        type="password"
                        name="password"
                        placeholder="Пароль"
                    />
                </div>
                <MyButton
                    @click="login"
                >
                    Вход
                </MyButton>
            </form>

            <div
                class="login-page__form-footer"
            >
                <span>
                    Если возникла проблема, то можете написать <a>Алёне из Сибтеха</a>
                </span>
                <span>
                    С любовью, ваш <a>Сибтех</a>                
                </span>
            </div>
        </div>
        <div 
            class="login-page__image login-page__image--1"
        />
        <div 
            class="login-page__image login-page__image--2"
        />
        <div 
            class="login-page__image login-page__image--3"
        />
        <div 
            class="login-page__image login-page__image--4"
        />
        <div 
            class="login-page__image login-page__image--5"
        />
        <div 
            class="login-page__image login-page__image--6"
        />
    </div>
</template>

<script setup>
import MyButton from '../../components/forms/button/MyButton.vue';
import MyInput from '../../components/forms/input/MyInput.vue';
import router from '../../router';

const login = () => {
    router.replace('/forms')
}
</script>

<style lang="scss">
.login-page {
    position: relative;
    width: 100svw;
    height: 100svh;
    overflow: hidden;

    background-color: var(--primary_color);

    &__form {
        position: relative;
        box-sizing: border-box;
        width: 624px;
        height: 100%;
        flex-shrink: 0;

        padding: 80px 95px 62px 155px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        border-radius: 10px;
        background: #FFF;

        z-index: 2;

        &-header {
            display: flex;
            flex-direction: column;
            gap: 30px;

            div {
                display: flex;
                flex-direction: column;
                gap: 10px;
            }
        }

        &-footer {
            width: 260px;
            height: 73;

            display: flex;
            flex-direction: column;
            gap: 8px;

            span {
                color: var(--Untitled-text-2-color, #676767);

                font-family: Cera Pro;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 24px; 
                letter-spacing: -0.64px;

                a {
                    cursor: pointer;
                    color: var(--primary_color, #3EA748);
                    font-family: Cera Pro;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 24px;
                    letter-spacing: -0.64px;
                    text-decoration-line: underline;
                }
            }
        }
    }

    &__image {
        background-image: url('/src/assets/images/image 410.png');
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;

        &--1 {
            width: 221px;
            height: 210px;

            top: 44px;
            left: 670px;
        }

        &--2 {
            width: 118.976px;
            height: 113.124px;
            transform: rotate(-62.355deg);

            filter: blur(1.5px);

            top: 92px;
            left: 1180px;
        }

        &--3 {
            width: 455.478px;
            height: 432.513px;
            transform: rotate(30.89deg);

            top: 283px;
            left: 762px;
        }

        &--4 {
            width: 74.526px;
            height: 70.86px;
            transform: rotate(-62.355deg);

            filter: blur(1.5px);

            top: 587px;
            left: 1238px;
        }

        &--5 {
            width: 320.373px;
            height: 304.219px;
            transform: rotate(30.89deg);

            top: 651px;
            left: 492px;
            z-index: 1;
        }

        &--6 {
            width: 283.613px;
            height: 269.665px;
            transform: rotate(98.598deg);

            top: 709px;
            left: 1123px;
        }
    }
}
</style>