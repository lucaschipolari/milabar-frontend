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

import { Dialog } from "primereact/dialog";
import ShoppingCartView from "../../../views/ShoppingCartView";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [showCart, setShowCart] = useState(false);

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

  const handleNavItemClick = (index, to) => {
    setActiveIndex(index);
    if (to === "carrito") {
      setShowCart(true);
    } else {
      setShowCart(false);
    }
  };

  const closeCart = () => {
    setShowCart(false);
  };

  return (
    <>
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
            handleNavItemClick={handleNavItemClick}
          />
        ))}
        <div className="indicator"></div>
      </ul>
      <div className="modal-container">
        <Dialog
          position="bottom"
          visible={showCart}
          className="cart-dialog"
          onHide={closeCart}
          draggable={false}
          resizable={false}
          breakpoints={{ "960px": "75vw", "641px": "100vw" }}
        >
          <ShoppingCartView />
        </Dialog>
      </div>
    </>
  );
};

export default Navbar;
