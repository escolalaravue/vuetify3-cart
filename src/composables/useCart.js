import { ref } from 'vue';

const isOpen = ref(false);
const cart = ref([]);

export const useCart = () => {
  function open() {
    isOpen.value = true;
  }

  function close() {
    isOpen.value = false;
  }

  function add(product) {
    const index = cart.value.findIndex(o => o.id === product.id);
    if (index >= 0) {
      const p = cart.value[index];
      p.qty += 1;
    } else {
      product.qty = 1;
      cart.value.push(product);
    }
  }

  return {
    isOpen,
    open,
    close,
    add,
    cart,
  };
}
