import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import UserList from "./UserList";
import { useQuery } from "@tanstack/react-query";
import "./styles/userCard.css";
import { Link } from "react-router-dom";

const UserManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("habilitados"); // puede ser 'habilitados' o 'deshabilitados'

  const fetchUsersFromDB = async () => {
    // Datos de ejemplo
    const exampleUsers = [
      {
        id: 1,
        name: "Juan Pérez",
        ordersCount: 5,
        status: "habilitados",
        pic: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Pruebas1.jpg",
      },
      {
        id: 2,
        name: "María López",
        ordersCount: 2,
        status: "habilitados",
        pic: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Pruebas1.jpg",
      },
      {
        id: 3,
        name: "Carlos García",
        ordersCount: 8,
        status: "deshabilitados",
        pic: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Pruebas1.jpg",
      },
      {
        id: 4,
        name: "Ana Fernández",
        ordersCount: 4,
        status: "habilitados",
        pic: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Pruebas1.jpg",
      },
      {
        id: 5,
        name: "Lucía Martínez",
        ordersCount: 7,
        status: "deshabilitados",
        pic: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Pruebas1.jpg",
      },
    ];

    // Simula una llamada a la base de datos con los datos de ejemplo
    return exampleUsers;
  };

  const {
    data: usersData = [], // default value to avoid undefined errors
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsersFromDB,
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

  const filteredUsers = usersData.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      user.status === filter
  );

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
              filter === "habilitados"
                ? "filter-button active"
                : "filter-button "
            }
            onClick={() => setFilter("habilitados")}
          >
            Habilitados
          </button>
          <button
            className={
              filter === "deshabilitados"
                ? "filter-button active"
                : "filter-button "
            }
            onClick={() => setFilter("deshabilitados")}
          >
            Deshabilitados
          </button>
        </div>

        <UserList filteredUsers={filteredUsers} />
      </div>
    </>
  );
};

export default UserManagement;
