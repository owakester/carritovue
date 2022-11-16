<template>
    <div>
        <CardProduct ></CardProduct>
        
    </div>
</template>

<script setup>
import CardProduct from '../components/CardProduct.vue'

import {useProductStore} from '../stores/ProducStore'

const store = useProductStore();
</script>

<style lang="scss" scoped>

</style>