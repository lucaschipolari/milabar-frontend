import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button } from "primereact/button";

import {
  faCartShopping,
  faHeart,
  faPencil,
  faTrash,
  faPlus
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const CardProductClient = (props) => {
  const {
    producto,
    esAdmin = false,
    handleMoreInfo,
    handleEdit,
    handleDelete,
    handleLike,
    handleAddCart,
    modalData,
    visible,
    setVisible,
  } = props;

  return (
    <div className="card single__product my-4 h-100 d-flex justify-content-between">
      <div className="product__img">
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="h-100 w-100 img-fluid object-fit-cover"
        />
      </div>
      <h6 className="text-center fs-3 my-2">{producto.nombre}</h6>
      <p className="text-center m-0">{producto.descripcion}</p>
      <hr />
      {esAdmin && (
        <div className="product__content mb-1">
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
      )}
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
      {/*modalData && (
        <ModalProductos
          values={modalData}
          visible={visible}
          onHide={() => setVisible(false)}
        />
      )*/}
    </div>
  );
};

export default CardProductClient;

CardProductClient.propTypes = {
  producto: PropTypes.shape({
    id: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    imagen: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    preciounitario: PropTypes.number.isRequired,
  }).isRequired,
  esAdmin: PropTypes.bool,
  handleMoreInfo: PropTypes.func,
  handleEdit: PropTypes.func,
  handleDelete: PropTypes.func,
};
