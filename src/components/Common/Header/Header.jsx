import { useState } from "react";
import "./Header.css"; // Importa el archivo CSS para estilos
import { faCartShopping, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";
import PropTypes from "prop-types";
import CartModal from "../../CartModal/CartModal";
import { useSession } from "../../../stores/useSession";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { logout, isLoggedIn } = useSession();
  const { user } = props; // Obtén el usuario desde los props
  const [cartCount, setCartCount] = useState(0);
  const [isCartModalVisible, setCartModalVisible] = useState(false);

  const incrementCart = () => {
    setCartCount(cartCount + 1);
  };

  const openCartModal = () => {
    setCartModalVisible(true);
  };

  const closeCartModal = () => {
    setCartModalVisible(false);
  };

  const handleLogout = async () => {
    const action = await Swal.fire({
      icon: "question",
      title: "Atención",
      text: "¿Está seguro que desea cerrar sesion?",
      confirmButtonText: "Si, salir",
      cancelButtonText: "No, cancelar",
      showCancelButton: true,
    });

    if (action.isConfirmed) {
      logout();
    }
  };

  return (
    <header className="header">
      <div className="">
        <div className="icons">
          <div className="">
            {!isLoggedIn && (
              <div>
                <Link to="users/login" className="btn btn-red mx-1">
                  Iniciar Sesion
                </Link>
                <Link to="users/register" className="btn btn-gray">
                  Registrarse
                </Link>
              </div>
            )}
            {isLoggedIn && (
              <div className="d-flex align-content-center justify-content-center">
                {" "}
                <div className="avatar-icon">
                  <img
                    src={user.avatar}
                    alt={user.nombre}
                    className="avatar-icon-user"
                  />{" "}
                </div>
                <button
                  className="btn btn-light mx-1 rounded "
                  onClick={handleLogout}
                >
                  <FontAwesomeIcon icon={faSignOut} />
                </button>
              </div>
            )}
          </div>
          <div className="basket-icon">
            <button type="button" className="btn btn-light cart-button">
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartCount}
                <span className="visually-hidden">unread messages</span>
              </span>
              <FontAwesomeIcon icon={faCartShopping} />
            </button>
          </div>
        </div>
      </div>
      <h1>
        <div className="title">
          <span>M</span>
          <span>I</span>
          <span>L</span>
          <span>A</span>
          <span>B</span>
          <span>A</span>
          <span>R</span>
        </div>{" "}
        <br /> <span className="subtitle">Milanesas enserio.</span>
      </h1>

      <CartModal visible={isCartModalVisible} onHide={closeCartModal} />
    </header>
  );
};

export default Header;

Header.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
  }),
};
