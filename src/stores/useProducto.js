import { create } from 'zustand';

export const useProducto = create((set) => ({
  productoToEdit: null,
  setProductoToEdit: (newProducto) =>
    set({
      productoToEdit: newProducto,
    }),
  clearProductoToEdit: () =>
    set({
      productoToEdit: null,
    }),
}));