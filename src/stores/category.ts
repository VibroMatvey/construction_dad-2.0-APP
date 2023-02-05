import {ref} from 'vue'
import {defineStore} from 'pinia'
import ky from 'ky'

export const useCategoryStore = defineStore('category', () => {
    const categories = ref(null)
    const category = ref(null)

    async function requestCategories() {
        try {
            categories.value = await ky.get('http://localhost:8000/api/categories').json()
        } catch (e) {
            console.log(e)
        }
    }

    async function requestCategoriesById(id: any) {
        try {
            category.value = await ky.get(`http://localhost:8000/api/categories/${id}`).json()
        } catch (e) {
            console.log(e)
        }
    }

    return { requestCategories, requestCategoriesById, categories, category }
})
