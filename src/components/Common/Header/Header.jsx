import { useState } from "react";
import "./Header.css"; // Importa el archivo CSS para estilos
import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header = () => {
  const [cartCount, setCartCount] = useState(0);

  const incrementCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <header className="header">
      <div className="icons">
        <div className="avatar-icon">
          <img src="logo.png" alt="Logo" />
        </div>
        <div className="basket-icon">
          <button type="button" className="btn btn-light position-relative">
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
      <div className="container-input">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
