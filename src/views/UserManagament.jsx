import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import UserList from "../components/Admin/Users/UserList";
import { useQuery } from "@tanstack/react-query";
import "../components/Admin/Users/styles/userCard.css";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { getUsersFn } from "../api/usersApi"; 
const UserManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("enabled"); 
  const [isAscending, setIsAscending] = useState(true);

  const {
    data: dataUsers = { data: [] },
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["users", filter], 
    queryFn: () => getUsersFn(filter), 
    onError: (e) => {
      toast.error(`Error fetching users: ${e.message}`);
    },
  });

  const handleSort = () => {
    setIsAscending(!isAscending); 
  };

  const sortedUsers = [...dataUsers.data].sort((a, b) => {
    if (isAscending) {
      return a.username.localeCompare(b.username);
    } else {
      return b.username.localeCompare(a.username);
    }
  });

  if (isLoading) {
    return <div>Cargando</div>;
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

  const filteredUsers = sortedUsers.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Link to={-1}>
        <button className="btn btn-primary m-3">
          <i className="fas fa-arrow-left"></i> Regresar
        </button>
      </Link>
      <div className="user-management">
        <header>
          <h1 className="text-dark mb-5">Alta y baja de usuarios</h1>
        </header>

        <div className="search-bar d-flex">
          <input
            type="text"
            placeholder="Buscar usuario..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button className="btn btn-secondary mr-5">
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <button className="btn btn-danger mx-1" onClick={handleSort}>
            {isAscending ? "Ordenar Descendente" : "Ordenar Ascendente"}
          </button>
        </div>

        <div className="filter">
          <button
            className={
              filter === "enabled" ? "filter-button active" : "filter-button"
            }
            onClick={() => setFilter("enabled")}
          >
            Habilitado
          </button>
          <button
            className={
              filter === "disabled" ? "filter-button active" : "filter-button"
            }
            onClick={() => setFilter("disabled")}
          >
            Deshabilitado
          </button>
        </div>

        <UserList filteredUsers={filteredUsers} filter={filter} />
      </div>
    </>
  );
};

export default UserManagement;
