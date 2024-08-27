import React from 'react';

const AddToCartButton = ({ product }) => {
  const handleAddToCart = () => {
    console.log(`Producto agregado al carrito: ${product.nombre}`);
  };

  return (
    <button className="add-to-cart-button" onClick={handleAddToCart}>
      Agregar a Carrito
    </button>
  );
};

export default AddToCartButton;
