<template>
  <div class="flex items-center justify-center py-12">
    <div class="bg-white dark:bg-gray-800 flex items-center justify-center mx-4 md:w-2/3">
      <div class="flex flex-col items-center py-16">
        <h1 class="text-9xl text-yellow-500">404</h1>
        <h1 class="px-4 pt-8 pb-4 text-center dark:text-white text-5xl font-bold leading-10 text-gray-800">Упс!</h1>
        <p class="px-4 pb-10 text-base leading-none dark:text-gray-200 text-center text-gray-600">Страница не найдена!</p>
        <RouterLink to="/">
          <button class="mx-4 h-10 w-44 rounded-md text-grey-600 text-base bg-yellow-500 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-grey-600">На главную</button>
        </RouterLink>
      </div>
    </div>
  </div>

</template>

<script>

</script>

<style scoped>

</style>