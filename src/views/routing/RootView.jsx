import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../components/Common/navBar/navbar";
import HeaderUsuario from "../../components/Common/Header/HeaderUsuario";

const RootView = () => {
  const location = useLocation();

  // Mostrar el Header solo si no estamos en la página principal
  const showHeader = location.pathname !== "/";
  const user = {
    name: "John Doe",
    avatar: "https://via.placeholder.com/150",
    isAdmin: true,
  };
  return (
    <>
      <HeaderUsuario user={user} />
      <main className="container my-5">
        <Outlet />
      </main>
      {showHeader && <Navbar />}
    </>
  );
};

export default RootView;
