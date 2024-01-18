<template>
    <button 
        class="button"
        :class="buttonClass"
        :disabled="disabled"
        @click="$emit('click')"
    >
        <slot/>
        <svg v-if="type==='add'" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path d="M15 6.25V23.75" stroke="#3EA748" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.25 15H23.75" stroke="#3EA748" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </button>
</template>

<script lang="ts" setup>
import {defineEmits, computed, defineProps, withDefaults} from 'vue'

const props= withDefaults(defineProps<{
    type?: 'submit' | 'secondary' | 'add',
    disabled?: boolean
}>(), {
    type: 'submit',
    disabled: false
})
const emits = defineEmits(['click'])

const buttonClass = computed(()=>`button--${props.type}`)

</script>

<style lang="scss">
.button {
    cursor: pointer;

    display: flex;
    width: 160px;
    height: 50px;
    padding: 16px 32px;
    justify-content: center;
    align-items: center;
    
    font-family: Cera Pro;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    &:disabled {
        background-color: #3ea748c0;
    }

    &--submit {
        color: #FFF;
        border-radius: 10px;
        border: 0;
        background: var(--primary_color, #3EA748);
    }

    &--secondary {
        height: 51px;
        border-radius: 10px;
        background-color: #FFF;
        border: 1px solid var(--primary_color, #3EA748);
        color: var(--primary_color, #3EA748);
    }

    &--add {
        display: inline-flex;
        padding: 21px 30px 20px 30px;
        width: 355px;
        height: 30px;
        box-sizing: content-box;
        justify-content: space-between;
        align-items: center;

        border-radius: 10px;
        background: none;
        border: 1px dashed var(--primary_color, #3EA748);

        color: var(--primary_color, #3EA748);
        font-weight: 400;
    }
}
</style>