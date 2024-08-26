import React from 'react';
import PropTypes from 'prop-types'; // Importamos PropTypes para la validación
import './styles/ProductHeader.css';
import { useNavigate } from 'react-router-dom';

const ProductHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="product-header">
      <button className="back-button" onClick={() => navigate(-1)}>
        Volver
      </button>
    </header>
  );
};


ProductHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
