<template>
  <div>
    <h2 class="text-gray-100 text-xl py-2 text-center rounded-t bg-orange-600">
      Resumen de compra
    </h2>
    <form class="w-full max-w-lg mx-auto bg-gray-100 rounded-b p-8">
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Nombre
          </label>
          <input
            class="appearance-none block w-full bg-gray-50 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
            v-model="nombre"
          />
          <p class="text-red-500 text-xs italic">
            Por favor complete los campos.
          </p>
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Apellido
          </label>
          <input
            class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="Doe"
            v-model="apellido"
          />
        </div>
      </div>

      <div class="flex flex-wrap -mx-3 mb-2 ">
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-city"
          >
            Localidad
          </label>
          <input
            class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-city"
            type="text"
            placeholder="Albuquerque"
            v-model="localidad"
          />
        </div>

        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-zip"
          >
            Direccion
          </label>
          <input
            class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-zip"
            type="text"
            placeholder="90210"
            v-model="direccion"
          />
        </div>
      </div>
      <a
        class="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none rounded px-4 py-2  mx-2 my-4"
        :href="`https://api.whatsapp.com/send/?phone=541535888672&text=${
          'Su pedido es:' + linkMsn
        }`"
        >Enviar</a
      >

      <div class="text-gray-800 my-8">
        <hr />
        <h2 class="text-orange-600">Productos</h2>
<!--     <p>{{ linkMsn }} <br /></p> -->
      <p>{{ sendMsn }}</p> 
      </div>
     
        <div class="grid grid-cols-2 " v-for="item in store.carrito" :key="item.id">
          
          <p>???{{item.nombre}} </p>
          <p>$ {{item.precio}} </p>
          <br>
          
          
          </div>
          <hr>
          <div class="text-xl my-4">Total a Pagar <strong class="text-orange-600">$ {{store.addTotal}}</strong></div>
          <hr>
         
         <div class="" v-if="nombre!==''">
          <div><strong>Datos del comprador:</strong> {{nombre}} {{apellido}}</div>
         <div><strong>Direcci??n:</strong> {{localidad}} </div>
         <div><strong>Codigo Postal:</strong> {{direccion}} </div>
        </div>
    </form>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useProductStore } from "../stores/ProducStore";
const store = useProductStore();
const linkMsn = ref("");
const nombre=ref('')
const apellido=ref('')
const localidad=ref('')
const direccion=ref('')
const sendMsn = computed(() => {
  linkMsn.value = "";

  store.carrito.forEach((element) => {
    linkMsn.value = `${
      linkMsn.value + " ???" + element.nombre + " $  " + element.precio 
    }`;
  });
  linkMsn.value = `${linkMsn.value + " *Datos del comprador:* " + nombre.value + " " + apellido.value + " *Direcci??n:* " + localidad.value + " ????*Total* "+store.addTotal }`;
});
</script>

<style lang="scss" scoped></style>
