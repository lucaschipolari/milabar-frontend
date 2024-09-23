import PropTypes from "prop-types";
import { useCartStore } from "../../stores/useCartStore";
import { toast } from "sonner";

const AddToCartButton = (props) => {
  const { producto, quantity } = props;
  const { addProduct } = useCartStore();

  const addToCart = () => {
    addProduct({
      id: producto.id,
      name: producto.nombre,
      image: producto.imagen,
      price: producto.preciounitario,
      quantity,
    });
    toast.success(`${producto.nombre} añadido al carrito.`, {
      duration: 1000,
    });
  };

  return (
    <button className="add-to-cart-button" onClick={addToCart}>
      Agregar a Carrito
    </button>
  );
};

export default AddToCartButton;

AddToCartButton.propTypes = {
  producto: PropTypes.shape({
    id: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    imagen: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    preciounitario: PropTypes.number.isRequired,
  }).isRequired,
  quantity: PropTypes.number.isRequired,
};
