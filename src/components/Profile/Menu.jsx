import React, { useState } from 'react';
import ShowData from './ShowData';

const Menu = ({ user, onSelectSection }) => {
  const [activeSection, setActiveSection] = useState(null);

  const handleSelectSection = (section) => {
    setActiveSection((prev) => (prev === section ? null : section));
    onSelectSection(section);
  };

  return (
    <div className="container">
      <div className="row g-2">
        <button
          className="p-2 col-12 col-md-3 rounded-2 "
          onClick={() => handleSelectSection('datos')}
        >
          <span className="pi pi-user mr-2"></span>
          Mis datos
        </button>
        {activeSection === 'datos' && (
            <ShowData section="datos" user={user}/>
        )}
        <button
          className="p-2 col-12 col-md-3 rounded-2"
          onClick={() => handleSelectSection('metodos')}
        >
          <span className="pi pi-credit-card mr-2"></span>
          Mis métodos de pago
        </button>
        {activeSection === 'metodos' && (
          <div className="p-4">
          </div>
        )}
        <button
          className="p-2 col-12 col-md-3 rounded-2"
          onClick={() => handleSelectSection('pedidos')}
        >
          <span className="pi pi-shopping-cart mr-2"></span>
          Mis pedidos
        </button>
        {activeSection === 'pedidos' && (
          <div className="p-4">
          </div>
        )}
        <button
          className="p-2 col-12 col-md-3 rounded-2"
          onClick={() => handleSelectSection('favoritos')}
        >
          <span className="pi pi-star mr-2"></span>
          Mis favoritos
        </button>
        {activeSection === 'favoritos' && (
          <div className="p-4">
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
