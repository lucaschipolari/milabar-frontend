import { Link } from "react-router-dom";
import { useSession } from "../../stores/useSession";
import "./styles/backgroundImage.css";

const NavigationButtons = () => {
  const { isLoggedIn } = useSession();
  return (
    <div className="d-flex flex-column align-items-center">
      <Link className="btn btn-color-red my-3 w-100" to="menu">
        Menu
      </Link>
      {!isLoggedIn && (
        <>
          <Link className="btn btn-color-red mb-3 w-100" to="/users/login">
            Iniciar Sesión
          </Link>
          <Link className="btn btn-color-red mb-3 w-100" to="/users/register">
            Registrarse
          </Link>
        </>
      )}
    </div>
  );
};
export default NavigationButtons;
