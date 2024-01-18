<template>
    <div class="form_card">
        <div class="form_card__heading">
            <h2 @click="$emit('open-preview')">
                Форма регистрации участников
            </h2>
            <MyButton
                type="secondary"
                @click="router.push({path:'/edit/fields', query:{id}})"
            >
                Редактировать
            </MyButton>
        </div>
        <span class="form_card__author">
            Автор: user 1
        </span>
        <div class="form_card__footer">
            <span>
                Дата создания: {{ getDate(createdAt) }}
            </span>
            <MyButton
                type="secondary"
                @click="$emit('delete')"
            >
                Удалить
            </MyButton>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {defineProps, defineEmits} from 'vue'
import MyButton from '../../forms/button/MyButton.vue';
import getDate from '../../../utils/getDate';
import router from '../../../router';

const emits = defineEmits(['delete', 'open-preview'])

const props = defineProps<{
    id: string,
    createdAt: Date,
}>()

</script>

<style lang="scss">
.form_card {
    box-sizing: border-box;
    width: 825px;
    height: 190px;
    padding: 24px;
    background: #FFF;
    border-radius: 10px;

    display: flex;
    flex-direction: column;

    h2 {
        cursor: pointer;
    }

    span {
        color: #000;
        font-family: Cera Pro;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;

        opacity: 0.5;
    }
    
    .button {
        box-sizing: content-box;
        width: 115px;
        height: 10px;
    }

    &__heading {
        display: flex;
        justify-content: space-between;

    }

    &__author {

        flex-grow: 1;
    }

    &__footer { 
        display: flex;
        align-items: end;
        justify-content: space-between;

        .button {
            border: none;
        }
    }
}
</style>