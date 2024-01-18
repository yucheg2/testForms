<template>
    <form class="form" @submit.prevent>
        <h2>Форма регистрации участников</h2>
        <div class="form__fields">
            <template
                v-for="field in state.fields"
                :key="field.id"
            >
                <MyInput
                    v-model:model-value="field.value"
                    :placeholder="field.placeholder"
                />
            </template>
        </div>
        <div class="form__agreement">
            <label for="agreement">
                <input 
                    @input="(e) => {state.agree=e.target.checked}" 
                    :checked="state.agree" 
                    type="checkbox"
                    id="agreement" 
                >
                <div
                v-if="!state.agree"
                ></div>
                <svg  
                v-show="state.agree"
                xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
                    <path d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z"></path>
                </svg>
            </label>
            <span>Нажимая кнопку «Отправить», я принимаю условия политики конфиденциальности</span>
        </div>
        <MyButton
            :disabled="!disabled"
            @click="$emit('submit')"
        >
            Отправить
        </MyButton>
    </form>
</template>

<script lang="ts" setup>
import MyInput from '../../forms/input/MyInput.vue';
import {defineProps, reactive, watch, computed, defineEmits} from 'vue'
import {IField} from '../../../consts/constructor.i'
import MyButton from '../../forms/button/MyButton.vue';

const emits =defineEmits(['submit'])

const props = defineProps<{
    fields: IField[]
}>()

const state: {
    fields: IField[],
    agree: boolean
} = reactive({
    fields: [],
    agree: false
})

const disabled = computed(()=>state.fields.every((field)=>{
    if (field.isRequired) {
        return field.value !== ''
    }
    return true
}) && state.agree)

watch(() => props.fields, (value) => {
    state.fields = value.map((field) => ({
        ...field,
        value: ''
    }))
}, { immediate: true, deep: true })

</script>

<style lang="scss">
.form {
    box-sizing: border-box;
    width: 349px;
    height: auto;
    padding: 40px;

    border-radius: 20px;
    background: #FFF;

    h2 {
        line-height: normal;
    }

    &__fields {
        margin: 30px 0;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    &__agreement {
        display: flex;
        gap: 16px;

        span {
            color: var(--text-color, #212121);
            font-family: Cera Pro;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;

            opacity: 0.5;
        }

        label {
        
            border-radius: 4px;
            border: 1px solid var(--primary_color, #3EA748);
            width: 24px;
            height: 24px;

            div {
                width: 24px;
                height: 24px;
            }

            svg {
                width: 24px;
                height: 24px;
            }
            input[type="checkbox"] {
                display: none;
            }
        }
    }

    .button {
        width: 100%;
        margin-top: 50px;
    }
}
</style>