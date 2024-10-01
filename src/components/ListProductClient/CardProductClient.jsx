import { useState } from "react";
import PropTypes from "prop-types";
import { faHeart, faInfo, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../components/Admin/Product/styles/producto.css";
import { useCartStore } from "../../stores/useCartStore.js";
import { toast } from "sonner";
import { useSession } from "../../stores/useSession.js";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ProductCardClient = (props) => {
  const { producto } = props;
  const [isHearted, setIsHearted] = useState(false);
  const [isAdded, setIsAdded] = useState(false); // Estado para la animación de la tarjeta
  const [isButtonColored, setIsButtonColored] = useState(false); // Estado para el cambio de color del botón

  const { addProduct } = useCartStore();
  const { isLoggedIn } = useSession();

  const addToCart = () => {
    if (!isLoggedIn) {
      Swal.fire({
        icon: "warning",
        title: "Debes iniciar sesión",
        text: "Por favor, inicia sesión para añadir productos al carrito",
        confirmButtonText: "Ok",
      });
      return;
    }
    addProduct({
      id: producto.id,
      name: producto.nombre,
      image: producto.imagen,
      price: producto.preciounitario,
      quantity: 1,
    });

    toast.success(`${producto.nombre} añadido al carrito.`, {
      duration: 1000,
    });

    // Activa la clase de color en el botón
    setIsButtonColored(true);

    // Remueve el color después de un corto período
    setTimeout(() => {
      setIsButtonColored(false);
    }, 1000); // El color cambia durante 1 segundo
  };

  const toggleHeart = () => {
    setIsHearted(!isHearted);
  };

  return (
    <div className="card-container-sup">
      <div
        className={`card-container ${isAdded ? "added-to-cart-animation" : ""}`}
      >
        <div className="card-body-producto">
          <div
            className={`add-button ${
              isButtonColored ? "added-to-cart-color" : ""
            }`}
            onClick={addToCart}
          >
            +
          </div>
          <div
            className={`heart-container ${isHearted ? "active" : ""}`}
            onClick={toggleHeart}
          >
            <FontAwesomeIcon icon={faHeart} className="heart-icon" />
          </div>
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="img-producto"
          />
          <div className="card-content-producto">
            <h2 className="mt-3 card-title">{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
          </div>
          <div className="card-product-price my-2">
            <p className="m-0">
              <span className="product-price">$ {producto.preciounitario}</span>
            </p>
            <Link
              className="card-btn-info card-btn"
              to={`/detalle/${producto.id}`}
            >
              <FontAwesomeIcon icon={faInfo} className="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductCardClient.propTypes = {
  producto: PropTypes.shape({
    id: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    imagen: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    preciounitario: PropTypes.number.isRequired,
  }).isRequired,
  esAdmin: PropTypes.bool,
  handleLike: PropTypes.func,
  handleAddCart: PropTypes.func,
};

export default ProductCardClient;
