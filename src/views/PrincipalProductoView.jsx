import TablaProductos from "../components/Admin/Product/Table/TablaProductos";
import BtnNuevoProducto from "../components/Admin/Product/BtnNuevoProducto";
import "../components/Admin/Product/styles/producto.css";
import { Link } from "react-router-dom";

const PrincipalProductoView = () => {
  return (
    <div className="">
      <Link to={-1}>
        <button className="btn btn-danger m-3">
          <i className="fas fa-arrow-left"></i> Regresar
        </button>
      </Link>
      <div className="container">
        <BtnNuevoProducto />
        <TablaProductos />
      </div>
    </div>
  );
};
export default PrincipalProductoView;
