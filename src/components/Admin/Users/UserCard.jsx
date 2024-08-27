import PropTypes from "prop-types";

import "./styles/userCard.css";
import { Link, NavLink } from "react-router-dom";
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
    <div className="col-12 col-md-4 col-lg-3 my-2 card-user ">
      <div className="card single__product my-4 h-100 d-flex flex-column justify-content-between">
        <div className="product__img">
          <img
            src={user.avatar || "ruta/default-avatar.jpg"}
            alt={user.username}
            className="h-100 w-100 img-fluid object-fit-cover"
          />
        </div>
        <h6 className="text-center fs-3 my-2">{user.username}</h6>
        <p className="text-center m-0">Email: {user.email}</p>
        <p className="text-center m-0">Rol: {user.role}</p>
        <p className="text-center m-0">Nro de pedidos: {user.orderCount}</p>

        <div className="product__content mt-auto">
          <div className="d-flex flex-column gap-2 m-2">
            <button
              className={`btn ${
                user.isEnabled ? "btn-danger" : "btn-success"
              } w-100`}
              onClick={handleToggleStatus}
            >
              {user.isEnabled ? "Deshabilitar" : "Habilitar"}
            </button>
            <Link className="btn btn-primary w-100" to={`detail/${user.id}`}>
              Más info
            </Link>
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
