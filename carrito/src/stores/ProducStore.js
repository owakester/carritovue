import { defineStore } from "pinia";
import { ref, computed, onBeforeMount, onMounted } from "vue";
export const useProductStore = defineStore("product", () => {
  const count = ref(0);
  const info = ref(null);
  const carrito = ref([]);
  const filtro = ref(null);
  const stateLoad = ref(true);
  const doubleCount = computed(() => count.value * 2);

  function countProduct() {
    count.value++;
  }

  const getProducts = async () => {
    try {
      const url =
        " https://script.google.com/macros/s/AKfycbyWvw9LrEg4Naj4a67pPCFgEp4GYNwFPZr39501zleqWQfcl-lRjMoflF8x9k6N2tRMkg/exec";

      await fetch(url)
        .then((response) => response.json())
        .then((data) => showInfo(data));
      /* info.value=info.value.filter(item=>item.precio===1000)
       */
    } catch (error) {
      console.log(error);
    }
  };

  const showInfo = (data) => {
    stateLoad.value = true;
    info.value = data.data;
    filtro.value = info.value;
    stateLoad.value = false;
  };

  onMounted(() => {
    getProducts();
  });

  const addProduct = (prod, posicion) => {
    const existe = carrito.value.some((item) => item.id === prod.id);

    if (!existe) {
      carrito.value.push(prod);
    } else {
    
      const actualizarcantidad= carrito.value.map(item=>{
        if (item.id===prod.id) {
          item.cantidad++
        }
      })


    }
  };

  const filterProduct = (categoria) => {
    filtro.value = info.value.filter((item) => item.categoria === categoria);
  };

  return {
    count,
    doubleCount,
    countProduct,
    info,
    addProduct,
    carrito,
    filterProduct,
    filtro,
    stateLoad,
  };
});
