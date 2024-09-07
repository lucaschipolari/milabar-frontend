import PropTypes from "prop-types";

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../../components/Admin/Product/styles/producto.css";
import { useCartStore } from "../../stores/useCartStore";
import { toast } from "sonner";
import { useState } from "react";

const ProductCardClient = (props) => {
  const { producto } = props;
  const [isHearted, setIsHearted] = useState(false);

  const { addProduct } = useCartStore();

  const addToCart = () => {
    addProduct({
      id: producto.id,
      name: producto.nombre,
      image: producto.imagen,
      price: producto.preciounitario,
    });
    toast.success(`${producto.nombre} añadido al carrito.`);
  };

  const toggleHeart = () => {
    setIsHearted(!isHearted);
  };

  return (
    <div className="card-container-sup">
      <div className="card-container">
        {/* <div className="card-img-producto"></div> */}
        <div className="card-body-producto">
          <div className="add-button" onClick={addToCart}>
            +
            {/* <button className="card-btn-remove card-btn">Remover</button> */}
          </div>
          <div
            className={`heart-container ${isHearted ? "active" : ""}`}
            onClick={toggleHeart}
          >
            <FontAwesomeIcon icon={faHeart} className={`heart-icon`} />
          </div>
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="h-100 w-100 img-fluid object-fit-cover img-producto"
          />
          <div className="card-content-producto">
            <h2 className="mt-3 card-title">{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
          </div>
          <div className="card-product-price">
            <p>
              Precio: <span>{producto.preciounitario}</span>
            </p>
          </div>
          <div className="card-options">
            <button
              className="card-btn-info card-btn"
              to={`/detalle/${producto.id}`}
            >
              Más info
            </button>
            <button className="card-btn-add-cart card-btn" onClick={addToCart}>
              Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardClient;

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
