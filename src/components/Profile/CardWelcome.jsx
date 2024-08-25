import PropTypes from "prop-types";

import "./profile.css";

const CardWelcome = ({ user }) => {
  return (
    <div className="card my-4">
      <div className="row">
        <div className="col-12 col-md-3 content-img d-flex justify-content-center">
          <img
            src={user.data.avatar}
            alt={user.data.username}
            className="h-100 w-100 img-fluid object-fit-cover"
          />
        </div>
        <div className="col-12 col-md-9 d-flex flex-column align-items-center justify-content-center">
  <h6 className="text-center fs-3">
    ¡Bienvenido, {user.data.username}!
  </h6>
  <p className="text-center">¿Qué deseas realizar hoy?</p>
</div>

      </div>
    </div>
  );
};

export default CardWelcome;

CardWelcome.propTypes = {
};
