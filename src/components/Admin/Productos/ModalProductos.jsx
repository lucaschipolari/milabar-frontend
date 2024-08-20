import PropTypes from "prop-types";
import { Dialog } from "primereact/dialog"; // Asegúrate de importar el componente correcto
import "./styles/producto.css";

const ModalProductos = ({ values, visible, onHide }) => {
  const footerContent = (
    <div>
      <button type="button" className="btn btn-secondary" onClick={onHide}>
        Cerrar
      </button>
    </div>
  );

  return (
    <Dialog
      header={values.nombre}
      visible={visible}
      position="center" // Puedes cambiar la posición según tus necesidades
      style={{ width: "50vw" }}
      onHide={onHide}
      footer={footerContent}
      draggable={false}
      resizable={false}
    >
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
    habilitado: PropTypes.bool.isRequired,
  }).isRequired,
  visible: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
};

export default ModalProductos;
