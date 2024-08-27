import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductoFn } from "../../api/productos";
import ProductImage from "./ProductImage";
import ProductDescription from "./ProductDescription";
import AddToCartButton from "./AddToCartButton";
import "./styles/styles.css";

const DetalledeProducto = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [liked, setLiked] = useState(false);
  const [showOffer, setShowOffer] = useState(false);

  const toggleLiked = () => {
    setLiked((prevLiked) => !prevLiked);
  };

  // Obtener producto desde la API
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductoFn(id);
        setProduct(data.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>No se encontró el producto.</div>;
  }

  return (
    <div>
      <div className="button-container">
        <button className="back-button" onClick={() => navigate(-1)}>
          Volver
        </button>
      </div>
      <div className="container">
        <div className="row productos-detalle-contenedor">
          <div className="producto-imagen col-12 col-md-6">
            <ProductImage imageUrl={product.imagen} alt={product.nombre} />
            <button className="heart-button" onClick={toggleLiked}>
              {liked ? "❤️" : "🤍"}
            </button>
          </div>

          <div className="acciones col-12 col-md-6">
            <div className="product-info">
              <div className="product-title-price">
                <h1 className="product-title">{product.nombre}</h1>
                <p className="product-price">${product.preciounitario}</p>
              </div>
              <ProductDescription description={product.descripcion} />
            </div>
          </div>
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
            <AddToCartButton product={product} quantity={quantity} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalledeProducto;
