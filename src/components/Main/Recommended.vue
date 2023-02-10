<script setup lang="ts">
import {Swiper, SwiperSlide} from 'swiper/vue';
import { Navigation} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import {ref} from "vue";

const modules = [Navigation]
let windowWidth = ref(window.innerWidth)
</script>

<template>
  <section>
    <swiper
        :slidesPerView="windowWidth <= 400 ? 1 : 4"
        :spaceBetween="windowWidth <= 400 ? 0 : 0"
        :navigation="true"
        :lazy="true"
        :modules="modules"
        id="mySlider"
    >
      <swiper-slide v-for="index in 10">
        <div :key="index"
             class="w-72 bg-gray-50 rounded mx-auto">
          <div
              class="flex items-center justify-center w-full h-48 bg-gray-200 rounded dark:bg-gray-700 animate-pulse">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="lightgray" class="w-20 h-20">
              <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
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
      </swiper-slide>
    </swiper>
  </section>
</template>

<style>
#mySlider .swiper-button-prev,
#mySlider .swiper-button-next {
  color: #facc15;
}
</style>