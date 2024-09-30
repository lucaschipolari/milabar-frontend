import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductoFn } from "../api/productos";
import ProductImage from "../components/DetailPage/ProductImage";
import ProductDescription from "../components/DetailPage/ProductDescription";
import AddToCartButton from "../components/DetailPage/AddToCartButton";
import "../components/DetailPage/styles/styles.css";

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [liked, setLiked] = useState(false);

  const toggleLiked = () => {
    setLiked((prevLiked) => !prevLiked);
  };

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

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

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
          <AddToCartButton producto={product} quantity={quantity} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
