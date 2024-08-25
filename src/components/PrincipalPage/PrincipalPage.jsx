import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../Common/Header/Header";
import ListProductClient from "../ListProductClient/ListProductClient";

import "../Common/Header/Header.css";

const PrincipalPage = () => {
  return (
    <>
      <Header />
      <div className="mb-5">
        <div className="container-options">
          <div className="container-input-search mt-2">
            <div className="container-input">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
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
            <button className="btn btn-secondary">General</button>
            <button className="btn btn-secondary">Milas</button>
            <button className="btn btn-secondary">Hamburguesas</button>
            <button className="btn btn-secondary">Pizzas</button>
            <button className="btn btn-secondary">Papas</button>
          </div>
        </div>
        <ListProductClient></ListProductClient>
        <ListProductClient></ListProductClient>
        <ListProductClient></ListProductClient>
        <ListProductClient></ListProductClient>
      </div>
    </>
  );
};

export default PrincipalPage;
