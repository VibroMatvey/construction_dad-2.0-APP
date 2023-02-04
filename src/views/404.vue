<template>
  <div class="flex items-center justify-center py-12">
    <div class="bg-white dark:bg-gray-800 flex items-center justify-center mx-4 md:w-2/3">
      <div class="flex flex-col items-center py-16">
        <h1 class="text-9xl text-yellow-500">404</h1>
        <h1 class="px-4 pt-8 pb-4 text-center dark:text-white text-5xl font-bold leading-10 text-gray-800">Упс!</h1>
        <p class="px-4 pb-10 text-base leading-none dark:text-gray-200 text-center text-gray-600">Страница не
          найдена!</p>
        <RouterLink to="/">
          <button type="button"
                  class="inline-block px-6 py-2.5 bg-yellow-400 text-gray-800 text-xs uppercase rounded shadow-md hover:bg-yellow-500 hover:shadow-lg focus:bg-yellow-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-400 active:shadow-lg transition duration-150 ease-in-out">
            На главную
          </button>
        </RouterLink>
      </div>
    </div>
  </div>

</template>

<script>

</script>

<style scoped>

</style>