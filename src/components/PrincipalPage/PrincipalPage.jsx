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
// import sandwichImage from "../../assets/sandwich.svg";
import papasImg from "../../assets/papasfritas.svg";
import pizzaImg from "../../assets/pizza.svg";
import sangucheImg from "../../assets/sandwichImg.png";
import { useSession } from "../../stores/useSession";
import { decodeJWT } from "../../utilities/decodeJWT";
import { getUserFn } from "../../api/usersApi";
import { useQuery } from "@tanstack/react-query";
import IsLoanding from "../Common/IsLoading/isLoading";

const PrincipalPage = () => {
  const { isLoggedIn } = useSession();
  const token = sessionStorage.getItem("token");
  const userId = token ? decodeJWT(token).user.id : null;

  const {
    data: user,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["user", userId],
    queryFn: () => getUserFn(userId),
    enabled: !!userId,
  });
  if (isLoading) return <IsLoanding />;
  if (isError) return <p>Error al cargar los datos del usuario.</p>;
  return (
    <>
      <Header user={user} />
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
            <a className=" btn btn-light" href="#SANGUCHES">
              Sandwiches
            </a>
            <a className=" btn btn-light" href="#MILANESAS">
              Milanesas
            </a>
            <a className=" btn btn-light" href="#HAMBURGUESAS">
              Hamburguesas
            </a>
            <a className=" btn btn-light" href="#PIZZAS">
              Pizzas
            </a>
            <a className=" btn btn-light" href="#PAPAS">
              Papas
            </a>
            <a className=" btn btn-light" href="#BEBIDAS">
              Bebidas
            </a>
          </div>
        </div>

        <ListProductClient />
      </div>
    </>
  );
};

export default PrincipalPage;
