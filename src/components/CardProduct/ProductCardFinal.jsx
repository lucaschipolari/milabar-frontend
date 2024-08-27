import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button } from "primereact/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faPencil,
  faTrash,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

import ModalProductos from "../Admin/Product/ModalProductos";
import { useCartStore } from "../../stores/useCartStore";

const ProductCard = (props) => {
  const {
    producto,
    esAdmin = false,
    isAdminPage = false,
    handleMoreInfo,
    handleEdit,
    handleDelete,
    handleLike,
    handleAddCart,
    modalData,
    visible,
    setVisible,
  } = props;

  const { addProduct } = useCartStore();

  const addToCart = () => {
    addProduct({
      id: producto.id,
      name: producto.nombre,
      image: producto.imagen,
      price: producto.preciounitario,
    });
    console.log("Producto añadido al carrito:", producto);
  };

  return (
    <div className="card single__product my-4 h-100 d-flex flex-column justify-content-between">
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

      {isAdminPage ? (
        // Vista para la página de administración
        <div className="product__content mb-1">
          <hr />
          <div className="d-flex justify-content-around align-items-center m-2">
            <Button className="btn btn-primary" onClick={handleMoreInfo}>
              <FontAwesomeIcon icon={faPlus} />
            </Button>
            <Link
              className="btn btn-warning col-auto"
              to={`/detalle/${producto.id}`}
              onClick={handleEdit}
            >
              <FontAwesomeIcon icon={faPencil} />
            </Link>
            <button className="btn btn-danger col-auto" onClick={handleDelete}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>
      ) : (
        // Vista para clientes y para el administrador en la página del menú
        <div className="product__content">
          <div className="d-flex justify-content-around align-items-center m-2">
            <button className="btn btn-danger col-auto" onClick={handleLike}>
              <FontAwesomeIcon icon={faHeart} />
            </button>
            <Button className="btn btn-primary" onClick={addToCart}>
              <FontAwesomeIcon icon={faCartShopping} />
            </Button>
          </div>
        </div>
      )}

      {modalData && (
        <ModalProductos
          values={modalData}
          visible={visible}
          onHide={() => setVisible(false)}
        />
      )}
    </div>
  );
};

ProductCard.propTypes = {
  producto: PropTypes.shape({
    id: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    imagen: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    preciounitario: PropTypes.number.isRequired,
  }).isRequired,
  esAdmin: PropTypes.bool,
  isAdminPage: PropTypes.bool,
  handleMoreInfo: PropTypes.func,
  handleEdit: PropTypes.func,
  handleDelete: PropTypes.func,
  handleLike: PropTypes.func,
  handleAddCart: PropTypes.func,
  modalData: PropTypes.object,
  visible: PropTypes.bool,
  setVisible: PropTypes.func,
};

export default ProductCard;
