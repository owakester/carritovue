<template>
  <div class="bg-stone-900">



<Navbar>

</Navbar>
<ContainerProducts></ContainerProducts>
<Footer></Footer>

  </div>


</template>

<script setup>
import ContainerProducts from './components/ContainerProducts.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue';
import {RouterLink,RouterView} from 'vue-router'
</script>

<style lang="scss" scoped>

</style>