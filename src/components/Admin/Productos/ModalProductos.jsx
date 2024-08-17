import PropTypes from 'prop-types';

import './styles/producto.css';

const ModalProductos = ({ values, onClose }) => {
  return (
    <div className="modal fade show d-block shadow-lg" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header d-flex justify-content-center align-items-center">
            <h5 className="modal-title">{values.nombre}</h5>
          </div>
          <div className="modal-body">
            <p><strong>Descripción:</strong> {values.descripcion}</p>
            <p><strong>Categoría:</strong> {values.categoria}</p>
            <p><strong>Precio: </strong> ${values.preciounitario} por {values.unidadmedida}</p>
            <p><strong>Imagen:</strong> <img src={values.imagen} alt={values.nombre} className='img-fluid' /></p>
            <p><strong>Habilitado:</strong> {values.habilitado ? 'Sí' : 'No'}</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Cerrar</button>
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
