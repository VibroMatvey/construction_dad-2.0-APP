<script setup lang="ts">
import {ref} from "vue";

const product = ref({
  cardImage: "https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png",
  cardImage2: "https://cdn.tuk.dev/assets/templates/classified/Bitmap.png",
  item: "iphone XS",
  description: "The Apple iPhone XS is available in 3 colors with 64GB memory. Shoot amazing videos",
  isClicked: "none",
})
</script>

<template>
  <div class="">
    <div class="mx-auto container py-8 flex">
      <div class="flex-1">

      </div>
      <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:gap-4 md:gap-2 grid flex-3">
        <div v-for="index in 17" :key="index" class="w-72 bg-gray-50">
          <RouterLink to="/product">
            <img :src="product.cardImage" alt="product" class="w-full h-44" />
          </RouterLink>
          <div class="">
            <div class="flex items-center justify-between px-4 pt-4">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke="#2c3e50" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                </svg>
              </div>
              <div class="bg-yellow-200 py-1.5 px-6 rounded-full">
                <p class="text-xs text-yellow-500">Featured</p>
              </div>
            </div>
            <div class="p-4">
              <div class="flex items-center">
                <RouterLink to="/product" class="text-lg font-semibold">
                    {{ product.item }}
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
                <h2 class="text-indigo-700 text-xs font-semibold">Bay Area, San Francisco</h2>
                <RouterLink class="text-indigo-700 text-xl font-semibold" to="/product">$350</RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>