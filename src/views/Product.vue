<script setup lang="ts">
import Image from '../components/Modal/Image.vue'
</script>

<template>
  <Image />
  <div class="flex justify-center items-center">
    <div class="md:px-6 px-4 py-12 w-full h-full flex justify-center">
      <div class="2xl:container 2xl:mx-auto relative flex justify-start w-96 md:w-10/12 xl:w-11/12 item-start flex-col lg:flex-row lg:space-x-8 py-12 md:py-16 lg:py-12 px-4 md:px-8 lg:px-16 bg-white">
        <div class="w-full">
          <div class="relative">
            <div id="ProductCarousel" class="carousel slide relative" data-bs-ride="carousel">
              <div class="carousel-inner relative w-full overflow-hidden">
                <div class="carousel-item active relative float-left w-full">
                  <img
                      src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
                      class="block w-full"
                      alt="Wild Landscape"
                      data-bs-toggle="modal" data-bs-target="#exampleModalXl"
                  />
                </div>
                <div class="carousel-item relative float-left w-full">
                  <img
                      src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
                      class="block w-full"
                      alt="Camera"
                      data-bs-toggle="modal" data-bs-target="#exampleModalXl"
                  />
                </div>
                <div class="carousel-item relative float-left w-full">
                  <img
                      src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                      class="block w-full"
                      alt="Exotic Fruits"
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
          <h2 class="lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 font-semibold">Plain White Tshirt</h2>
          <div class="flex justify-start items-center mt-4">
            <p class="font-normal text-lg leading-6 text-gray-600 mr-4">$190</p>
            <div class="cursor-pointer flex space-x-2 mr-3">
              <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/quick_view_4-svg2.svg" alt="stars">
              <img class="dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/quick_view_4-svg2dark.svg" alt="stars">
            </div>
            <p class="font-normal text-sm leading-3 hover:text-gray-700 duration-100 cursor-pointer text-gray-500 underline">18 reviews</p>
          </div>
          <div class="mt-10">
            <p id="text" class="font-semibold text-base leading-4 text-gray-800">White</p>
            <div class="flex space-x-2 mt-4">
              <div tabindex="0" onclick="selected('White')" class="focus:outline-none ring-1 ring-transparent ring-offset-2 focus:ring-gray-800 rounded-full cursor-pointer w-8 h-8 bg-gray-50"></div>
              <div tabindex="0" onclick="selected('Red')" class="focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-gray-800 rounded-full cursor-pointer w-8 h-8 bg-red-700"></div>
              <div tabindex="0" onclick="selected('Yellow')" class="focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-gray-800 rounded-full cursor-pointer w-8 h-8 bg-yellow-300"></div>
            </div>
          </div>
          <div class="mt-10 w-full">
            <div class="flex justify-between">
              <p class="font-semibold text-base leading-4 text-gray-800">Size</p>
              <p class="cursor-pointer hover:text-gray-800 font-medium text-base leading-4 text-gray-500 underline">Size guide</p>
            </div>
            <div class="grid grid-cols-3 gap-10 sm:flex sm:flex-wrap md:gap-4 sm:justify-between lg:justify-start mt-4">
              <div onclick="selectedSize('XSS')" id="XSS" class="font-medium text-base leading-4 text-gray-800 border border-gray-200 py-3 w-20 text-center cursor-pointer hover:border-gray-800 focus:border-gray-800">XXS</div>
              <div onclick="selectedSize('XS')" id="XS" class="font-medium text-base leading-4 text-gray-800 border border-gray-200 py-3 w-20 text-center cursor-pointer hover:border-gray-800 focus:border-gray-800">XS</div>
              <div onclick="selectedSize('S')" id="S" class="font-medium text-base leading-4 text-gray-800 border border-gray-200 py-3 w-20 text-center cursor-pointer hover:border-gray-800 focus:border-gray-800">S</div>
              <div onclick="selectedSize('M')" id="M" class="font-medium text-base leading-4 text-gray-800 border border-gray-200 py-3 w-20 text-center cursor-pointer hover:border-gray-800 focus:border-gray-800">M</div>
              <div onclick="selectedSize('L')" id="L" class="font-medium text-base leading-4 text-gray-800 border border-gray-200 py-3 w-20 text-center cursor-pointer hover:border-gray-800 focus:border-gray-800">L</div>
              <div onclick="selectedSize('XL')" id="XL" class="font-medium text-base leading-4 text-gray-800 border border-gray-200 py-3 w-20 text-center cursor-pointer hover:border-gray-800 focus:border-gray-800">XL</div>
            </div>
          </div>
          <p class="mt-4 font-normal text-sm leading-3 text-gray-500 hover:text-gray-600 duration-100 underline cursor-pointer">Find the perfect size?</p>

          <div class="flex w-full justify-between gap-4 mt-10">
            <button class="border border-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 lg:w-96 w-full hover:bg-gray-900 text-base font-medium leading-4 bg-gray-800 py-4 text-white">Add to Bag</button>
            <button class="border border-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 lg:w-96 w-full hover:bg-gray-300 text-base font-medium leading-4 text-gray-800 py-4 bg-white">Add to Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>