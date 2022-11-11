<template>
    <div class=" p-8 md:mx-12 container mx-auto">


<CardProduct></CardProduct>
   
<div v-if="store.carrito.length!=0">

    <CartShop></CartShop>
</div>

   
   <div v-if="store.stateLoad">
    <Loading></Loading>
   </div>


    </div>
</template>

<script setup>
import CardProduct from './CardProduct.vue'
import CartShop from './CartShop.vue'
import Loading from './Loading.vue'
import { useProductStore } from "../stores/ProducStore";
const store = useProductStore();

</script>

<style lang="scss" scoped>

</style>