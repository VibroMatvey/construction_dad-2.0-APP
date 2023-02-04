<script setup lang="ts">
import Filter from '../components/Catalog/Filter.vue';
import Sort from '../components/Catalog/Sort.vue';
import Products from '../components/Catalog/Products.vue';
import {ref} from "vue";

function mobileFilterAction(state: boolean) {
  mobileFilter.value = state
}

function changeGrid(type: string) {
  grid.value = type
}
const mobileFilter = ref(false)
const grid = ref('grid')
const category = ref(null);
</script>

<template>
  <div class="bg-white">
    <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex items-baseline justify-between border-b border-gray-200 py-16 pb-6">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900">Каталог товаров {{ category ? ' - ' + category : '' }}</h1>
        <Sort @gridType="changeGrid($event)" @showMobileFilter="mobileFilterAction(true)" />
      </div>
      <section aria-labelledby="products-heading" class="pt-6 pb-24">
        <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
          <Filter @category="category = $event" @hideMobileFilter="mobileFilterAction(false)" v-model:showMobileFilter = mobileFilter />
          <Suspense>
            <template #default>
              <Products v-model:gridType = grid />
            </template>
            <template #fallback>
              loading...
            </template>
          </Suspense>
        </div>
      </section>
    </main>
  </div>
</template>
