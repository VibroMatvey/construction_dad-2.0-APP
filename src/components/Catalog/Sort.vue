<script setup lang="ts">
import {ChevronDownIcon, FunnelIcon, Squares2X2Icon, Bars3Icon} from '@heroicons/vue/20/solid'
import {defineEmits} from "vue";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/vue'

function changeSort(option: string) {
  sortOptions.filter((item) => {
    return item.label !== option ? item.current = false : item.current = true;
  })
}

const sortOptions = [
  {label: 'Сначала новые', value: 'new', current: true},
  {label: 'По популярности', value: 'popular', current: false},
  {label: 'По рейтингу', value: 'rating', current: false},
  {label: 'Цена: по возрастанию', value: 'priceUp', current: false},
  {label: 'Цена: по убыванию', value: 'priceDown', current: false},
]

const emit = defineEmits(['showMobileFilter', 'gridType'])
</script>

<template>
  <div class="flex items-center">
    <Menu as="div" class="relative inline-block text-left">
      <div>
        <MenuButton
            class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
          Сортировать
          <ChevronDownIcon class="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                           aria-hidden="true"/>
        </MenuButton>
      </div>
      <transition enter-active-class="transition ease-out duration-100"
                  enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75"
                  leave-from-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95">
        <MenuItems
            class="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div class="py-1">
            <MenuItem v-for="option in sortOptions" :key="option.label" v-slot="{ active }">
              <span
                  @click="changeSort(option.label)"
                  :class="[option.current ? 'font-medium text-gray-900' : 'text-gray-500', active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm']">
                {{ option.label }}
              </span>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
    <button @click="emit('gridType', 'grid')" type="button"
            class="-m-2 ml-5 p-2 focus:text-gray-700 text-gray-400 hover:text-gray-500 sm:ml-7">
      <span class="sr-only">View grid</span>
      <Squares2X2Icon class="h-5 w-5" aria-hidden="true"/>
    </button>
    <button @click="emit('gridType', 'bar')" type="button"
            class="-m-2 ml-2 p-2 focus:text-gray-700 text-gray-400 hover:text-gray-500 sm:ml-7">
      <span class="sr-only">View grid</span>
      <Bars3Icon class="h-5 w-5" aria-hidden="true"/>
    </button>
    <button type="button" class="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
            @click="emit('showMobileFilter', true)">
      <span class="sr-only">Filters</span>
      <FunnelIcon class="h-5 w-5" aria-hidden="true"/>
    </button>
  </div>
</template>

<style scoped>

</style>