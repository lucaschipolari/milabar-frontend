import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button } from "primereact/button";

import {
  faCartShopping,
  faHeart,
  faPencil,
  faTrash,
  faPlus,
  faInfo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../../components/Admin/Product/styles/producto.css";
import { useCartStore } from "../../stores/useCartStore";
import { toast } from "sonner";

const ProductCardClient = (props) => {
  const { producto, esAdmin = false, handleLike, handleAddCart } = props;
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
            <Button className="btn btn-primary" onClick={addToCart}>
              <FontAwesomeIcon icon={faCartShopping} />
            </Button>
            <Link className="btn-more-info" to={`/detalle/${producto.id}`}>
              <FontAwesomeIcon icon={faInfo} />
            </Link>
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
  esAdmin: PropTypes.bool,
  handleLike: PropTypes.func.isRequired,
  handleAddCart: PropTypes.func,
};
