<script setup lang="ts">
import {useCategoryStore} from "@/stores/category";

const categoryStore = useCategoryStore();
await categoryStore.getCategories();
</script>

<template>
  <div class="hidden peer-hover:block z-[1030] py-2 px-2 hover:block fixed bg-gray-50 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
    <RouterLink v-for="category in categoryStore.categories" :to="`/catalog/${category.id}`" aria-current="true" class="px-2 py-2 block border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">
      {{ category.title }}
    </RouterLink>
  </div>
</template>

<style scoped>

</style>