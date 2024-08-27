import PropTypes from "prop-types";

const ProductImage = ({ imageUrl, alt }) => {
  return (
    <div className="product-image-container">
      <img src={imageUrl} alt={alt} className="producto-imagen" />
    </div>
  );
};

ProductImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ProductImage;
