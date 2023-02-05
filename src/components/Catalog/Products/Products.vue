<script setup lang="ts">
import ProductsSkeleton from './ProductsSkeleton.vue'
import {ref, defineProps, watch} from "vue";
import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/vue/20/solid'
import {useProductStore} from "@/stores/product";
import {useRoute} from "vue-router";

const route = useRoute();
const productsStore = useProductStore();
const props = defineProps(['gridType']);
const grid = ref('grid');

await productsStore.getProducts()

watch(props, (newVal, oldVal) => {
  grid.value = props.gridType
})
watch(route, async (newVal, oldVal) => {
  await productsStore.getProducts()
})
</script>

<template>
  <div v-if="!productsStore.loading" class="lg:col-span-3">
    <div :class=" grid === 'grid' ? 'grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-5 rounded' : 'grid grid-cols-1 gap-5 rounded'">
      <div v-for="product in productsStore.products" :key="product.id"
           :class=" grid === 'grid' ? 'w-72 bg-gray-50' : 'flex justify-between w-full bg-gray-50'">
        <RouterLink :to="`/product/${product.id}`">
          <img :src="product.preview_img" alt="product" class="w-full h-44 hover:opacity-80 transition-opacity"/>
        </RouterLink>
        <div class="">
          <div class="flex items-center justify-between px-4 pt-4">
            <div class="cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="orange" stroke-width="2px" class="w-6 h-6">
                <path fill-rule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="bg-yellow-400 py-1.5 px-6 rounded-full">
              <p class="text-xs text-gray-800">Featured</p>
            </div>
          </div>
          <div class="p-4">
            <div class="flex items-center">
              <RouterLink :to="`/product/${product.id}`" class="text-lg font-semibold">
                {{ product.title }}
              </RouterLink>
            </div>
            <p class="text-xs text-gray-600 mt-2">
              {{ product.description }}
            </p>
            <div class="flex mt-4 gap-4">
              <div v-for="tag in product.tags">
                <p class="text-xs text-gray-600 px-2 bg-gray-200 py-1 rounded">{{ tag.title }}</p>
              </div>
            </div>
            <div class="flex items-center justify-end py-4">
              <RouterLink class="text-gray-800 text-lg font-bold" :to="`/product/${product.id}`">{{ product.price }} руб.</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div class="flex flex-1 justify-between sm:hidden">
        <a href="#"
           class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
        <a href="#"
           class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
      </div>
      <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p class="text-sm text-gray-700">
            Showing
            {{ ' ' }}
            <span class="font-medium">1</span>
            {{ ' ' }}
            to
            {{ ' ' }}
            <span class="font-medium">10</span>
            {{ ' ' }}
            of
            {{ ' ' }}
            <span class="font-medium">97</span>
            {{ ' ' }}
            results
          </p>
        </div>
        <div>
          <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <RouterLink to="#"
                        class="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
              <span class="sr-only">Previous</span>
              <ChevronLeftIcon class="h-5 w-5" aria-hidden="true"/>
            </RouterLink>
            <RouterLink to="#" aria-current="page"
                        class="relative z-10 inline-flex items-center border border-yellow-500 bg-yellow-50 px-4 py-2 text-sm font-medium text-yellow-600 focus:z-20">
              1
            </RouterLink>
            <RouterLink to="#"
                        class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
              2
            </RouterLink>
            <RouterLink to="#"
                        class="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex">
              3
            </RouterLink>
            <span
                class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">...</span>
            <RouterLink to="#"
                        class="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex">
              8
            </RouterLink>
            <RouterLink to="#"
                        class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
              9
            </RouterLink>
            <RouterLink to="#"
                        class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
              10
            </RouterLink>
            <RouterLink to="#"
                        class="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
              <span class="sr-only">Next</span>
              <ChevronRightIcon class="h-5 w-5" aria-hidden="true"/>
            </RouterLink>
          </nav>
        </div>
      </div>
    </div> <!-- pagination -->
  </div>
  <ProductsSkeleton v-if="productsStore.loading" />
</template>

<style scoped>

</style>