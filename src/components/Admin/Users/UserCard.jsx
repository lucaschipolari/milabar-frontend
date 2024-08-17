import PropTypes from "prop-types";

import "./styles/userCard.css";
import { Link } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { putUserFn } from "../../../api/usersApi";
import { toast } from "sonner";

const UserCard = (props) => {
  const { user, filter } = props;

  const queryClient = useQueryClient();
  const { mutate: putUser } = useMutation({
    mutationFn: (isEnabled) => putUserFn({ id: user.id, isEnabled }),
    onSuccess: () => {
      toast.success("Usuario actualizado correctamente");
      queryClient.invalidateQueries(["users", filter]); // Forzar un refresco de la lista de usuarios
    },
    onError: (e) => {
      toast.error(`Error actualizando usuario: ${e.message}`);
    },
  });
  const handleToggleStatus = () => {
    console.log(user.isEnabled);
    putUser(!user.isEnabled);
  };
  return (
    <div className="card mb-3 card-user">
      <div className="d-flex">
        <div className="col-md-4 col-4">
          <img className="user-pic" src={user.avatar} alt={user.username} />
        </div>
        <div className="col-md-8 col-8">
          <div className="card-body">
            <h5 className="card-title">{user.username}</h5>
            <p className="card-text">Email: {user.email}</p>
            <p className="card-text">Rol: {user.role}</p>
            <p className="card-text">Nro de pedidos: {user.orderCount}</p>
            <button className="btn btn-danger" onClick={handleToggleStatus}>
              {user.isEnabled ? "Deshabilitar" : "Habilitar"}
            </button>
            <Link className="badge bg-primary">Más info</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    orderCount: PropTypes.number.isRequired,
    isEnabled: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired, // El ID del usuario en la base de datos. Este es necesario para actualizar un usuario.
  }).isRequired,
  filter: PropTypes.string.isRequired, // El filtro utilizado para filtrar los usuarios
};

export default UserCard;
