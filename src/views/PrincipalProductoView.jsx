import TablaProductos from "../components/Admin/Productos/TablaProductos";
import BtnNuevoProducto from "../components/Admin/Productos/BtnNuevoProducto";
import ListProduct from "../components/Admin/Productos/ListProduct";
import ContenedorProductCard from "../components/Admin/Productos/ContenedorCardProduct";

import '../components/Admin/Productos/styles/producto.css';

const PrincipalProductoView = () => {
  return (
    <div className="container bg-productos">
      <BtnNuevoProducto />
      <div className="d-block d-sm-none">
        <ListProduct />
      </div>
      <div className="d-none d-sm-block">
        <ContenedorProductCard />
      </div>
    </div>
  );
};
export default PrincipalProductoView;
