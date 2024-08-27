import React from "react";
import { Link } from "react-router-dom";
import "./profile.css";

const NavigationButtons = () => {
  return (
    <div className="mt-5 d-flex flex-column align-items-center">
      <Link className="btn btn-danger mb-3" to="/user/login">
        Iniciar Sesión
      </Link>
      <Link className="btn btn-danger mb-3" to="/user/register">
        Registrarse
      </Link>
    </div>
  );
};

export default NavigationButtons;
