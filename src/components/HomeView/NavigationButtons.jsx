import { Link } from "react-router-dom";

const NavigationButtons = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <Link className="btn btn-danger my-3" to="menu">
        Menu
      </Link>
      <Link className="btn btn-danger mb-3" to="#">
        Iniciar Sesión
      </Link>
      <Link className="btn btn-danger mb-3" to="#">
        Registrarse
      </Link>
    </div>
  );
};
export default NavigationButtons;
