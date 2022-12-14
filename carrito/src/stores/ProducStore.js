import { defineStore } from "pinia";
import { ref, computed, onBeforeMount, onMounted } from "vue";
export const useProductStore = defineStore("product", () => {
  const count = ref(0);
  const info = ref(null);
  const carrito = ref([]);
  const filtro = ref(null);
  const stateLoad = ref(true);
  const activeModal = ref(false);
  const activeProduct = ref(true);
  const sumar = ref(null);
  const categories = ref(null);
  const getProducts = async () => {
    try {
      const url =
        " https://script.google.com/macros/s/AKfycbyWvw9LrEg4Naj4a67pPCFgEp4GYNwFPZr39501zleqWQfcl-lRjMoflF8x9k6N2tRMkg/exec";

      const categoriaApi =
        "https://apipizzeriaremolo-production.up.railway.app/api/v1/categories";

      const url2 =
        "https://apipizzeriaremolo-production.up.railway.app/api/v1/products";

      await fetch(url2)
        .then((response) => response.json())
        .then((data) => showInfo(data));

      await fetch(categoriaApi)
        .then((response) => response.json())
        .then((data) => (categories.value = data));
    } catch (error) {
      console.log(error);
    }
  };

  const showInfo = (data) => {
    stateLoad.value = true;
    info.value = data;
    filtro.value = info.value;

    stateLoad.value = false;
  };

  const addTotal = computed(() => {
    const total = carrito.value.reduce(
      (acc, item) => acc + item.precio * item.cantidad,
      0
    );
    return total;
  });

  onMounted(() => {
    getProducts();
  });

  const addProduct = (prod, posicion) => {
    activeModal.value = true;
    const existe = carrito.value.some((item) => item.id === prod.id);

    if (!existe) {
      carrito.value.push(prod);
      console.log(prod.cantidad * prod.precio);
    } else {
      const actualizarcantidad = carrito.value.map((item) => {
        if (item.id === prod.id) {
          item.cantidad++;
        }
      });
    }
  };

  const removeProduct = (prod) => {
    console.log(prod.cantidad);
    prod.cantidad = 1;
    const eliminar = ref(null);

    carrito.value = carrito.value.filter((item) => item.id != prod.id);
    console.log(eliminar.value);
  };

  const filterProduct = (categoria) => {
    console.log(categoria);
    console.log(info.value);
    filtro.value = info.value.filter((item) => item.category_id === categoria);
  };

  return {
    count,

    info,
    addProduct,
    carrito,
    filterProduct,
    filtro,
    stateLoad,
    addTotal,
    sumar,
    activeModal,
    activeProduct,
    removeProduct,
    categories,
  };
});
