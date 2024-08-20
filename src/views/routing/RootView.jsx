import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../components/Common/navBar/navbar";
import '../../components/Admin/Productos/styles/producto.css';

const RootView = () => {
  const location = useLocation();

  // Mostrar el Header solo si no estamos en la página principal
  const showHeader = location.pathname !== "/";

  return (
    <div className="bg-productos">
      <main className="container my-3 flex-grow-1">
        <Outlet />
      </main>
      {showHeader && <Navbar />}
    </div>
  );
};

export default RootView;
