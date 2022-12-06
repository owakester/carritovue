<template>
  <div>
    <div class="flex justify-center my-6">
      <div
        class="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5"
      >
        <div class="flex-1">
          <table class="w-full text-sm lg:text-base" cellspacing="0">
            <thead>
              <tr class="h-12 uppercase">
                <th class="hidden md:table-cell"></th>
                <th class="text-left">Producto</th>
                <th class="lg:text-right text-left pl-5 lg:pl-0">
                  <span class="lg:hidden" title="Quantity">Qtd</span>
                  <span class="hidden lg:inline">Cantidad</span>
                </th>
                <th class="hidden text-right md:table-cell">Precio Unitario</th>
                <th class="text-right">Precio Total</th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="divide-y"
                v-for="product in store.carrito"
                :key="product.id"
              >
                <td class="hidden pb-4 md:table-cell">
                  <a href="#">
                    <img class="h-48 w-auto" :src="product.imagen" />
                  </a>
                </td>
                <td>
                  <a href="#">
                    <p class="mb-2 md:ml-4">{{ product.nombre }}</p>

                    <button
                      @click="store.removeProduct(product)"
                      class="text-gray-700 bg-red-300 rounded p-2 md:ml-4"
                    >
                      <small>(Eliminar item)</small>
                    </button>
                  </a>
                </td>

                <td class="text-right">
                  <div class="w-14 h-10">
                    <input
                      :disabled="product.cantidad <= 0"
                      v-model="product.cantidad"
                      type="number"
                      class="w-full rounded font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black"
                    />
                  </div>
                </td>

                <td class="hidden text-right md:table-cell">
                  <span class="text-sm lg:text-base font-medium">
                    {{ product.precio }}
                  </span>
                </td>
                <td class="text-right">
                  <span class="text-sm lg:text-base font-medium">
                    {{ (totalUnidad = product.precio * product.cantidad) }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <div
            class="text-orange-700 flex justify-center text-3xl text-center"
            v-if="store.carrito.length === 0"
          >
            <img
              class="h-40 w-40 mt-12"
              src="https://cdn-icons-png.flaticon.com/512/3220/3220742.png"
              alt=""
            />
            <span class="text-center text-lg text-gray-700"
              >Tu cesta está vacía. ¡Sigue comprando para encontrar tu
              producto</span
            >
          </div>

          <h3 class="text-lg text-gray-700">
            Total a Pagar $
            <span class="text-orange-600 font-bold text-md">{{
              store.addTotal
            }}</span>
          </h3>
          <hr class="pb-6 mt-6" />
          <button
            @click="router.push('/')"
            class="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none rounded px-4 py-2"
          >
            Volver
          </button>
          <button
            @click="(resumen=true)"
            class="mx-2 text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none rounded px-4 py-2"
          >
            Pagar
          </button>

          <!--    <p>{{sendMsn}}</p> -->
        </div>
      </div>

      <div class="mx-2" v-if="(resumen===true)"><CheckOut></CheckOut></div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useProductStore } from "../stores/ProducStore";
import { useRoute, useRouter } from "vue-router";
import CheckOut from "./CheckOut.vue";
const router = useRouter();
const totalUnidad = ref(0);
const resumen=ref(false)
const store = useProductStore();

const linkMsn = ref("");
/* const sendMsn = computed(() => {
  store.carrito.forEach((element) => {
    linkMsn.value =`${linkMsn.value +  "✅"+element.nombre+"$"+element.precio}`

  });
}); */
</script>

<style lang="scss" scoped></style>
