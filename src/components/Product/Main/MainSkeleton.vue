<script setup lang="ts">
</script>

<template>
  <div class="2xl:container 2xl:mx-auto relative flex justify-start w-96 md:w-10/12 xl:w-11/12 item-start flex-col lg:flex-row lg:space-x-8 py-12 md:py-16 lg:py-12 px-4 md:px-8 lg:px-16 bg-white">
    <div class="w-full bg-gray-200 rounded-lg animate-pulse flex justify-center items-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="lightgray" class="w-20 h-20">
        <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
      </svg>
    </div>
    <div class="mt-6 md:mt-8 lg:mt-0 flex justify-start items-start w-full flex-col space-y-6">
      <h1 class="lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 font-semibold bg-gray-200 rounded-full animate-pulse w-2/5 h-6"></h1>
      <div class="flex justify-start items-center mt-4">
        <p class="font-normal text-lg leading-6 text-gray-600 mr-4 bg-gray-200 rounded-full animate-pulse w-32 h-6"></p>
        <div class="cursor-pointer flex space-x-2 mr-3 bg-gray-200 rounded-full animate-pulse h-6 w-32"></div>
        <p class="bg-gray-200 rounded-full animate-pulse w-28 h-6"></p>
      </div>
      <div class="mt-10 bg-gray-200 rounded-lg animate-pulse w-2/4 h-12">
      </div>
      <div class="mt-10 w-full bg-gray-200 rounded-lg animate-pulse h-16">
      </div>
      <div class="flex w-full justify-between gap-4 mt-10">
        <button type="button" class="bg-gray-200 text-gray-200 cursor-not-allowed rounded-lg animate-pulse w-full inline-block px-6 py-2.5 rounded shadow-md transition duration-150 ease-in-out">
          Добавить в корзину
        </button>
        <button type="button" class="bg-gray-200 text-gray-200 cursor-not-allowed rounded-lg animate-pulse w-full inline-block px-6 py-2.5 rounded shadow-md transition duration-150 ease-in-out">
          Добавить в избранное
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>