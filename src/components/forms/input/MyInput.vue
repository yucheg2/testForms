<template>
    <input 
        class="input"
        :class="inputClass"
        :type="props.type" 
        :name="props.name"
        :placeholder="props.placeholder"
        :value="modelValue"
        @input="(e) => $emit('update:model-value', e?.target?.value)"
    >
</template>

<script lang="ts" setup>
import {
    defineProps, 
    withDefaults, 
    computed,
    defineEmits
} from 'vue'

const emits = defineEmits(['update:model-value']) 

const props = withDefaults(defineProps<{
    styleType?: 'secondary' | 'primary',
    type?: string,
    name?: string,
    placeholder?: string,
    modelValue: string,
}>(), {
    type: 'text',
    name: '',
    placeholder: '',
    styleType: 'secondary',
    modelValue: ''
})

const inputClass = computed(() => `input--${props.styleType}`)
</script>

<style lang="scss">
.input {
    box-sizing: border-box;
    border-radius: 10px;
    border: 0;
    padding: 30px;
    width: 100%;

    color: #000;
    font-family: Cera Pro;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    &--secondary {
        background: #F6F6F6;

        &::placeholder {
            color: #000;
            font-family: Cera Pro;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;

            opacity: 0.5;
        }
    }

    &--primary {
        background: #FFF;
    }
}
</style>