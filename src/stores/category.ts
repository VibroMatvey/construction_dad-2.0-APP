import {ref} from 'vue'
import {defineStore} from 'pinia'
import ky from 'ky'
import {useRoute} from "vue-router";

export const useCategoryStore = defineStore('category', () => {
    const categories = ref(null)
    const category = ref(null)
    const loading = ref(false);
    const route = useRoute();

    async function getCategories() {
        loading.value = true
        if (route.name === 'catalogCategory') {
            await requestCategoriesById(route.params.category)
        }
        if (route.name === 'catalog') {
            category.value = null;
        }
        await requestCategories();
        loading.value = false
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
            category.value = response.title
        } catch (e) {
            console.log(e)
        }
    }

    return {getCategories, categories, category, loading}
})
