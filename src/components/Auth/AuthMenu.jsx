import React, { useState } from 'react';
import { TabMenu } from 'primereact/tabmenu';
import './auth.css'; // Asegúrate de que el archivo CSS esté importado

const AuthMenu = ({ onTabChange }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    { label: 'Inicia sesión', icon: 'pi pi-sign-in' },
    { label: 'Crear cuenta', icon: 'pi pi-user-plus' }
  ];

  const handleTabChange = (e) => {
    setActiveIndex(e.index);
    if (onTabChange) {
      onTabChange(e.index); 
    }
  };

  return (
    <div className="auth-menu-container rounded-4">
      <TabMenu model={items} activeIndex={activeIndex} onTabChange={handleTabChange} />
    </div>
  );
};

export default AuthMenu;
