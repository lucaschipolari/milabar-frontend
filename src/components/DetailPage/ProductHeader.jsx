import React from 'react';
import './styles/ProductHeader.css';
import { useNavigate } from 'react-router-dom';  // Para navegación

const ProductHeader = () => {
  const navigate = useNavigate();  // Hook para manejar la navegación

  return (
    <header className="product-header">
      <button className="back-button" onClick={() => navigate(-1)}>
        Volver
      </button>
      <h1>Detalle del Producto</h1>
    </header>
  );
};

export default ProductHeader;

