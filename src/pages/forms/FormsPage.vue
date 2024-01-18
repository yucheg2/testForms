<template>
        <div class="forms_page"> 
            <div class="forms_page__heading">
                <h1>
                    Формы
                </h1>
                <MyButton
                @click="router.push('/edit')"
                >
                    Создать форму
                </MyButton>
            </div>
            <div class="forms_page__forms">
                <template 
                    v-for="form in forms"
                    :key="form.id"
                >
                    <FormCard
                        :created-at="form.createdAt"
                        :id="form.id"
                        @open-preview="openPreview(form.id)"
                        @delete="formsStore.deleteForm(form.id)"
                    />
                </template>
            </div>
        </div>
</template>

<script setup>
import MyButton from '../../components/forms/button/MyButton.vue';
import router from '../../router';
import { storeToRefs } from 'pinia'
import { useForms } from '../../store/forms';
import FormCard from '../../components/constructor/formCard/FormCard.vue';
import { useRouter } from 'vue-router'

const formsStore = useForms()
const { forms } = storeToRefs(formsStore)

const openPreview = (id) => {
    // реализовал превью 2мя способами: через открытие в новой 
    // вкладке и просто на новой странице

    // router.push({path:'/preview', query:{id}})
    const routeData = router.resolve({name: 'preview', query: {
        fields: JSON.stringify(forms.value.find((field)=>field.id === id).fields)
    }});
    window.open(routeData.href, '_blank');
}

</script>

<style lang="scss">
.forms_page {
    overflow: hidden;

    padding: 80px 0px 90px 30px;

    &__heading {
        display: flex;
        justify-content: space-between;

        width: 825px;
        margin-bottom: 50px;

        .button {
            box-sizing: content-box;
            width: 119px;
            height: 19px;
        }
    }

    &__forms {
        display: flex;
        flex-direction: column;
        max-height: 630px;
        overflow-y: scroll;
        gap: 30px;

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
    }
}
</style>