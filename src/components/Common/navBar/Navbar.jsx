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
    { icon: faHouse, text: "Home", to: "menu" },
    { icon: faAddressBook, text: "Contacto", to: "contact" },
    { icon: faCartShopping, text: "Carrito", to: "carrito" },
    { icon: faUsersLine, text: "Nosotros", to: "acerca-de-nosotros" },
    { icon: faHeart, text: "Favoritos", to: "#" },
  ];

  const incrementCartCount = () => {
    setCartCount((prevCount) => prevCount + 1);
  };

  return (
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
  );
};

export default Navbar;
