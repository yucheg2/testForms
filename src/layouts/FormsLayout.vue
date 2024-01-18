<template>
    <main class="main">
        <aside class="aside">
            <nav
                class="aside__navigation"
            >
                <RouterLink
                    class="aside__link"
                    to="/forms"
                    active-class="aside__link--active"
                >
                    Формы
                </RouterLink>
                <RouterLink
                    class="aside__link"
                    to="/forms"
                >
                    Пользователи
                </RouterLink>
            </nav>
            <MyButton
                type="secondary"
                @click="router.replace('/login')"
            >
                Выход
            </MyButton>
        </aside>
        <RouterView/>
    </main>
</template>

<script setup>
import { RouterView } from 'vue-router';
import router from '../router';
import MyButton from '../components/forms/button/MyButton.vue';

</script>

<style lang="scss">
    .main {
        display: flex;
        width: 100svw;
        height: 100svh;
        background: #F6F6F6;

        aside {
            box-sizing: border-box;
            width: 434px;
            height: 100svh;
            padding: 80px 82px 72px 179px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            border-radius: 10px;
            background: #FFF;

            nav {
                display: flex;
                flex-direction: column;
                gap: 16px;

                .aside__link {
                    text-decoration: none;
                    color: #000;
                    font-family: Cera Pro;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;

                    &--active {
                        color: var(--primary_color, #3EA748);
                    }
                }
            }
        }
    }
</style>