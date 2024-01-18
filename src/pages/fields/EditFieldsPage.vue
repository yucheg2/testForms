<template>
    <div
        class="edit_fields_page"
    >
        <aside class="aside">
            <nav
                class="aside__navigation"
            >
                <RouterLink
                    class="aside__link aside__link--go_back"
                    to="/forms"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M7.91659 5H2.08325" stroke="black" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M4.99992 7.91732L2.08325 5.00065L4.99992 2.08398" stroke="black" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Назад
                </RouterLink>
                <div>
                    <RouterLink
                        class="aside__link"
                        to="/edit/fields"
                    >
                        Тип формы
                    </RouterLink>
                    <RouterLink
                        class="aside__link"
                        to="/edit/fields"
                    >
                        Сущности
                    </RouterLink>
                    <RouterLink
                        class="aside__link"
                        to="/edit/fields"
                        active-class="aside__link--active"
                    >
                        Поля
                    </RouterLink>
                    <RouterLink
                        class="aside__link"
                        to="/edit/fields"
                    >
                        Правила показа полей
                    </RouterLink>
                    <RouterLink
                        class="aside__link"
                        to="/edit/fields"
                    >
                        Другие настройки
                    </RouterLink>
                </div>
            </nav>
            <div class="aside__buttons">
                <MyButton
                    type="secondary"
                >
                    Скрипт
                </MyButton>
                <MyButton
                    @click="saveForm"
                >
                    Сохранить
                </MyButton>
            </div>
        </aside>
        <div class="edit_fields_page__form">
            <h1>
                Поля
            </h1>
            <div class="edit_fields_page__form_fields_hidden">
                <h2>
                    Скрытые поля
                </h2>
                <MyButton
                    type="add"
                >
                    Добавить поле
                </MyButton>
            </div>
            <div class="edit_fields_page__form_fields">
                <h2>
                    Поля
                </h2>
                <template 
                    v-for="field in fieldsArr"
                    :key="field.id"
                >
                    <ConstructorField
                        @delete="deleteField(field.id)"
                        :type="field.type"
                        v-model:is-required="field.isRequired"
                        v-model:placeholder="field.placeholder"
                    />
                </template>
                <MyButton
                    type="add"
                    @click="addField"
                >
                    Добавить поле
                </MyButton>
                <MyButton
                    type="add"
                >
                    Добавить страницу формы
                </MyButton>
            </div>
        </div>
        <div class="edit_fields_page__preview">
            <Form
                :fields="fieldsArr"
            />
        </div>
    </div>
</template>

<script setup>
import ConstructorField from '../../components/constructor/fields/ConstructorField.vue';
import MyButton from '../../components/forms/button/MyButton.vue';
import Form from '../../components/constructor/form/Form.vue'
import { ref } from 'vue'
import { useForms } from '../../store/forms';
import router from '../../router';
import { useRoute } from 'vue-router';

let lastId = 1

const emptyField = {
    type: 'Контакт',
    placeholder: '',
    isRequired: false
}

const {query}= useRoute()
const {addForm, editForm, forms} = useForms()

const fieldsArr = ref([
    {
        type: 'Контакт',
        placeholder: 'Фамилия',
        isRequired: false,
        id: 0
    },
    {
        type: 'Контакт',
        placeholder: 'Имя',
        isRequired: false,
        id: 1
    },
])

if (query.id) {
    console.log(typeof query.id)
    const form = forms.find((form) => form.id === query.id)
    if (form) {
        fieldsArr.value = [...form.fields]
    } else {
        router.replace('/edit/fields')
    }
}

const addField = () => {
    lastId +=1
    fieldsArr.value= [...fieldsArr.value, {
        ...emptyField,
        id: lastId
    }]
}

const deleteField = (id) => {
    fieldsArr.value = fieldsArr.value.filter((field) => (
        field.id !== id
    ))
}

const saveForm = () => {
    if (query.id) {
        editForm({
            fields: [...fieldsArr.value]
        }, query.id)
    } else {
        addForm({
            fields: [...fieldsArr.value]
        })
    }
    router.push('/forms/list')
}

</script>

<style lang="scss">
.edit_fields_page {
    display: flex;
    height: 100svh;
    &__form {
        box-sizing: border-box;
        width: auto;
        height: 100%;
        padding: 70px 29px 0px 30px;

        border-radius: 0px 10px 10px 0px;
        background: #F9F9F9;
        overflow-y: scroll;

        &::-webkit-scrollbar {
            width: 20px;
        }

        &::-webkit-scrollbar-track {
            background-color: transparent;
        }

        &::-webkit-scrollbar-thumb {
            background-color: #E2E6EE;
            border: 8.5px solid transparent;
            border-radius: 10px;
            background-clip: content-box;
        }

        &_fields{
            display: flex;
            flex-direction: column;
            height: auto;
            gap: 30px;

            &_hidden {
                display: flex;
                flex-direction: column;

                gap: 30px;

                margin-top: 30px;
                margin-bottom: 50px;
            }
        }
    }
    &__preview {
        margin-left: 97px;
        margin-top: 89px;
    }
}
</style>