<template>
    <div class="constructor_fields">    
        <div class="constructor_fields__heading">
            <div>
                <span>
                    {{ placeholder }}
                </span>
                <span>
                    {{ type }}
                </span>
            </div>
            <button
                @click="emits('delete')"
            >
                Удалить поле
            </button>
        </div>
        <MyInput
            style-type="primary"
            :model-value="placeholder"
            @update:model-value="(value) => $emit('update:placeholder', value)"
        />
        <div class="constructor_fields__footer">
            <input 
                @input="(e) => $emit('update:isRequired', e.target.checked)" 
                :checked="isRequired" 
                type="checkbox" 
                :id="'requiredField' + id"
            >
            <label :for="'requiredField' + id">Сделать поле обязательным</label>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {defineProps, withDefaults, defineEmits} from 'vue'
import MyInput from '../../forms/input/MyInput.vue';

const emits = defineEmits(['update:placeholder', 'update:isRequired', 'delete'])

const props = withDefaults(defineProps<{
    id:string,
    placeholder: string,
    type: string,
    isRequired: boolean,
}>(), {
    type: 'Контакт',
    placeholder: '',
    isRequired: false,
    id: '1'
})
</script>

<style lang="scss" >
.constructor_fields {
    display: flex;
    flex-direction: column;
    gap: 10px;

    &__heading {
        display: flex;
        justify-content: space-between;

        div {
            display: flex;
            gap: 16px;

            span {
                color: #000;
                font-family: Cera Pro;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                opacity: 0.5;
            }
        }

        button {
            cursor: pointer;
            border: none;
            background: none;
            padding: 0;
            color: var(--primary_color, #3EA748);
            font-family: Cera Pro;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }
    }

    &__footer {
        display: flex;
        align-items: center;
        gap: 16px;

        input[type="checkbox"] {
            border-radius: 4px;
            border:1px solid var(--text-color, #212121);
            opacity: 0.5;

            width: 24px;
            height: 24px;
            padding: 4px;
        }

        label {
            color: var(--text-color, #212121);
            font-family: Cera Pro;
            font-size: 14px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
        }
    }
}
</style>