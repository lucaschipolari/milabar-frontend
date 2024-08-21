import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button } from "primereact/button";

import ModalProductos from "../ModalProductos.jsx";

import "../styles/producto.css";

const ProductCard = (props) => {
  const {
    id,
    imagen,
    titulo = "default",
    descripcion,
    esAdmin = false,
    handleMoreInfo,
    handleEdit,
    handleDelete,
    modalData,
    visible,
    setVisible
  } = props;

  return (
    <div className="card single__product mb-4">
      <div className="product__img">
        <img
          src={imagen}
          alt={titulo}
          className="h-100 w-100 img-fluid object-fit-cover"
        />
      </div>
      <h6 className="text-center fs-3 my-2">{titulo}</h6>
      <p className="text-center">{descripcion}</p>
      <hr />
      {esAdmin && (
        <div className="product__content">
          <div className="d-flex justify-content-around align-items-center m-2">
            <Button className="btn btn-primary" onClick={handleMoreInfo}>
              <i className="bi bi-plus-circle tamaño-icono"></i>
            </Button>
            <Link
              className="btn btn-warning col-auto"
              to={`/detalle/${id}`}
              onClick={handleEdit}
            >
              <i className="bi bi-pencil-square tamaño-icono"></i>
            </Link>
            <button className="btn btn-danger col-auto" onClick={handleDelete}>
              <i className="bi bi-trash3-fill tamaño-icono"></i>
            </button>
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

export default ProductCard;

ProductCard.propTypes = {
  producto: PropTypes.shape({
    id: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    imagen: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    preciounitario: PropTypes.number.isRequired,
  }).isRequired,
};
