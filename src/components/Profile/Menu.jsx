import React, { useState } from "react";
import ShowData from "./ShowData";
import Swal from "sweetalert2";
import { useSession } from "../../stores/useSession.js";
import { useNavigate } from "react-router-dom";

const Menu = ({ user, onSelectSection }) => {
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
    <div className="container w-100">
      <div className="row g-4">
        <div className="col-12">
          <button
            className="rounded-2 custom-button custom-button-show-data w-100"
            onClick={() => handleSelectSection("datos")}
          >
            Ver mis datos
          </button>
          {activeSection === "datos" && (
            <div className="mt-3">
              <ShowData section="datos" user={user} />
            </div>
          )}
        </div>
        <div className="col-12">
          <button
            className="rounded-2 py-3 custom-button custom-button-logout w-100"
            onClick={() => handleLogout()}
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
