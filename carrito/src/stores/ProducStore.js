import { defineStore } from "pinia";
import { ref, computed } from "vue";
export const useProductStore = defineStore("product", () => {
  const count = ref(0);
  const info = ref(null);
  const carrito = ref([]);
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
        .then((data) => (info.value = data.data));
      /* info.value=info.value.filter(item=>item.precio===1000)
       */
    } catch (error) {
      console.log(error);
    }
  };

  getProducts();

  const addProduct = (select) => {
    carrito.value.push(select)
    carrito.value.forEach(element => {

});

    console.log(carrito.value);
  };

  return { count, doubleCount, countProduct, info, addProduct };
});
