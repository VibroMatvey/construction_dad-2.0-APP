<script setup lang="ts">

</script>

<template>
  <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
       id="exampleModalScrollable" tabindex="-1" aria-labelledby="exampleModalScrollableLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable relative w-auto pointer-events-none">
      <div
          class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
        <div
            class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
          <h5 class="text-xl text-gray-800 dark:text-white pt-3">Корзина</h5>
          <button type="button"
                  id="closeBtn"
                  class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                  data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body relative p-4">
          <div class="flex flex-col gap-6 dark:bg-gray-800 overflow-x-hidden overflow-y-hidden h-auto">
            <div class="flex flex-col items-stretch border-t border-gray-50">
              <div class="w-full">
                <img src="https://i.ibb.co/SX762kX/Rectangle-36-1.png" alt="Black Leather Bag" class="w-full object-center object-cover" />
              </div>
              <div class="mpl-3 w-full flex flex-col justify-center">
                <div class="flex items-center justify-between w-full pt-1">
                  <p class="text-base font-black leading-none text-gray-800 dark:text-white">North wolf bag</p>
                  <select aria-label="Select quantity" class="py-2 px-1 border border-gray-200 mr-6 focus:outline-none dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                  </select>
                </div>
                <p class="text-xs leading-3 text-gray-600 dark:text-white pt-2">Height: 10 inches</p>
                <p class="text-xs leading-3 text-gray-600 dark:text-white py-4">Color: Black</p>
                <p class="w-96 text-xs leading-3 text-gray-600 dark:text-white">Composition: 100% calf leather</p>
                <div class="flex items-center justify-between pt-5">
                  <div class="flex itemms-center">
                    <p class="text-xs leading-3 underline text-gray-800 dark:text-white cursor-pointer">Add to favorites</p>
                    <p class="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">Remove</p>
                  </div>
                  <p class="text-base font-black leading-none text-gray-800 dark:text-white">$9,000</p>
                </div>
              </div>
              <hr class="mt-5">
            </div>
            <div class="flex flex-col items-stretch border-t border-gray-50">
              <div class="w-full">
                <img src="https://i.ibb.co/SX762kX/Rectangle-36-1.png" alt="Black Leather Bag" class="w-full object-center object-cover" />
              </div>
              <div class="mpl-3 w-full flex flex-col justify-center">
                <div class="flex items-center justify-between w-full pt-1">
                  <p class="text-base font-black leading-none text-gray-800 dark:text-white">North wolf bag</p>
                  <select aria-label="Select quantity" class="py-2 px-1 border border-gray-200 mr-6 focus:outline-none dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                  </select>
                </div>
                <p class="text-xs leading-3 text-gray-600 dark:text-white pt-2">Height: 10 inches</p>
                <p class="text-xs leading-3 text-gray-600 dark:text-white py-4">Color: Black</p>
                <p class="w-96 text-xs leading-3 text-gray-600 dark:text-white">Composition: 100% calf leather</p>
                <div class="flex items-center justify-between pt-5">
                  <div class="flex itemms-center">
                    <p class="text-xs leading-3 underline text-gray-800 dark:text-white cursor-pointer">Add to favorites</p>
                    <p class="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">Remove</p>
                  </div>
                  <p class="text-base font-black leading-none text-gray-800 dark:text-white">$9,000</p>
                </div>
              </div>
              <hr class="mt-5">
            </div>
            <div class="flex flex-col items-stretch border-t border-gray-50">
              <div class="w-full">
                <img src="https://i.ibb.co/SX762kX/Rectangle-36-1.png" alt="Black Leather Bag" class="w-full object-center object-cover" />
              </div>
              <div class="mpl-3 w-full flex flex-col justify-center">
                <div class="flex items-center justify-between w-full pt-1">
                  <p class="text-base font-black leading-none text-gray-800 dark:text-white">North wolf bag</p>
                  <select aria-label="Select quantity" class="py-2 px-1 border border-gray-200 mr-6 focus:outline-none dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                  </select>
                </div>
                <p class="text-xs leading-3 text-gray-600 dark:text-white pt-2">Height: 10 inches</p>
                <p class="text-xs leading-3 text-gray-600 dark:text-white py-4">Color: Black</p>
                <p class="w-96 text-xs leading-3 text-gray-600 dark:text-white">Composition: 100% calf leather</p>
                <div class="flex items-center justify-between pt-5">
                  <div class="flex itemms-center">
                    <p class="text-xs leading-3 underline text-gray-800 dark:text-white cursor-pointer">Add to favorites</p>
                    <p class="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">Remove</p>
                  </div>
                  <p class="text-base font-black leading-none text-gray-800 dark:text-white">$9,000</p>
                </div>
              </div>
              <hr class="mt-5">
            </div>
          </div>
          <button type="button"
                  data-bs-dismiss="modal">
            <RouterLink class="text-gray-500" to="/cart">Перейти в корзину</RouterLink>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>