import TablaProductos from "../components/Admin/Product/Table/TablaProductos";
import BtnNuevoProducto from "../components/Admin/Product/BtnNuevoProducto";
import ListProduct from "../components/Admin/Product/List/ListProduct";
import ContenedorProductCard from "../components/Admin/Product/List/ContenedorCardProduct";

import '../components/Admin/Product/styles/producto.css';

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
