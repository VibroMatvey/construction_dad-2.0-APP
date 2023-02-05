import {ref} from 'vue'
import {defineStore} from 'pinia'
import ky from 'ky'
import {useRoute} from "vue-router";

export const useCategoryStore = defineStore('category', () => {
    const categories = ref(null)
    const category = ref(null)
    const route = useRoute();

    function setCategory(value: any) {
        category.value = value;
    }

    async function getCategories() {
        if (route.name === 'catalogCategory') {
            await requestCategories()
            return await requestCategoriesById(route.params.category)
        }
        setCategory(null)
        return await requestCategories()
    }

    async function requestCategories() {
        try {
            categories.value = await ky.get('http://localhost:8000/api/categories').json()
        } catch (e) {
            console.log(e)
        }
    }

    async function requestCategoriesById(id: any) {
        try {
            const response: any = await ky.get(`http://localhost:8000/api/categories/${id}`).json()
            setCategory(response.title)
        } catch (e) {
            console.log(e)
        }
    }

    return {getCategories, categories, category}
})
