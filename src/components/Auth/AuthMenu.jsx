import React, { useState } from "react";
import { TabMenu } from "primereact/tabmenu";
import "./auth.css";

const AuthMenu = ({ onTabChange }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [{ label: "Iniciar sesión" }, { label: "Crear cuenta" }];

  const handleTabChange = (e) => {
    setActiveIndex(e.index);
    if (onTabChange) {
      onTabChange(e.index);
    }
  };

  return (
    <TabMenu
      className="auth-tab-menu custom-tab-menu "
      model={items}
      activeIndex={activeIndex}
      onTabChange={handleTabChange}
    />
  );
};

export default AuthMenu;
