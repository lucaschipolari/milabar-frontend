import { useState } from "react";
import "./Header.css"; // Importa el archivo CSS para estilos
import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CartModal from "../../CartModal/CartModal";

const Header = () => {
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

  return (
    <header className="header">
      <div className="icons">
        <div className="avatar-icon">
          <img src="logo.png" alt="Logo" />
        </div>
        <div className="basket-icon">
          <button
            type="button"
            className="btn btn-light position-relative"
            onClick={openCartModal}
          >
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cartCount}
              <span className="visually-hidden">unread messages</span>
            </span>
            <FontAwesomeIcon icon={faCartShopping} />
          </button>
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
