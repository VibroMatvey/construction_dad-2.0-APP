import { ref } from 'vue'
import { defineStore } from 'pinia'
import ky from 'ky'
import {useRoute} from "vue-router";

export const useProductStore = defineStore('products', () => {
  const products = ref(null)
  const product = ref(null)
  const loading = ref(false)
  const route = useRoute();

  async function getProducts() {
    loading.value = true
    if (route.params.category) {
      await requestProductsByCategory(route.params.category);
    }
    if (!route.params.category) {
      await requestProducts();
    }
    loading.value = false
  }

  async function getProduct(id: any) {
    loading.value = true
    await requestProductsById(id);
    loading.value = false
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
      const response: any = await ky.get(`http://localhost:8000/api/${category}/products`).json()
      products.value = response.data
    } catch (e) {
      console.log(e)
    }
  }

  async function requestProductsById(id: any) {
    try {
      const response: any = await ky.get(`http://localhost:8000/api/products/${id}`).json()
      product.value = response.data
    } catch (e) {
      console.log(e)
    }
  }

  return {getProducts, getProduct, products, product, loading }
})
