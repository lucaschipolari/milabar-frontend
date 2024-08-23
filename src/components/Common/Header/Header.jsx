import { useState } from "react";
import "./Header.css"; // Importa el archivo CSS para estilos
import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TabMenu from "../../TabMenu/TabMenu";

const Header = () => {
  const [cartCount, setCartCount] = useState(0);

  const incrementCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <header className="header">
      <div className="">
        <div className="icons">
          <div className="avatar-icon">
            <img src="logo.png" alt="Logo" />
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
      </div>
    </header>
  );
};

export default Header;
