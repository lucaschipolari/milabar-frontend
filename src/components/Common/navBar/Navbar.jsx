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
import NavItem from "./NavItem";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  const navItems = [
    { icon: faHouse, text: "Home", to: "#" },
    { icon: faAddressBook, text: "Contacto", to: "#" },
    { icon: faCartShopping, text: "Carrito", to: "#" },
    { icon: faUsersLine, text: "Nosotros", to: "#" },
    { icon: faHeart, text: "Favoritos", to: "#" },
  ];

  const incrementCartCount = () => {
    setCartCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="div-body">
      <ul className="navigation">
        {navItems.map((item, index) => (
          <NavItem
            key={index}
            item={item}
            index={index}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            cartCount={cartCount}
            incrementCartCount={incrementCartCount}
          />
        ))}
        <div className="indicator"></div>
      </ul>
    </div>
  );
};

export default Navbar;
