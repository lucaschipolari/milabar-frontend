import React, { useState } from 'react';
import ShowData from './ShowData';
import Swal from 'sweetalert2';
import { useSession } from '../../stores/useSession.js'; 
import { useNavigate } from 'react-router-dom';

const Menu = ({ user, onSelectSection }) => {
  const navigate = useNavigate();
  const { logout } = useSession();
  const [activeSection, setActiveSection] = useState(null);
  const handleLogout = () => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¡Cerrar sesión terminará tu sesión actual!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, cerrar sesión',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
          navigate('/');
      }
    });
  };
  const handleSelectSection = (section) => {
    setActiveSection((prev) => (prev === section ? null : section));
    onSelectSection(section);
  };

  return (
    <div className="container">
      <div className="row">
        <button
          className="p-2 col-12 col-md-2 rounded-2 "
          onClick={() => handleSelectSection('datos')}
        >
          <span className="pi pi-user mr-2"></span>
          Mis datos
        </button>
        {activeSection === 'datos' && (
            <ShowData section="datos" user={user}/>
        )}
        <button
          className="p-2 col-12 col-md-2 rounded-2"
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
          className="p-2 col-12 col-md-2 rounded-2"
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
          className="p-2 col-12 col-md-2 rounded-2"
          onClick={() => handleSelectSection('favoritos')}
        >
          <span className="pi pi-star mr-2"></span>
          Mis favoritos
        </button>
        {activeSection === 'favoritos' && (
          <div className="p-4">
          </div>
        )}
        <button
          className="bg-danger p-2 col-12 col-md-4 rounded-2"
          onClick={() => handleLogout()}
        >
          <span className="pi pi-star mr-2"></span>
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default Menu;
