import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faHouse,
  faCartShopping,
  faUsersLine,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

import "./style.css";
import { useState } from "react";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cartCount, setCartCount] = useState(0); // Estado para el contador del carrito

  const navItems = [
    { icon: faHouse, text: "Home", href: "#" },
    { icon: faAddressBook, text: "Contacto", href: "#" },
    { icon: faCartShopping, text: "Carrito", href: "#" },
    { icon: faUsersLine, text: "Nosotros", href: "#" },
    { icon: faHeart, text: "Favoritos", href: "#" },
  ];

  // Función para incrementar el contador del carrito (simulación)
  const incrementCartCount = () => {
    setCartCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="div-body">
      <ul className="navigation">
        {navItems.map((item, index) => (
          <li
            key={index}
            className={`list ${index === activeIndex ? "active" : ""}`}
            onClick={() => {
              setActiveIndex(index);
              if (index === 2) incrementCartCount(); // Incrementa el contador al hacer clic en el carrito
            }}
          >
            <a href={item.href}>
              <span className="icon-container">
                <FontAwesomeIcon icon={item.icon} className="icon" />
                {index === 2 && cartCount > 0 && (
                  <span className="cart-count">{cartCount}</span>
                )}
              </span>
              <span className="text">{item.text}</span>
            </a>
          </li>
        ))}
        <div className="indicator"></div>
      </ul>
    </div>
  );
};

export default Navbar;
