<script setup lang="ts">
import {Swiper, SwiperSlide} from 'swiper/vue';
import {FreeMode, Navigation, Thumbs} from 'swiper';
import {ref} from "vue";
import {defineProps} from "vue";
import 'swiper/css';
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"

function setThumbSlide(swiper: any) {
  thumbsSwiper.value = swiper;
}

const props = defineProps(['images', 'preview_image'])
console.log(props.preview_image);
let thumbsSwiper = ref(null);
const modules = [FreeMode, Navigation, Thumbs]
</script>

<template>
  <section>
    <swiper
        :style="{
          '--swiper-navigation-color': '#facc15',
          '--swiper-pagination-color': '#facc15',
        }"
        :spaceBetween="10"
        :navigation="true"
        :thumbs="{ swiper: thumbsSwiper }"
        :modules="modules"
        class="mySwiper2"
    >
      <swiper-slide>
        <img :src="props.preview_image" alt="1"/>
      </swiper-slide>
      <swiper-slide v-for="url in props.images" data-bs-toggle="modal" data-bs-target="#exampleModalXl">
        <img :src="url.image" alt="1"/>
      </swiper-slide>
    </swiper>
    <swiper
        @swiper="setThumbSlide"
        :spaceBetween="10"
        :slidesPerView="4"
        :freeMode="true"
        :watchSlidesProgress="true"
        :modules="modules"
        class="mySwiper"
    >
      <swiper-slide>
        <img :src="props.preview_image" alt="1"/>
      </swiper-slide>
      <swiper-slide v-for="url in props.images">
        <img :src="url.image" alt="1"/>
      </swiper-slide>
    </swiper>
    <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalXl" tabindex="-1" aria-labelledby="exampleModalXlLabel" aria-modal="true" role="dialog">
      <div class="modal-dialog modal-dialog-centered modal-xl relative w-auto pointer-events-none">
        <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
          <div class="modal-body">
            <swiper
                :style="{
                  '--swiper-navigation-color': '#facc15',
                  '--swiper-pagination-color': '#facc15',
                }"
                :spaceBetween="0"
                :navigation="true"
                :modules="modules"
                class="mySwiper3"
            >
              <swiper-slide>
                <img :src="props.preview_image" alt="1"/>
              </swiper-slide>
              <swiper-slide v-for="url in props.images">
                <img :src="url.image" alt="1"/>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.mySwiper .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}
.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}
</style>