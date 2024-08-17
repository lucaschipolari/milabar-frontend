import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import UserList from "../components/Admin/Users/UserList";
import { useQuery } from "@tanstack/react-query";
import "./styles/userCard.css";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { getUsersFn } from "../api/usersApi"; // Asegúrate de importar la función correctamente

const UserManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("enabled"); // puede ser 'habilitado' o 'deshabilitado'

  const {
    data: dataUsers = { data: [] },
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["users", filter], // La clave de la consulta incluye el filtro
    queryFn: () => getUsersFn(filter), // Pasar el filtro a la función `getUsersFn`
    onError: (e) => {
      toast.error(`Error fetching users: ${e.message}`);
    },
  });

  if (isLoading) {
    return (
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="alert alert-danger mt-3">
        Ocurrió un error cargando los datos de los usuarios.
      </div>
    );
  }

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <Link className="btn btn-secondary mb-3" to={-1}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </Link>
      <div className="user-management">
        <header>
          <h1>Alta y baja de usuarios</h1>
        </header>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Buscar usuario..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button>
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <button>Ordenar por...</button>
        </div>

        <div className="filter">
          <button
            className={
              filter === "enabled" ? "filter-button active" : "filter-button "
            }
            onClick={() => setFilter("enabled")}
          >
            Habilitado
          </button>
          <button
            className={
              filter === "disabled" ? "filter-button active" : "filter-button "
            }
            onClick={() => setFilter("disabled")}
          >
            Deshabilitado
          </button>
        </div>

        <UserList filteredUsers={dataUsers.data} filter={filter} />
      </div>
    </>
  );
};

export default UserManagement;
