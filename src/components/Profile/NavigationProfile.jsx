import { Link } from "react-router-dom";
import { useSession } from "../../stores/useSession";
import "./profile.css";

const NavigationButtons = () => {
  const { isLoggedIn } = useSession();
  return (
    <div className="d-flex flex-column align-items-center mt-4 container">
      {!isLoggedIn && (
        <>
          <p className="color-red">Si ya tenes una cuenta</p>
          <Link className="btn btn-color-red mb-3 w-50" to="/users/login">
            Inicia Sesión
          </Link>
          <p className="color-red">O si no tenes una, </p>
          <Link className="btn btn-color-red mb-3 w-50" to="/users/register">
            Create una cuenta
          </Link>
        </>
      )}
    </div>
  );
};
export default NavigationButtons;
