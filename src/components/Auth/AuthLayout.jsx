import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import './auth.css';

const AuthLayout = () => {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Establecer estado activo según la ruta actual
    setIsActive(location.pathname.includes('register'));
  }, [location.pathname]);

  return (
    <div className={`container-auth ${isActive ? 'active' : ''}`}>
      <div className={`form-container sign-in ${!isActive ? 'active' : ''}`}>
        <LoginPage />
      </div>
      <div className={`form-container sign-up ${isActive ? 'active' : ''}`}>
        <RegisterPage />
      </div>
      <div className="toggle-container">
        <div className="toggle-panel toggle-left">
          <h1>¡Bienvenido a MilaBar!</h1>
          <p>Ingresa con tu cuenta.</p>
          <button onClick={() => setIsActive(false)}>
            Iniciar sesión
          </button>
        </div>
        <div className="toggle-panel toggle-right">
          <h1>¡Bienvenido a MilaBar!</h1>
          <p>Regístrate para ver tus pedidos.</p>
          <button onClick={() => setIsActive(true)}>
            Crear cuenta
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
