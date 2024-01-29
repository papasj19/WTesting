<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Navbar from "@/components/navbar.vue";


import {useRouter} from 'vue-router';

const router = useRouter();

const navigateTo = (page) => {
  router.push(`/${page}`);
};
</script>

<template>

  <navbar />
  <router-view />



</template>

<style scoped>

</style>
