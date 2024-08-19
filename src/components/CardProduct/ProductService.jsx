export const ProductService = {
  getProductsSmall: async () => {
    // Simular datos de productos
    return [
      {
        id: 1,
        name: "Producto 1",
        image: "product1.png",
        price: 100,
        inventoryStatus: "INSTOCK",
      },
      {
        id: 2,
        name: "Producto 2",
        image: "product2.png",
        price: 120,
        inventoryStatus: "LOWSTOCK",
      },
      {
        id: 3,
        name: "Producto 3",
        image: "product3.png",
        price: 140,
        inventoryStatus: "OUTOFSTOCK",
      },
      {
        id: 1,
        name: "Producto 1",
        image: "product1.png",
        price: 100,
        inventoryStatus: "INSTOCK",
      },
      {
        id: 2,
        name: "Producto 2",
        image: "product2.png",
        price: 120,
        inventoryStatus: "LOWSTOCK",
      },
      {
        id: 3,
        name: "Producto 3",
        image: "product3.png",
        price: 140,
        inventoryStatus: "OUTOFSTOCK",
      },
      // Añadir más productos aquí...
    ];
  },
};
