import TablaProductos from "../components/Admin/Productos/TablaProductos";
import BtnNuevoProducto from "../components/Admin/Productos/BtnNuevoProducto";

const PrincipalProductoView = () => {
  return (
    <div className="container">
      <BtnNuevoProducto />
      <TablaProductos />
    </div>
  );
};
export default PrincipalProductoView;
