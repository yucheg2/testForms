<template>
    <div class="edit-layout">
        <RouterView/>
    </div>
</template>

<style lang="scss">
.edit-layout {
    display: flex;
    width: 100svw;
    height: 100svh;
    background: var(--primary_color, #3EA748);

    .aside {
        box-sizing: border-box;
        width: 434px;
        height: 100svh;
        padding: 80px 82px 72px 179px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        background: #FFF;

        nav {
            display: flex;
            flex-direction: column;
            gap: 56px;
            div {
                display: flex;
                flex-direction: column;
                gap: 16px;
            }
        }

        &__link {
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

            &--go_back {
                display: flex;
                align-items: center;
                gap: 8px;
            }
        }

        &__buttons {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
    }
}
</style>