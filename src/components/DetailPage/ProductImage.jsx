import React from 'react';

const ProductImage = ({ imageUrl, alt }) => {
  return (
    <div className="product-image">
      <img src={imageUrl} alt={alt} />
    </div>
  );
};

export default ProductImage;
