<script setup lang="ts">
import Filter from '../components/Catalog/Filter/Filter.vue';
import Sort from '../components/Catalog/Sort.vue';
import Products from '../components/Catalog/Products/Products.vue';
import ProductsSkeleton from '../components/Catalog/Products/ProductsSkeleton.vue'
import FilterSkeleton from '../components/Catalog/Filter/FilterSkeleton.vue'
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
    <main class="mx-auto container">
      <div class="flex items-baseline justify-between border-b border-gray-200 py-16 pb-6">
        <h1 v-if="!categoryStore.loading" class="text-4xl font-bold tracking-tight text-gray-900">
          Каталог {{categoryStore.category ? categoryStore.category : 'товаров' }}
        </h1>
        <h1 v-if="categoryStore.loading" class="bg-gray-200 w-2/6 rounded-lg h-10 animate-pulse">
        </h1>
        <Sort @gridType="changeGrid($event)" @showMobileFilter="mobileFilterAction(true)"/>
      </div>
      <section aria-labelledby="products-heading" class="pt-6 pb-24">
        <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
          <Suspense>
            <template #default>
              <Filter @category="category = $event" @hideMobileFilter="mobileFilterAction(false)" v-model:showMobileFilter="mobileFilter" />
            </template>
            <template #fallback>
              <FilterSkeleton />
            </template>
          </Suspense>
          <Suspense>
            <template #default>
              <Products v-model:gridType="grid" />
            </template>
            <template #fallback>
              <ProductsSkeleton />
            </template>
          </Suspense>
        </div>
      </section>
    </main>
  </div>
</template>
