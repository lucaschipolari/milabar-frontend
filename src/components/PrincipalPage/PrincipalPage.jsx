import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../Common/Header/Header";
import ListProductClient from "../ListProductClient/ListProductClient";
import "../Common/Header/Header.css";

const PrincipalPage = () => {
  const user = {
    name: "Administrador",
    email: "admin@milabar.com",
    avatar:
      "https://th.bing.com/th/id/R.a2d06f861d7d0f6f10bc91045e75fc8a?rik=aqfHmkW5luq4Yg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-SMOzOO7Zhow%2fUVxEIdcbVHI%2fAAAAAAAAAfQ%2f7b9udp6r5kI%2fs1600%2fanimales-leon-sentado-selva-amazonas-pelo-felinos.jpg&ehk=ahRNt9vNuW29v6SkemhFLJlljDdxFTIXi8yKimrSIjI%3d&risl=&pid=ImgRaw&r=0",
    role: "ADMIN",
    token: "admin-token",
    isAuthenticated: true,
    isAdmin: true,
    permissions: ["PRODUCT_CREATE", "PRODUCT_UPDATE", "PRODUCT_DELETE"],
  };
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
            <a className="btn btn-secondary" href="#SANGUCHES">
              Sanguches
            </a>
            <a className="btn btn-secondary" href="#MILANESAS">
              Milanesas
            </a>
            <a className="btn btn-secondary" href="#HAMBURGUESAS">
              Hamburguesas
            </a>
            <a className="btn btn-secondary" href="#PIZZAS">
              Pizzas
            </a>
            <a className="btn btn-secondary" href="#PAPAS">
              Papas
            </a>
            <a className="btn btn-secondary" href="#BEBIDAS">
              Bebidas
            </a>
          </div>
        </div>

        <div className="mt-5">
          <div className="text-center">
            <h2 id="SANGUCHES">Sanguches</h2>
          </div>
          <ListProductClient categoria="SANGUCHE" />

          <div className="text-center mt-5">
            <h2 id="MILANESAS">Milanesas</h2>
          </div>
          <ListProductClient categoria="MILANESA" />

          <div className="text-center mt-5">
            <h2 id="HAMBURGUESAS">Hamburguesas</h2>
          </div>
          <ListProductClient categoria="HAMBURGUESA" />

          <div className="text-center mt-5">
            <h2 id="PIZZAS">Pizzas</h2>
          </div>
          <ListProductClient categoria="PIZZA" />

          <div className="text-center mt-5">
            <h2 id="PAPAS">Papas</h2>
          </div>
          <ListProductClient categoria="PAPA" />

          <div className="text-center mt-5">
            <h2 id="BEBIDAS">Bebidas</h2>
          </div>
          <ListProductClient categoria="BEBIDA" />
        </div>
      </div>
    </>
  );
};

export default PrincipalPage;
