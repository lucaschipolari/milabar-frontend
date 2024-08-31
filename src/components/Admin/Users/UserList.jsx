import PropTypes from "prop-types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { putUserFn } from "../../../api/usersApi";
import { toast } from "sonner";

const UserList = (props) => {
  const { filteredUsers, filter } = props;

  const queryClient = useQueryClient();

  const { mutate: putUser } = useMutation({
    mutationFn: ({ id, isEnabled }) => putUserFn({ id, isEnabled }),
    onSuccess: () => {
      toast.success("Usuario actualizado correctamente");
      queryClient.invalidateQueries(["users", filter]); // Refrescar la lista de usuarios
    },
    onError: (e) => {
      toast.error(`Error actualizando usuario: ${e.message}`);
    },
  });

  return (
    <div className="container">
      {filteredUsers && filteredUsers.length > 0 ? (
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Avatar</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Rol</th>
              <th>Nro de Pedidos</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>
                  <img
                    src={user.avatar || "ruta/default-avatar.jpg"}
                    alt={user.username}
                    className="img-thumbnail"
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                    }}
                  />
                </td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.orderCount}</td>
                <td>
                  <button
                    className={`btn ${
                      user.isEnabled ? "btn-danger" : "btn-success"
                    } w-100`}
                    onClick={() => {
                      putUser({ id: user.id, isEnabled: !user.isEnabled });
                    }}
                  >
                    {user.isEnabled ? "Deshabilitar" : "Habilitar"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>No hay usuarios encontrados</div>
      )}
    </div>
  );
};

UserList.propTypes = {
  filteredUsers: PropTypes.arrayOf(PropTypes.object),
  filter: PropTypes.string.isRequired,
};

export default UserList;
