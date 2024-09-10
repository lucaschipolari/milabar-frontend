import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faSignOut } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import PropTypes from "prop-types";
import CartModal from "../../CartModal/CartModal";
import { useCartStore } from "../../../stores/useCartStore";
import { useSession } from "../../../stores/useSession";
import "./Header.css";

const Header = ({ userData }) => {
  const { user, logout, isLoggedIn } = useSession();
  const [isCartModalVisible, setCartModalVisible] = useState(false);

  const cartCount = useCartStore((state) =>
    state.products.reduce((acc, product) => acc + product.quantity, 0)
  );

  const handleLogout = async () => {
    const result = await Swal.fire({
      icon: "question",
      title: "Atención",
      text: "¿Está seguro que desea cerrar sesión?",
      confirmButtonText: "Si, salir",
      cancelButtonText: "No, cancelar",
      showCancelButton: true,
    });

    if (result.isConfirmed) {
      logout();
    }
  };

  const renderAuthButtons = useMemo(() => {
    if (!isLoggedIn) {
      return (
        <div>
          <Link to="/user/login" className="btn btn-red mx-1">
            Iniciar Sesión
          </Link>
          <Link to="/user/register" className="btn btn-gray">
            Registrarse
          </Link>
        </div>
      );
    }

    return (
      <div className="d-flex align-items-center justify-content-center">
        <div className="avatar-icon">
          <img
            src={userData?.data.avatar}
            alt={userData?.data.nombre}
            className="avatar-icon-user"
          />
        </div>
        <button className="btn btn-light mx-1 rounded" onClick={handleLogout}>
          <FontAwesomeIcon icon={faSignOut} />
        </button>
        {user?.roles.some(
          (role) => role.name === "admin" || role.name === "superadmin"
        ) && (
          <Link to="/admin" className="btn btn-secondary">
            Administración
          </Link>
        )}
      </div>
    );
  }, [isLoggedIn, userData, logout]);

  return (
    <header className="header">
      <div className="icons">
        {renderAuthButtons}
        <div className="basket-icon">
          <button
            type="button"
            className="btn btn-light cart-button position-relative"
            onClick={() => setCartModalVisible(true)}
          >
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cartCount}
              <span className="visually-hidden">items en el carrito</span>
            </span>
            <FontAwesomeIcon icon={faCartShopping} />
          </button>
        </div>
      </div>
      <h1>
        <div className="title">
          {"MILABAR".split("").map((letter, index) => (
            <span key={index}>{letter}</span>
          ))}
        </div>
        <br />
        <span className="subtitle">Milanesas enserio.</span>
      </h1>
      <CartModal
        visible={isCartModalVisible}
        onHide={() => setCartModalVisible(false)}
      />
    </header>
  );
};

Header.propTypes = {
  userData: PropTypes.shape({
    data: PropTypes.shape({
      avatar: PropTypes.string,
      nombre: PropTypes.string,
      roles: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
        })
      ),
    }),
  }),
};

export default Header;
