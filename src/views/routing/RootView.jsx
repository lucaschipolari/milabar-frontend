import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../components/Common/navBar/navbar";

const RootView = () => {
  const location = useLocation();

  // Mostrar el Header solo si no estamos en la página principal
  const showHeader = location.pathname !== "/";

  return (
    <>
      <main className="container my-3 flex-grow-1">
        <Outlet />
      </main>
      {showHeader && <Navbar />}
    </>
  );
};

export default RootView;
