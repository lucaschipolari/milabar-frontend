import PropTypes from "prop-types";
import { Dialog } from "primereact/dialog";
import "./styles/producto.css";

const ModalProductos = ({ values, visible, onHide }) => {
  return (
    <Dialog
      visible={visible}
      position="top"
      onHide={onHide}
      closable={false}
      className="modal-size w-auto bg-white"
    >
      <div className="modal-body">
        <div className="modal-contenedor-img-size d-flex justify-content-center">
          <img
            src={values.imagen}
            alt={values.nombre}
            className="img-fluid w-100 object-fit-cover"
          />
        </div>
        <div>
          <h5 className="text-center mb-2">{values.nombre}</h5>
          <ul className="mt-2">
            <li className="mb-0">
              <strong>Descripción: </strong>
              {values.descripcion}
            </li>
            <li className="mb-0">
              <strong>Categoría: </strong> {values.categoria}
            </li>
            <li className="mb-0">
              <strong>Precio: </strong> {values.preciounitario} por{" "}
              {values.unidadmedida}
            </li>
            <li className="mb-0">
              <strong>Habilitado: </strong>  {values.habilitado=== "true" ? "Sí" : "No"}
            </li>
            <li className="mb-0">
              <strong>Agregado: </strong> {values.agregado=== "true" ? "Sí" : "No"}
            </li>
          </ul>
        </div>
        <hr />
        <div className="d-flex justify-content-end align-items-center m-2">
          <button type="button" className="btn btn-warning" onClick={onHide}>
            Cerrar
          </button>
        </div>
      </div>
    </Dialog>
  );
};

ModalProductos.propTypes = {
  values: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    categoria: PropTypes.string.isRequired,
    unidadmedida: PropTypes.string.isRequired,
    preciounitario: PropTypes.number.isRequired,
    imagen: PropTypes.string.isRequired,
    habilitado: PropTypes.string.isRequired,
  }).isRequired,
  visible: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
};

export default ModalProductos;
