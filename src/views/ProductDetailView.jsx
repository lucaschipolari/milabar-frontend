import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductoFn } from "../api/productos"; // Importa la función de la API para obtener el producto
import ProductImage from "../components/DetailPage/ProductImage";
import ProductDescription from "../components/DetailPage/ProductDescription";
import AddToCartButton from "../components/DetailPage/AddToCartButton";
import "../components/DetailPage/styles/styles.css";

const ProductDetailPage = () => {
  const { id } = useParams(); // Obtenemos el ID del producto desde la URL
  const navigate = useNavigate(); // Para manejar la navegación de retroceso
  const [product, setProduct] = useState(null); // Estado para almacenar el producto
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado de error
  const [quantity, setQuantity] = useState(1); // Estado para la cantidad de producto
  const [liked, setLiked] = useState(false); // Estado para manejar si el producto está marcado como favorito

  const toggleLiked = () => {
    setLiked((prevLiked) => !prevLiked);
  };

  // Función para obtener el producto desde la API
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductoFn(id); // Llamada a la API
        setProduct(data.data); // Accedemos al campo "data" del producto
        setLoading(false); // Detenemos la carga
      } catch (err) {
        setError(err.message); // Capturamos y mostramos el error
        setLoading(false); // Detenemos la carga
      }
    };

    fetchProduct();
  }, [id]); // Se ejecuta cuando cambia el ID

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1); // Incrementa la cantidad
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1); // Decrementa la cantidad, pero no por debajo de 1
    }
  };

  // Manejamos el estado de carga y de error
  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>No se encontró el producto.</div>;
  }

  // Renderizamos los detalles del producto
  return (
    <div className="product-detail-container">
    <div className="product-detail-page">
      {/* Botón de retroceso */}
      <div className="button-container d-flex justify-content-between">
        <button className="back-button" onClick={() => navigate(-1)}>
          Volver
        </button>
        <button className="heart-button" onClick={toggleLiked}>
          {liked ? "❤️" : "🤍"}
        </button>
      </div>

      {/* Imagen del producto */}
      
        <ProductImage imageUrl={product.imagen} alt={product.nombre} />
      

      {/* Información del producto */}
      <div className="product-info">
        <div className="product-title-price">
          <h1 className="product-title">{product.nombre}</h1>
          <p className="product-price">${product.preciounitario}</p>
        </div>
        <ProductDescription description={product.descripcion} />
      </div>

      {/* Acciones del producto */}
      <div className="product-actions">
        <div className="quantity-selector">
          <button onClick={handleDecrement} className="quantity-button">
            -
          </button>
          <span>{quantity}</span>
          <button onClick={handleIncrement} className="quantity-button">
            +
          </button>
        </div>

        {/* Botón de agregar al carrito */}
        <AddToCartButton product={product} quantity={quantity} />
      </div>
    </div>
    </div>
  );
};

export default ProductDetailPage;
