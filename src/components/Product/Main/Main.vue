<script setup lang="ts">
import ViewImages from '../Images/ViewImages.vue'
import {useProductStore} from "@/stores/product";
import {useRoute} from "vue-router";

const route = useRoute();
const productStore = useProductStore();

await productStore.getProduct(route.params.id)
</script>

<template>
  <ViewImages :images="productStore.product.images" :preview="productStore.product.preview_img" />
  <div class="2xl:container 2xl:mx-auto relative flex justify-start w-96 md:w-10/12 xl:w-11/12 item-start flex-col lg:flex-row lg:space-x-8 py-12 md:py-16 lg:py-12 px-4 md:px-8 lg:px-16 bg-white">
    <div class="w-full">
      <div class="relative">
        <div id="ProductCarousel" class="carousel slide relative" data-bs-ride="carousel">
          <div class="carousel-inner relative w-full overflow-hidden">
            <div class="carousel-item relative float-left w-full active">
              <img
                  :src="productStore.product.preview_img"
                  class="block w-full cursor-pointer"
                  alt="Wild Landscape"
                  data-bs-toggle="modal" data-bs-target="#exampleModalXl"
              />
            </div>
            <div v-for="image in productStore.product.images" :key="image.id"  class="carousel-item relative float-left w-full">
              <img
                  :src="image.image"
                  class="block w-full cursor-pointer"
                  alt="Wild Landscape"
                  data-bs-toggle="modal" data-bs-target="#exampleModalXl"
              />
            </div>
          </div>
          <button
              class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
              type="button"
              data-bs-target="#ProductCarousel"
              data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
              class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
              type="button"
              data-bs-target="#ProductCarousel"
              data-bs-slide="next"
          >
            <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
    <div class="mt-6 md:mt-8 lg:mt-0 flex justify-start items-start w-full flex-col space-y-6">
      <h1 class="lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 font-semibold">{{productStore.product.title}}</h1>
      <div class="flex justify-start items-center mt-4">
        <p class="font-normal text-lg leading-6 text-gray-600 mr-4">{{productStore.product.price}} руб.</p>
        <div class="cursor-pointer flex space-x-2 mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path fill="orange" fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path fill="orange" fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path fill="orange" fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path fill="orange" fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
          </svg>
        </div>
        <p class="font-normal text-sm leading-3 hover:text-gray-700 duration-100 cursor-pointer text-gray-500 underline">18 отзывов</p>
      </div>
      <div class="mt-10">
        <p id="text" class="font-semibold text-base leading-4 text-gray-800">White</p>
        <div class="flex space-x-2 mt-4">
          <div tabindex="0" class="focus:outline-none ring-1 ring-transparent ring-offset-2 focus:ring-gray-800 rounded-full cursor-pointer w-8 h-8 bg-gray-50"></div>
          <div tabindex="0" class="focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-gray-800 rounded-full cursor-pointer w-8 h-8 bg-red-700"></div>
          <div tabindex="0" class="focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-gray-800 rounded-full cursor-pointer w-8 h-8 bg-yellow-300"></div>
        </div>
      </div>
      <div class="mt-10 w-full">
        <div class="flex justify-between">
          <p class="font-semibold text-base leading-4 text-gray-800">Size</p>
          <p class="cursor-pointer hover:text-gray-800 font-medium text-base leading-4 text-gray-500 underline">Size guide</p>
        </div>
        <div class="grid grid-cols-3 gap-10 sm:flex sm:flex-wrap md:gap-4 sm:justify-between lg:justify-start mt-4">
          <div id="XSS" class="font-medium text-base leading-4 text-gray-800 border border-gray-200 py-3 w-20 text-center cursor-pointer hover:border-gray-800 focus:border-gray-800">XXS</div>
          <div id="XS" class="font-medium text-base leading-4 text-gray-800 border border-gray-200 py-3 w-20 text-center cursor-pointer hover:border-gray-800 focus:border-gray-800">XS</div>
          <div id="S" class="font-medium text-base leading-4 text-gray-800 border border-gray-200 py-3 w-20 text-center cursor-pointer hover:border-gray-800 focus:border-gray-800">S</div>
          <div id="M" class="font-medium text-base leading-4 text-gray-800 border border-gray-200 py-3 w-20 text-center cursor-pointer hover:border-gray-800 focus:border-gray-800">M</div>
          <div id="L" class="font-medium text-base leading-4 text-gray-800 border border-gray-200 py-3 w-20 text-center cursor-pointer hover:border-gray-800 focus:border-gray-800">L</div>
          <div id="XL" class="font-medium text-base leading-4 text-gray-800 border border-gray-200 py-3 w-20 text-center cursor-pointer hover:border-gray-800 focus:border-gray-800">XL</div>
        </div>
      </div>
      <p class="mt-4 font-normal text-sm leading-3 text-gray-500 hover:text-gray-600 duration-100 underline cursor-pointer">Find the perfect size?</p>

      <div class="flex w-full justify-between gap-4 mt-10">
        <button type="button" class="w-full inline-block px-6 py-2.5 bg-yellow-400 text-gray-800 text-xs uppercase rounded shadow-md hover:bg-yellow-500 hover:shadow-lg focus:bg-yellow-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-400 active:shadow-lg transition duration-150 ease-in-out">
          Добавить в корзину
        </button>
        <button type="button" class="w-full inline-block px-6 py-2.5 bg-gray-50 text-gray-800 border border-yellow-500 text-xs uppercase rounded shadow-md hover:bg-gray-200 hover:shadow-lg focus:bg-gray-200 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-200 active:shadow-lg transition duration-150 ease-in-out">
          Добавить в избранное
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>