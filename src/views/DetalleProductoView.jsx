import { Link } from "react-router-dom";
import FormularioProductos from "../components/Admin/Product/FormularioProductos";

const DetalleProductoView = () => {
  return (
    <div>
      <Link to={-1}>
        <button className="btn btn-danger m-2">
          <i className="fas fa-arrow-left"></i> Regresar
        </button>
      </Link>
      <FormularioProductos />
    </div>
  );
};
export default DetalleProductoView;
