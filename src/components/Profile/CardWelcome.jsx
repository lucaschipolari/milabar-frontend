import React, { useState } from "react";
import ShowData from "./ShowData";
import Swal from "sweetalert2";
import { useSession } from "../../stores/useSession.js";
import { useNavigate } from "react-router-dom";
import "./profile.css";

const CardWelcome = ({ user }) => {
  const navigate = useNavigate();
  const { logout } = useSession();
  const [activeSection, setActiveSection] = useState(null);

  const handleLogout = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡Cerrar sesión terminará tu sesión actual!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, cerrar sesión",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
        navigate("/");
      }
    });
  };

  const handleSelectSection = (section) => {
    setActiveSection((prev) => (prev === section ? null : section));
    onSelectSection(section);
  };
  return (
    <div className="row bg-blue-color rounded-4 my-3">
      <div className="col-12 col-md-2 content-img my-3">
        <img
          src={user.data.avatar}
          alt={user.data.username}
          className="w-100 object-fit-cover"
        />
      </div>
      <div className="col-12 col-md-9 d-flex flex-column justify-content-center align-items-center">
        <h6 className="text-center fs-3 all-text-color ">
          ¡Bienvenido, {user.data.username}!
        </h6>
        <p className="text-center all-text-color">¿Qué deseas realizar hoy?</p>
        <div className="d-flex justify-content-around align-items-center gap-3 mb-3">
          <button
            className="rounded-2 custom-button custom-button-show-data w-100"
            onClick={() => handleSelectSection("datos")}
          >
            Ver mis datos
          </button>

          <button
            className="rounded-2 py-3 custom-button custom-button-logout w-100"
            onClick={() => handleLogout()}
          >
            Cerrar sesión
          </button>
        </div>
      </div>
        {activeSection === "datos" && <ShowData section="datos" user={user} />}
    </div>
  );
};

export default CardWelcome;

