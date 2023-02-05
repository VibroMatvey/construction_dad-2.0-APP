<script setup lang="ts">
import Main from '../components/Product/Main/Main.vue'
import MainSkeleton from '../components/Product/Main/MainSkeleton.vue'
</script>

<template>
  <div class="flex justify-center items-center">
    <div class="md:px-6 px-4 py-12 w-full h-full flex justify-center">
      <Suspense>
        <template #default>
          <Main />
        </template>
        <template #fallback>
          <MainSkeleton />
        </template>
      </Suspense>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>