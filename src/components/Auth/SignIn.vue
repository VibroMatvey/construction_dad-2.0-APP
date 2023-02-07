<script setup lang="ts">
import {defineEmits} from "vue";

const emit = defineEmits(['tab'])
</script>

<template>
  <div class="flex flex-col items-center justify-center my-16 mx-auto lg:py-0">
    <RouterLink to="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
      Строительный папа
    </RouterLink>
    <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Вход в личный кабинет
        </h1>
        <form class="space-y-4 md:space-y-6" action="#">
          <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Электронная
              почта</label>
            <input type="email" autocomplete="off" name="email" id="email"
                   class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   placeholder="ivan@mail.com" required="">
          </div>
          <div>
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Пароль</label>
            <input type="password" name="password" id="password" placeholder="••••••••"
                   class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   required="">
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input id="remember" aria-describedby="remember" type="checkbox"
                       class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                       required="">
              </div>
              <div class="ml-3 text-sm">
                <label for="remember" class="text-gray-500 dark:text-gray-300">Запомнить меня</label>
              </div>
            </div>
            <RouterLink to="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Забыли
              пароль?
            </RouterLink>
          </div>
          <button type="submit"
                  class="inline-block w-full px-6 py-2.5 bg-yellow-400 text-gray-800 text-xs uppercase rounded shadow-md hover:bg-yellow-500 hover:shadow-lg focus:bg-yellow-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-400 active:shadow-lg transition duration-150 ease-in-out">
            Продолжить
          </button>
          <p class="text-sm font-light text-gray-500 dark:text-gray-400">
            Нет аккаунта? <span @click="emit('tab', 'signUp')"
                                class="font-medium text-primary-600 hover:underline dark:text-primary-500">Зарегистрируйтесь!</span>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
