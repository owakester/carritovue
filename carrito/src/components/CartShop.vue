<template>
  <div>
    <h2 class="bg-gray-300 p-2 m-2 rounded text-center shadow-sm">
      Carrito de compras

<ul>
    <li v-for="product in store.carrito" :key="product.id">
{{product.producto}}
{{product.cantidad}}
<img class="h-72"  :src="product.url" alt="">
    </li>
</ul>


    </h2>
  </div>
</template>

<script setup>
import {useProductStore} from '../stores/ProducStore'

const store = useProductStore();
console.log(store.carrito)
</script>

<style lang="scss" scoped></style>
