import { useParams } from 'react-router-dom';
import { getProductoFn } from '../api/productos';
import React, { useEffect, useState } from 'react';
import ProductImage from '../components/DetailPage/ProductImage';
import ProductDescription from '../components/DetailPage/ProductDescription';
import AddToCartButton from '../components/DetailPage/AddToCartButton';
import ProductHeader from '../components/DetailPage/ProductHeader';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductoFn(id);
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

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
    <div className="product-detail-page">
      <ProductHeader title={product.nombre} />
      <ProductImage imageUrl={product.imagenUrl} alt={product.nombre} />
      <ProductDescription description={product.descripcion} />
      <AddToCartButton />
    </div>
  );
};

export default ProductDetailPage;
