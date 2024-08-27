import React from "react";
import { Link } from "react-router-dom";
import "../components/NotFound/NotFound.css";

const NotFound = () => {
  return (
    <div className="body-error fullScreenContainer">
      <main>
        <section className="error-container">
          <span>
            <span>4</span>
          </span>
          <span>0</span>
          <span>
            <span>4</span>
          </span>
        </section>
        <div className="link-container">
          <Link to="/" className="btn volver-inicio">
            Volver al inicio
          </Link>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
