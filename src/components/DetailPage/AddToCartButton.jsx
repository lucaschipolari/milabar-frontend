import PropTypes from "prop-types";
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

AddToCartButton.propTypes = {
  product: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
  }).isRequired,
};
