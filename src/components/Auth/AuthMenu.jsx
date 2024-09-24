import React from "react";
import { useNavigate } from "react-router-dom";
import "./auth.css";

const AuthMenu = (props) => {
  const {onLoginChange, onRegisterChange}=props;
  const navigate = useNavigate();

  const handleLogin = () => {
    onLoginChange(true);
    onRegisterChange(false);
    navigate("/user/login");
  };

  const handleRegister = () => {
    onLoginChange(false);
    onRegisterChange(true);
    navigate("/user/register");
  };

  return (
    <div className="bg-red-color d-flex justify-content-center align-items-center">
      <button className="btn w-50 all-text-color" onClick={handleLogin}>
        Iniciar sesión
      </button>
      <button className="btn w-50 all-text-color" onClick={handleRegister}>
        Crear cuenta
      </button>
    </div>
  );
};

export default AuthMenu;
