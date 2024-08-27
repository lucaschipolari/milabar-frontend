import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../../components/Common/navBar/Navbar";
import "../../components/Admin/Product/styles/producto.css";
import "../../styles/principalStyles.css";

const RootView = () => {
  const location = useLocation();

  // Mostrar el Header solo si no estamos en la página principal
  const showHeader = location.pathname !== "/";

  return (
    <div className="bg-productos">
      {!showHeader ? (
        <main className="flex-grow-1">
          <Outlet />
        </main>
      ) : (
        <main className="main-content flex-grow-1">
          <Outlet />
        </main>
      )}{" "}
      {showHeader && <NavBar />}
    </div>
  );
};

export default RootView;
