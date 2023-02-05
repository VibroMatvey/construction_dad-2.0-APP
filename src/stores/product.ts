import { ref } from 'vue'
import { defineStore } from 'pinia'
import ky from 'ky'

export const useProductStore = defineStore('products', () => {
  const products = ref(null)

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

  return { requestProducts, requestProductsByCategory, products }
})
