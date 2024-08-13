import PropTypes from "prop-types";

import "./styles/userCard.css";
import { Link } from "react-router-dom";

const UserCard = (props) => {
  const { user } = props;
  return (
    <div className="card mb-3 card-user">
      <div className="d-flex">
        <div className="col-md-4 col-4">
          <img className="user-pic" src={user.pic} alt={user.name} />
        </div>
        <div className="col-md-8 col-8">
          <div className="card-body">
            <h5 className="card-title">{user.name}</h5>
            <p className="card-text">Nro de pedidos: {user.ordersCount}</p>
            {user.status === "habilitados" && (
              <button className="badge bg-danger">Deshabilitar</button>
            )}
            {user.status === "deshabilitados" && (
              <button className="badge bg-success">Habilitar</button>
            )}
            <Link className="badge bg-primary">Más info</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    ordersCount: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    pic: PropTypes.string,
  }).isRequired,
};

export default UserCard;
