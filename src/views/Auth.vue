<script setup lang="ts">
import SignIn from '../components/Auth/SignIn.vue'
import SignUp from '../components/Auth/SignUp.vue'
import {ref} from "vue";

const tab = ref('signIn');
</script>

<template>
  <section class="container mx-auto">
    <SignUp @tab="tab = $event" v-if="tab === 'signUp'"/>
    <SignIn @tab="tab = $event" v-if="tab === 'signIn'"/>
  </section>
</template>

<style scoped>

</style>