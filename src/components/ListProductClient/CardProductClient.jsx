import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button } from "primereact/button";

import {
  faCartShopping,
  faHeart,
  faPencil,
  faTrash,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../../components/Admin/Product/styles/producto.css";

const ProductCardClient = (props) => {
  const { producto, esAdmin = false, handleLike, handleAddCart } = props;

  return (
    <div className="card single__product my-4 h-100 d-flex flex-column">
      <div className="product__img">
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="h-100 w-100 img-fluid object-fit-cover"
        />
      </div>
      <div className="flex-grow-1 d-flex flex-column justify-content-around">
        <h6 className="text-center fs-3 my-2">{producto.nombre}</h6>
        <p className="text-start mx-2">{producto.descripcion}</p>
      </div>
      {!esAdmin && (
        <div className="product__content">
          <div className="d-flex justify-content-around align-items-center m-2">
            <button className="btn btn-danger col-auto" onClick={handleLike}>
              <FontAwesomeIcon icon={faHeart} />
            </button>
            <Button className="btn btn-primary" onClick={handleAddCart}>
              <FontAwesomeIcon icon={faCartShopping} />
            </Button>
          </div>
        </div>
      )}
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
};
