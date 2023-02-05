<script setup lang="ts">
import {ref, defineProps, watch} from "vue";
import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/vue/20/solid'
import {useProductStore} from "@/stores/product";
import {useRoute} from "vue-router";

const route = useRoute();
const productsStore = useProductStore();
const props = defineProps(['gridType']);
const grid = ref('grid');

if (route.name === 'catalogCategory') {
  await productsStore.requestProductsByCategory(route.params.category);
} else {
  await productsStore.requestProducts();
}

watch(props, (newVal, oldVal) => {
  grid.value = props.gridType
})
</script>

<template>
  <div class="lg:col-span-3">
    <div :class=" grid === 'grid' ? 'grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2' : 'grid grid-cols-1 gap-5'">
      <div v-for="product in productsStore.products" :key="product.id" :class=" grid === 'grid' ? 'w-72 bg-gray-50' : 'flex justify-between w-full bg-gray-50'">
        <RouterLink to="/product">
          <img :src="product.preview_img" alt="product" class="w-full h-44"/>
        </RouterLink>
        <div class="">
          <div class="flex items-center justify-between px-4 pt-4">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark" width="20"
                   height="20" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke="#2c3e50"
                   stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2"/>
              </svg>
            </div>
            <div class="bg-yellow-200 py-1.5 px-6 rounded-full">
              <p class="text-xs text-yellow-500">Featured</p>
            </div>
          </div>
          <div class="p-4">
            <div class="flex items-center">
              <RouterLink to="/product" class="text-lg font-semibold">
                {{ product.title }}
              </RouterLink>
              <p class="text-xs text-gray-600 pl-5">4 days ago</p>
            </div>
            <p class="text-xs text-gray-600 mt-2">
              {{ product.description }}
            </p>
            <div class="flex mt-4">
              <div>
                <p class="text-xs text-gray-600 px-2 bg-gray-200 py-1">12 months warranty</p>
              </div>
              <div class="pl-2">
                <p class="text-xs text-gray-600 px-2 bg-gray-200 py-1">Complete box</p>
              </div>
            </div>
            <div class="flex items-center justify-between py-4">
              <h2 class="text-yellow-500 text-xs font-semibold">Bay Area, San Francisco</h2>
              <RouterLink class="text-yellow-500 text-xl font-semibold" to="/product">{{ product.price }}</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div class="flex flex-1 justify-between sm:hidden">
        <a href="#" class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
        <a href="#" class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
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
            <RouterLink to="#" class="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
              <span class="sr-only">Previous</span>
              <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
            </RouterLink>
            <RouterLink to="#" aria-current="page" class="relative z-10 inline-flex items-center border border-yellow-500 bg-yellow-50 px-4 py-2 text-sm font-medium text-yellow-600 focus:z-20">1</RouterLink>
            <RouterLink to="#" class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">2</RouterLink>
            <RouterLink to="#" class="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex">3</RouterLink>
            <span class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">...</span>
            <RouterLink to="#" class="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex">8</RouterLink>
            <RouterLink to="#" class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">9</RouterLink>
            <RouterLink to="#" class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">10</RouterLink>
            <RouterLink to="#" class="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
              <span class="sr-only">Next</span>
              <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
            </RouterLink>
          </nav>
        </div>
      </div>
    </div> <!-- pagination -->
  </div>
</template>

<style scoped>

</style>