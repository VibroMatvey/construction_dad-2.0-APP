import { ref } from 'vue'
import { defineStore } from 'pinia'
import ky from 'ky'
import {useRoute} from "vue-router";

export const useProductStore = defineStore('products', () => {
  const products = ref(null)
  const route = useRoute();

  async function getProducts() {
    if (route.name === 'catalogCategory') {
      return await requestProductsByCategory(route.params.category);
    }
    return await requestProducts();
  }

  async function requestProducts() {
    try {
      const response: any = await ky.get('http://localhost:8000/api/products').json()
      products.value = response.data
    } catch (e) {
      console.log(e)
    }
  }

  async function requestProductsByCategory(category: any) {
    try {
      const response: any = await ky.get(`http://localhost:8000/api/products/${category}`).json()
      products.value = response.data
    } catch (e) {
      console.log(e)
    }
  }

  return { requestProducts, getProducts, requestProductsByCategory, products }
})
