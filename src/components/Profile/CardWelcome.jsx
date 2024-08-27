import PropTypes from "prop-types";

import "./profile.css";

const CardWelcome = ({ user }) => {
  return (
    <div className="card my-4 custom-card">
      <div className="row">
        <div className="col-12 col-md-3 content-img">
          <img
            src={user.data.avatar}
            alt={user.data.username}
            className="w-100 object-fit-cover p-1"
          />
        </div>
        <div className="col-12 col-md-9 d-flex flex-column align-items-center justify-content-center">
          <h6 className="text-center fs-3 mt-2 text-white">
            ¡Bienvenido, {user.data.username}!
          </h6>
          <p className="text-center text-white">¿Qué deseas realizar hoy?</p>
        </div>
      </div>
    </div>
  );
};

export default CardWelcome;

CardWelcome.propTypes = {};
