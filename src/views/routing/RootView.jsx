import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../components/Common/navBar/navbar";
import HeaderUsuario from "../../components/Common/Header/HeaderUsuario";

const RootView = () => {
  const location = useLocation();

  // Mostrar el Header solo si no estamos en la página principal
  const showHeader = location.pathname !== "/";
  const user = {};
  return (
    <>
      <HeaderUsuario user={user} />
      <main className="container">
        <Outlet />
      </main>
      {showHeader && <Navbar />}
    </>
  );
};

export default RootView;
