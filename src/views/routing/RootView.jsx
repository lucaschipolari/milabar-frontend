import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../components/Common/navBar/navbar";
import Header from "../../components/Common/Header/Header";

const RootView = () => {
  const location = useLocation();

  // Mostrar el Header solo si no estamos en la página principal
  const showHeader = location.pathname !== "/";
  const user = {};
  return (
    <>
      <Header />
      <main className="container">
        <Outlet />
      </main>
      {showHeader && <Navbar />}
    </>
  );
};

export default RootView;
