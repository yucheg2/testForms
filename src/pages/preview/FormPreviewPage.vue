<template>
    <div class="preview_page">
        <Form
            :fields="fieldsArr"
            @submit="submit"
        />
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useForms } from '../../store/forms';
import Form from '../../components/constructor/form/Form.vue';
import { ref } from 'vue'
import router from '../../router';

const {query}= useRoute()
const {forms} = useForms()

const fieldsArr = ref([])
if (query.id) {
    const form = forms.find((form) => form.id === query.id)
    if (form) {
        fieldsArr.value = [...form.fields]
    } else {
        router.replace('/forms/list')
    }
} else if (query.fields) {
    fieldsArr.value = JSON.parse(query.fields)
}

const submit = () => {
    if (query.fields) {
        window.close()
    }
    router.back()
}

</script>

<style lang="scss" >
.preview_page {
    display: flex;
    width: 100svw;
    height: 100svh;
    background: var(--primary_color, #3EA748);
    align-items: center;
    justify-content: center;
}
</style>