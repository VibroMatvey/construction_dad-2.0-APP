<script setup lang="ts">
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Autoplay} from 'swiper';
import 'swiper/css';

const modules = [Autoplay]
</script>

<template>
  <div>
    <swiper
        :spaceBetween="0"
        :centeredSlides="true"
        :allowTouchMove="false"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
        }"
        :modules="modules"
        id="mySwiperRecommended"
    >
      <swiper-slide class="bg-black rounded-lg">
        <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(123).jpg" class="block w-full opacity-40 rounded-lg"
             alt="a"/>
      </swiper-slide>
      <swiper-slide class="bg-black rounded-lg">
        <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(124).jpg" class="block w-full opacity-40 rounded-lg"
             alt="a"/>
      </swiper-slide>
      <swiper-slide class="bg-black rounded-lg">
        <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(125).jpg" class="block w-full opacity-40 rounded-lg"
             alt="a"/>
      </swiper-slide>
      <div class="z-10 top-1/4 absolute w-full px-16">
        <div class="w-full flex gap-6">
          <h1 class="text-6xl text-gray-200">Строительный папа <h2 class="text-2xl text-gray-300 mt-2">расширяет грани
            возможного!</h2></h1>
        </div>
      </div>
      <div class="z-10 top-3/4 absolute w-full px-16">
        <div class="flex gap-10 justify-between">
          <div class="">
            <RouterLink to="/catalog">
              <button type="button"
                      class="inline-block px-6 py-2.5 bg-yellow-400 text-gray-800 text-xs uppercase rounded shadow-md hover:bg-yellow-500 hover:shadow-lg focus:bg-yellow-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-400 active:shadow-lg transition duration-150 ease-in-out">
                Каталог
              </button>
            </RouterLink>
          </div>
          <div class="w-full">
            <div class="input-group relative flex flex-wrap items-stretch w-full">
              <input type="search"
                     class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-none border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none"
                     placeholder="Поиск" aria-label="Search" aria-describedby="button-addon2">
              <button
                  class="inline-block px-6 py-2.5 bg-yellow-400 text-gray-800 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-500 hover:shadow-lg focus:bg-yellow-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-400 active:shadow-lg transition duration-150 ease-in-out"
                  type="button" id="button-addon2">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img"
                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor"
                        d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </swiper>
  </div>
</template>

<style>
</style>