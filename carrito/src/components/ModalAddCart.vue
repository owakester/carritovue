<template>
  <div
    class="relative z-10"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
    ></div>

    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div
        class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
      >
        <!--
        Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      -->
        <div
          class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
        >
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div
                class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-500 sm:mx-0 sm:h-10 sm:w-10"
              >
                <!-- Heroicon name: outline/exclamation-triangle -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 48 48"
                  width="48px"
                  height="48px"
                >
                  <g id="surface115407353">
                    <path
                      style="
                        stroke: none;
                        fill-rule: nonzero;
                        fill: url(#linear0);
                      "
                      d="M 44 24 C 44 35.046875 35.046875 44 24 44 C 12.953125 44 4 35.046875 4 24 C 4 12.953125 12.953125 4 24 4 C 35.046875 4 44 12.953125 44 24 Z M 44 24 "
                    />
                    <path
                      style="
                        stroke: none;
                        fill-rule: nonzero;
                        fill: rgb(100%, 100%, 100%);
                        fill-opacity: 1;
                      "
                      d="M 21.292969 32.707031 L 13.292969 24.707031 C 12.902344 24.316406 12.902344 23.683594 13.292969 23.292969 L 14.707031 21.878906 C 15.097656 21.488281 15.730469 21.488281 16.121094 21.878906 L 22 27.757812 L 32.878906 16.878906 C 33.269531 16.488281 33.902344 16.488281 34.292969 16.878906 L 35.707031 18.292969 C 36.097656 18.683594 36.097656 19.316406 35.707031 19.707031 L 22.707031 32.707031 C 22.316406 33.097656 21.683594 33.097656 21.292969 32.707031 Z M 21.292969 32.707031 "
                    />
                  </g>
                </svg>
              </div>
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  class="text-lg font-medium leading-6 text-gray-900"
                  id="modal-title"
                >
                  Producto agregado
                </h3>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">
                    Se ha añadido un nuevo producto a tu carrito. Ahora tienes
                    {{ store.carrito.length }} artículos en tu Cesta
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              @click="store.activeModal = false"
              type="button"
              class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Seguir comprando
            </button>
            <button @click="store.activeProduct=false"
              type="button"
              class="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Ver la cesta
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useProductStore } from "../stores/ProducStore";
const store = useProductStore();
</script>
