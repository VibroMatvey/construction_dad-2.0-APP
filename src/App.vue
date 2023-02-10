<script setup lang="ts">
import Header from './components/App/Header/Header.vue'
import Footer from './components/App/Footer.vue'
</script>

<template>
  <section class="wrapper">
    <Header />
    <main class="main">
      <RouterView />
    </main>
    <Footer />
  </section>
</template>

<style lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  Header {
    position: fixed;
    z-index: 2;
    width: 100%;
  }

  .main {
    flex-grow: 1;
    margin-top: 68px;
  }
}
</style>
