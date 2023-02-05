<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import {XMarkIcon} from '@heroicons/vue/24/outline'
import {MinusIcon, PlusIcon} from '@heroicons/vue/20/solid'
import {ref, defineProps, defineEmits, watch} from "vue";
import {useRoute, useRouter} from "vue-router";
import {useCategoryStore} from "@/stores/category";

function hideMobileFilter() {
  mobileFiltersOpen.value = false
  emit('hideMobileFilter', false)
}

function changeCategory(category: any) {
  router.push({name: 'catalogCategory', params: {category: category.id}})
}

const route = useRoute();
const categoryStore = useCategoryStore();
const router = useRouter();
const props = defineProps(['showMobileFilter']);
const emit = defineEmits(['hideMobileFilter', 'category']);
const mobileFiltersOpen = ref(false)
await categoryStore.getCategories()

watch(props, (newVal, oldVal) => {
  mobileFiltersOpen.value = props.showMobileFilter
})

watch(route, async (newVal, oldVal) => {
  await categoryStore.getCategories()
})
</script>

<template>
  <TransitionRoot as="template" :show="mobileFiltersOpen">
    <Dialog as="div" class="relative z-40 lg:hidden" @close="hideMobileFilter">
      <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0"
                       enter-to="opacity-100" leave="transition-opacity ease-linear duration-300"
                       leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-black bg-opacity-25"/>
      </TransitionChild>
      <div class="fixed inset-0 z-40 flex">
        <TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
                         enter-from="translate-x-full" enter-to="translate-x-0"
                         leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0"
                         leave-to="translate-x-full">
          <DialogPanel
              class="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
            <div class="flex items-center justify-between px-4">
              <h2 class="text-lg font-medium text-gray-900">Filters</h2>
              <button type="button"
                      class="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      @click="hideMobileFilter">
                <span class="sr-only">Close menu</span>
                <XMarkIcon class="h-6 w-6" aria-hidden="true"/>
              </button>
            </div>
            <form class="mt-4 border-t border-gray-200">
              <h3 class="sr-only">Categories</h3>
              <ul role="list" class="px-2 py-3 font-medium text-gray-900">
                <li v-for="category in subCategories" :key="category.name">
                  <a :href="category.href" class="block px-2 py-3">{{ category.name }}</a>
                </li>
              </ul>
              <Disclosure as="div" v-for="section in filters" :key="section.id"
                          class="border-t border-gray-200 px-4 py-6" v-slot="{ open }">
                <h3 class="-mx-2 -my-3 flow-root">
                  <DisclosureButton
                      class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                    <span class="font-medium text-gray-900">{{ section.name }}</span>
                    <span class="ml-6 flex items-center">
                          <PlusIcon v-if="!open" class="h-5 w-5" aria-hidden="true"/>
                          <MinusIcon v-else class="h-5 w-5" aria-hidden="true"/>
                        </span>
                  </DisclosureButton>
                </h3>
                <DisclosurePanel class="pt-6">
                  <div class="space-y-6">
                    <div v-for="(option, optionIdx) in section.options" :key="option.value" class="flex items-center">
                      <input :id="`filter-mobile-${section.id}-${optionIdx}`" :name="`${section.id}[]`"
                             :value="option.value" type="checkbox" :checked="option.checked"
                             class="h-4 w-4 rounded border-gray-300 text-yellow-500 focus:ring-yellow-500"/>
                      <label :for="`filter-mobile-${section.id}-${optionIdx}`"
                             class="ml-3 min-w-0 flex-1 text-gray-500">{{ option.label }}</label>
                    </div>
                  </div>
                </DisclosurePanel>
              </Disclosure>
            </form>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot> <!-- mobile -->
  <form class="hidden lg:block">
    <h3 class="sr-only">Categories</h3>
    <Disclosure as="div" class="border-b border-gray-200 py-6"
                v-slot="{ open }">
      <h3 class="-my-3 flow-root">
        <DisclosureButton
            class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
          <span class="font-medium text-gray-900">Категории</span>
          <span class="ml-6 flex items-center">
            <PlusIcon v-if="!open" class="h-5 w-5" aria-hidden="true"/>
            <MinusIcon v-else class="h-5 w-5" aria-hidden="true"/>
          </span>
        </DisclosureButton>
      </h3>
      <DisclosurePanel class="pt-6">
        <div class="space-y-4">
          <div class="flex flex-col gap-3">
            <span class="cursor-pointer" v-for="category in categoryStore.categories" @click="changeCategory(category)">{{ category.title }}</span>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
    <Disclosure as="div" class="border-b border-gray-200 py-6"
                v-slot="{ open }">
      <h3 class="-my-3 flow-root">
        <DisclosureButton
            class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
          <span class="font-medium text-gray-900">Под-категория</span>
          <span class="ml-6 flex items-center">
            <PlusIcon v-if="!open" class="h-5 w-5" aria-hidden="true"/>
            <MinusIcon v-else class="h-5 w-5" aria-hidden="true"/>
          </span>
        </DisclosureButton>
      </h3>
      <DisclosurePanel class="pt-6">
        <div class="space-y-4">
          <div class="flex flex-col gap-3">
            <span class="cursor-pointer" v-for="category in categoryStore.categories" @click="changeCategory(category)">{{ category.title }}</span>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
    <Disclosure as="div" class="border-b border-gray-200 py-6"
                v-slot="{ open }">
      <h3 class="-my-3 flow-root">
        <DisclosureButton
            class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
          <span class="font-medium text-gray-900">Тэги</span>
          <span class="ml-6 flex items-center">
            <PlusIcon v-if="!open" class="h-5 w-5" aria-hidden="true"/>
            <MinusIcon v-else class="h-5 w-5" aria-hidden="true"/>
          </span>
        </DisclosureButton>
      </h3>
      <DisclosurePanel class="pt-6">
        <div class="space-y-4">
          <div class="flex flex-col gap-3">
            <span class="cursor-pointer" v-for="category in categoryStore.categories" @click="changeCategory(category)">{{ category.title }}</span>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
    <Disclosure as="div" class="border-b border-gray-200 py-6"
                v-slot="{ open }">
      <h3 class="-my-3 flow-root">
        <DisclosureButton
            class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
          <span class="font-medium text-gray-900">Брэнд</span>
          <span class="ml-6 flex items-center">
            <PlusIcon v-if="!open" class="h-5 w-5" aria-hidden="true"/>
            <MinusIcon v-else class="h-5 w-5" aria-hidden="true"/>
          </span>
        </DisclosureButton>
      </h3>
      <DisclosurePanel class="pt-6">
        <div class="space-y-4">
          <div class="flex flex-col gap-3">
            <span class="cursor-pointer" v-for="category in categoryStore.categories" @click="changeCategory(category)">{{ category.title }}</span>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  </form> <!-- desktop -->
</template>

<style scoped>
</style>