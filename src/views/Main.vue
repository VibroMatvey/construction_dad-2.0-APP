<script setup lang="ts">
import Hero from '../components/Main/Hero.vue'
import Recommended from '../components/Main/Recommended.vue'
</script>

<template>
  <section class="container flex flex-col mx-auto gap-10 py-12">
    <Hero />
    <h3 class="text-2xl">Рекомендуем к покупке</h3>
    <Recommended />
    <h3 class="text-2xl">Популярные категории</h3>
    <Recommended />
    <h3 class="text-2xl">Нах!</h3>
    <Recommended />
  </section>
</template>

<style scoped>

</style>