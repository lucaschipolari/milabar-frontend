import {
  faBurger,
  faMagnifyingGlass,
  faPizzaSlice,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../Common/Header/Header";
import ListProductClient from "../ListProductClient/ListProductClient";
import "../Common/Header/Header.css";
import "./styles.css";
import papasImg from "../../assets/papasfritas.svg";
import pizzaImg from "../../assets/pizza.svg";
import sangucheImg from "../../assets/sandwichImg.png";
import { useSession } from "../../stores/useSession";
import { decodeJWT } from "../../utilities/decodeJWT";
import { getUserFn } from "../../api/usersApi";
import { useQuery } from "@tanstack/react-query";
import IsLoading from "../Common/IsLoading/IsLoading";
import { useState } from "react";

const PrincipalPage = () => {
  const { user, isLoggedIn } = useSession();
  const token = sessionStorage.getItem("token");
  const userId = token ? decodeJWT(token).user.id : null;

  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: userData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["user", userId],
    queryFn: () => getUserFn(userId),
    enabled: !!userId,
  });

  const categorias = ["SANGUCHE", "GASEOSA", "PIZZA", "HAMBURGUESA"];

  if (isLoading) return <IsLoading />;
  if (isError) return <p>Error al cargar los datos del usuario.</p>;

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <Header userData={userData} />
      <div className="mb-5">
        <div className="container-options">
          <div className="container-input-search mt-2">
            <div className="container-input">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Buscar..."
                  aria-label="Buscar"
                  aria-describedby="button-addon2"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-4 d-flex flex-wrap gap-1 justify-content-center ">
            <a className="btn btn-light" href="#SANGUCHE">
              Sandwiches
            </a>
            <a className="btn btn-light" href="#HAMBURGUESA">
              Hamburguesas
            </a>
            <a className="btn btn-light" href="#PIZZA">
              Pizzas
            </a>
            <a className="btn btn-light" href="#GASEOSA">
              Bebidas
            </a>
          </div>
        </div>

        {categorias.map((categoria, index) => (
          <ListProductClient
            key={index}
            title={categoria}
            id={categoria}
            searchTerm={searchTerm}
          />
        ))}
      </div>
    </>
  );
};

export default PrincipalPage;
