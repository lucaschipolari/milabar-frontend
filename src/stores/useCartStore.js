import { create } from "zustand";

export const useCartStore = create((set) => ({
  products: [
    { id: 1, name: "nombre 1", price: 10.0, quantity: 0 },
    // { id: 2, name: "nombre 2", price: 20.0, quantity: 0 },
    // { id: 3, name: "nombre 3", price: 30.0, quantity: 0 },
  ],
  updateQuantity: (id, increment) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === id
          ? { ...product, quantity: Math.max(0, product.quantity + increment) }
          : product
      ),
    })),
  clearCart: () =>
    set((state) => ({
      products: state.products.map((product) => ({
        ...product,
        quantity: 0,
      })),
    })),
}));
