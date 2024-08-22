import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../../assets/logo1.png";
import { Link } from "react-router-dom";
import "./stylesHeader.css";

const HeaderUsuario = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="milabar" className="img-logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {user ? (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle d-flex align-items-center"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={user.avatar}
                    alt="Avatar"
                    className="rounded-circle me-2"
                    width="30"
                    height="30"
                  />
                  {user.name}
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end shadow"
                  aria-labelledby="navbarDropdown"
                >
                  {user.isAdmin && (
                    <li>
                      <a className="dropdown-item" href="#">
                        Admin
                      </a>
                    </li>
                  )}
                  <li>
                    <a className="dropdown-item" href="#">
                      Configuración
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Cerrar Sesión
                    </a>
                  </li>
                </ul>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Iniciar Sesión
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Registrarse
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

HeaderUsuario.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    avatar: PropTypes.string,
    isAdmin: PropTypes.bool,
  }),
};

HeaderUsuario.defaultProps = {
  user: null,
};

export default HeaderUsuario;
