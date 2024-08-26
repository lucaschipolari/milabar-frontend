import {
  faAddressBook,
  faHouse,
  faCartShopping,
  faUsersLine,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom"; // Importa useLocation
import NavItem from "./NavItem";
import "./style.css";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  const location = useLocation(); // Obtén la ruta actual
  const currentPath = location.pathname; // Ruta actual

  // Memoiza navItems para evitar recreaciones innecesarias
  const navItems = useMemo(
    () => [
      { icon: faHouse, text: "Home", to: "menu" },
      { icon: faAddressBook, text: "Contacto", to: "contact" },
      { icon: faUser, text: "Usuario", to: "profile" },
      { icon: faUsersLine, text: "Nosotros", to: "acerca-de-nosotros" },
      { icon: faHeart, text: "Favoritos", to: "*" },
    ],
    []
  );

  useEffect(() => {
    const index = navItems.findIndex((item) => `/${item.to}` === currentPath);
    setActiveIndex(index >= 0 ? index : -1);
  }, [currentPath, navItems]);

  const incrementCartCount = () => {
    setCartCount((prevCount) => prevCount + 1);
  };

  const isValidPage = navItems.some((item) => `/${item.to}` === currentPath);

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
      {isValidPage && <div className="indicator"></div>}
    </ul>
  );
};

export default Navbar;
