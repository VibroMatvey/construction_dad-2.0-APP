<script setup lang="ts">
import Header from './components/App/Header.vue'
import Footer from './components/App/Footer.vue'
</script>

<template>
  <section class="wrapper">
    <Header />
    <div class="main">
      <RouterView />
    </div>
    <Footer />
  </section>
</template>

<style lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .main {
    flex-grow: 1;
  }
}
</style>
