<template>
  <div class="bg-gray-900">
    <!-- <div v-if="store.carrito.length!=0">

    <CartShop></CartShop>
</div> -->


<CheckOut></CheckOut>

    <div v-if="store.stateLoad">



      <Loading></Loading>
    </div>
  </div>
</template>

<script setup>
import CardProduct from "./CardProduct.vue";
import CheckOut from "./CheckOut.vue";
import CartShop from "./CartShop.vue";
import Loading from "./Loading.vue";
import { useProductStore } from "../stores/ProducStore";
const store = useProductStore();
</script>

<style lang="scss" scoped></style>
