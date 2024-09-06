import Swal from "sweetalert2";
import { create } from "zustand";

export const useCartStore = create((set) => ({
  products: [],

  addProduct: (product) =>
    set((state) => {
      const existingProductIndex = state.products.findIndex(
        (p) => p.id === product.id
      );
      if (existingProductIndex >= 0) {
        const updateProducts = [...state.products];
        updateProducts[existingProductIndex] = {
          ...updateProducts[existingProductIndex],
          quantity: updateProducts[existingProductIndex].quantity + 1,
        };
        return { products: updateProducts };
      } else {
        return {
          products: [...state.products, { ...product, quantity: 1 }],
        };
      }
    }),

  updateQuantity: (id, increment) =>
    set((state) => {
      return {
        products: state.products.map((product) => {
          if (product.id === id) {
            if (product.quantity === 1 && increment === -1) {
              Swal.fire({
                title: "¿Estás seguro?",
                text: "Estás a punto de eliminar el producto del carrito.",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Sí, eliminar",
                cancelButtonText: "Cancelar",
              }).then((result) => {
                if (result.isConfirmed) {
                  set((state) => ({
                    products: state.products.filter((p) => p.id !== id),
                  }));
                  Swal.fire(
                    "Eliminado",
                    "El producto ha sido eliminado.",
                    "success"
                  );
                }
              });
            } else {
              return {
                ...product,
                quantity: Math.max(0, product.quantity + increment),
              };
            }
          }
          return product;
        }),
      };
    }),

  // set((state) => ({
  //   products: state.products.map((product) =>
  //     product.id === id
  //       ? { ...product, quantity: Math.max(0, product.quantity + increment) }
  //       : product
  //   ),
  // })),

  clearCart: () =>
    set((state) => ({
      products: state.products.map((product) => ({
        ...product,
        quantity: 0,
      })),
    })),
}));

export const useTotalPrice = () =>
  useCartStore((state) =>
    state.products.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    )
  );
