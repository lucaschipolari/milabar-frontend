import { Link } from "react-router-dom";
import { useSession } from "../../stores/useSession";
import "./profile.css";

const NavigationButtons = () => {
  const { isLoggedIn } = useSession();
  return (
    <div className="d-flex flex-column align-items-center mt-4 container">
      {!isLoggedIn && (
        <>
          <p className="text-dark">Si ya tenes una cuenta</p>
          <Link className="btn btn-primary mb-3" to="/users/login">
            Inicia Sesión
          </Link>
          <p className="text-dark">O si no tenes una, </p>
          <Link className="btn btn-primary mb-3" to="/users/register">
            Crear cuenta
          </Link>
        </>
      )}
    </div>
  );
};
export default NavigationButtons;
