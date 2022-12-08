<template>
  <div class="container mx-auto">
    <div class="bg-stone-800 mx-auto w-5/12 mt-4   rounded flex justify-center ...">
      <span 
        v-for="categoria in store.categories"
        @click="store.filterProduct(categoria.id)"
        class="animate__animated animate__animated animate__wobble cursor-pointer hover:bg-orange-700 text-orange-700 hover:text-gray-200 text-center divide-x text-xl p-2"
        :key="categoria.id"
      >
        {{ categoria.nombre }}
        <img
          class="h-20 flex items-center justify-center"
          :src="categoria.imgcategoria"
          alt=""
        />
      </span>
    </div>

    <div class="mt-12  grid sm:grid-cols-1 md:grid-cols-3  place-items-center">
      <div class="" v-for="(product, index) in store.filtro" :key="product.id">
        <div
          class="w-full group/item hover:bg-orange-100 ... max-w-sm bg-stone-100 rounded-lg shadow-md dark:bg-gray-900 dark:border-gray-900"
        >
          <a href="#">
            <img
              class=" rounded-t-lg "
              :src="product.imagen"
              alt="product image"
            />
          </a>
          <div class="px-5 py-5 my-4">
            <a href="#">
              <h5
                class="text-xl mb-4 font-semibold tracking-tight text-orange-700 dark:text-white"
              >
                {{ product.nombre }}
              </h5>
            </a>
            <div v-if="estado" class="flex items-center mt-2.5 mb-5">
              {{ product.descripcion }}
            </div>
            <div class="flex justify-between items-center">
              <span class="text-3xl font-bold text-gray-900 dark:text-white"
                >$ {{ product.precio }}</span
              >

              <span
                ><button
                @click="validar(product,'-')"
                  class="bg-gray-200 hover:bg-orange-300 text-orange-600 px-2.5 py-0.5 text-center text-lg rounded-full"
                >
                  -
                </button></span
              >
              <span
                ><input
               
                  :disabled="product.cantidad === 0"
                  v-model="product.cantidad"
                  class="text-center rounded-md bg-orange-300 text-gray-600 w-8"
                  type="text"
              /></span>
              <span
                ><button
                  @click="validar(product,'+')"
                  class="bg-gray-200 hover:bg-orange-300 text-orange-600 px-2.5 py-0.5 text-center text-lg rounded-full"
                >
                  +
                </button></span
              >
              <button
                @click="store.addProduct(product, index)"
                class="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Agregar
              </button>

              <!--             <button @click="descripcion(product)">Descripcion</button> -->
            </div>
          </div>
    
        </div>
      </div>
    </div>
    <div v-if="store.activeModal"> <ModalAddCart></ModalAddCart></div>

  </div>
  
</template>

<script setup>
import { useProductStore } from "../stores/ProducStore";
import ModalAddCart from "../components/ModalAddCart.vue";
import { ref } from "vue";
const estado = ref(false);

const validar = (producto,sumar) => {

 console.log(producto,sumar)

if (producto.cantidad===0) {
 /*  producto.cantidad=1 */
  alert("Seleccione una cantidad valida")
} else {

  sumar=="+"? producto.cantidad ++ : producto.cantidad -- 
}




};
const store = useProductStore();
const categorias = [
  {
    nombre: "Bebidas",
    imgCategoria:
      "https://larosas.b-cdn.net/v6/images/items/cat_30647.png?width=560&crop_gravity=center&aspect_ratio=7:3",
  },
  {
    nombre: "Pizzas",
    imgCategoria:
      "https://larosas.b-cdn.net/v6/images/items/cat_30637.png?width=560&crop_gravity=center&aspect_ratio=7:3",
  },
  {
    nombre: "Postres",
    imgCategoria:
      "https://larosas.b-cdn.net/v6/images/items/cat_30648.png?width=560&crop_gravity=center&aspect_ratio=7:3",
  },

  {
    nombre: "Empanadas",
    imgCategoria:
      "https://i.ibb.co/zXMSpjv/empanada.png?width=560&crop_gravity=center&aspect_ratio=7:3",
  },

  /* 
"🍹bebidas", "🍕pizzas", "🍝postres","🥟empanadas" */
];
console.log(store.count);
</script>

<style lang="scss" scoped></style>
