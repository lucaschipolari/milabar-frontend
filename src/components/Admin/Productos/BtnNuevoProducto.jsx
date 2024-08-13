import { Link } from 'react-router-dom';

const BtnNuevoProducto = () => {
  return (
        <Link className="btn bg-white w-100 rounded-4 border-light shadow-sm" to='/detalle'>
            <div className="m-2">
                <i className="bi bi-plus-circle"></i>
                <p>Nuevo producto</p>
            </div>
        </Link>
  )
}
export default BtnNuevoProducto