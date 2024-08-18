import PropTypes from "prop-types";

import "./styles/producto.css";

const ModalProductos = ({ values, onClose }) => {
  return (
    <div className="modal fade show d-block" tabIndex="-1">
      <div className="modal-dialog modal-size">
        <div className="modal-content container">
          <div className="modal-header d-flex justify-content-center align-items-center">
            <h5 className="modal-title">{values.nombre}</h5>
          </div>
          <div className="modal-body">
            <img
              src={values.imagen}
              alt={values.nombre}
              className="img-fluid mb-2"
            />
            <p>{values.descripcion}</p>
            <div className="row justify-content-around">
              <div className="col-12 mb-2">
                <div className="bg-primary p-2 rounded-4 mx-1">
                  <p className="text-center mb-0">
                    <strong>Categoría</strong>
                  </p>
                  <p className="text-center mb-0">{values.categoria}</p>
                </div>
              </div>
              <div className="col-12">
                <div className="row mx-1">
                  <div className="bg-secondary col-6 p-2 rounded-4">
                    <p className="text-center mb-0">
                      <strong>Precio</strong>
                    </p>
                    <p className="text-center mb-0">
                      ${values.preciounitario} {values.unidadmedida}
                    </p>
                  </div>
                  <div className="bg-danger col-6 p-2 rounded-4">
                    <p className="text-center mb-0">
                      <strong>Habilitado</strong>
                    </p>
                    <p className="text-center mb-0">
                      {values.habilitado ? "Sí" : "No"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
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
    habilitado: PropTypes.bool.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ModalProductos;
