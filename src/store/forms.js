import { defineStore } from "pinia";

export const useForms = defineStore('forms-store', {
    state: () => ({
        forms:[]
    }),
    actions: {
        addForm(form) {
            this.forms = [ {
                ...form,
                createdAt: new Date(),
                id: `${Date.now()}`
            }, ...this.forms]
        },
        editForm(form, id) {
            const index = this.forms.findIndex((field)=>field.id === id)
            this.forms[index] ={...this.forms[index], ...form}
        },
        deleteForm(id) {
            this.forms = this.forms.filter((field) => field.id !== id)
        }
    }
})