<script setup lang="ts">
import Filter from '../components/Catalog/Filter.vue';
import Sort from '../components/Catalog/Sort.vue';
import Products from '../components/Catalog/Products.vue';
import {ref} from "vue";
import {useCategoryStore} from "@/stores/category";

function mobileFilterAction(state: boolean) {
  mobileFilter.value = state
}

function changeGrid(type: string) {
  grid.value = type
}
const categoryStore = useCategoryStore();
const mobileFilter = ref(false)
const grid = ref('grid')
const category = ref(null);
</script>

<template>
  <div class="bg-white">
    <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex items-baseline justify-between border-b border-gray-200 py-16 pb-6">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900">Каталог товаров {{
            categoryStore.category ? ' - ' + categoryStore.category : ''
          }}</h1>
        <Sort @gridType="changeGrid($event)" @showMobileFilter="mobileFilterAction(true)"/>
      </div>
      <section aria-labelledby="products-heading" class="pt-6 pb-24">
        <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
          <Suspense>
            <template #default>
              <Filter @category="category = $event" @hideMobileFilter="mobileFilterAction(false)" v-model:showMobileFilter="mobileFilter" />
            </template>
            <template #fallback>
              <form class="hidden flex-col gap-5 lg:flex">
                <div v-for="index in 5" class="bg-gray-200 rounded-lg w-full h-16 animate-pulse"></div>
              </form>
            </template>
          </Suspense>
          <Suspense>
            <template #default>
              <Products v-model:gridType="grid" />
            </template>
            <template #fallback>
              <div class="lg:col-span-3">
                <div
                    :class=" grid === 'grid' ? 'grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-5' : 'grid grid-cols-1 gap-5'">
                  <div v-for="index in 15" :key="index"
                       :class=" grid === 'grid' ? 'w-72 bg-gray-50' : 'flex justify-between w-full bg-gray-50'">
                    <div
                        class="flex items-center justify-center w-full h-48 bg-gray-300 rounded dark:bg-gray-700 animate-pulse">
                      <svg class="w-12 h-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                           fill="currentColor" viewBox="0 0 640 512">
                        <path
                            d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/>
                      </svg>
                    </div>
                    <div class="">
                      <div class="flex items-center justify-between px-4 pt-4">
                        <div class="bg-gray-200 animate-pulse py-1.5 px-6 h-5 rounded-full">
                        </div>
                        <div class="bg-gray-200 animate-pulse py-1.5 px-6 h-5 rounded-full">
                        </div>
                      </div>
                      <div class="p-4">
                        <div
                            class="flex items-center h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4 animate-pulse">
                        </div>
                        <p class="bg-gray-200 mt-2 w-full rounded-full animate-pulse">
                        </p>
                        <div class="flex mt-4">
                          <div>
                            <p class="text-xs text-gray-200 w-12 h-2.5 rounded-full animate-pulse px-2 bg-gray-200 py-1"></p>
                          </div>
                          <div class="pl-2">
                            <p class="text-xs text-gray-200 w-36 h-2.5 rounded-full animate-pulse px-2 bg-gray-200 py-1"></p>
                          </div>
                        </div>
                        <div class="flex items-center justify-between py-4">
                          <h2 class="rounded-full bg-gray-200 animate-pulse w-36 h-3"></h2>
                          <RouterLink class="rounded-full w-16 h-5 bg-gray-200 animate-pulse" to="#"></RouterLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </Suspense>
        </div>
      </section>
    </main>
  </div>
</template>
