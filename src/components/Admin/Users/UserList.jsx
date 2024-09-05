import PropTypes from "prop-types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { putRoleUserFn, putUserFn } from "../../../api/usersApi";
import { toast } from "sonner";
import UserModalRole from "./UserModalRole";
import { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import { useUser } from "../../../stores/useUser";

const UserList = ({ filteredUsers, filter }) => {
  const [modalState, setModalState] = useState({ isOpen: false, user: null });

  const { userToEdit, setUserToEdit } = useUser();

  const queryClient = useQueryClient();

  const { mutate: putUser } = useMutation({
    mutationFn: ({ id, isEnabled }) => putUserFn({ id, isEnabled }),
    onSuccess: () => {
      toast.success("Usuario actualizado correctamente");
      queryClient.invalidateQueries(["users", filter]);
    },
    onError: (e) => {
      toast.error(`Error actualizando usuario: ${e.message}`);
    },
  });
  const { mutate: putUserRole } = useMutation({
    mutationFn: putRoleUserFn,
    onSuccess: () => {
      toast.success("Rol actualizado correctamente");
      queryClient.invalidateQueries(["users", filter]);
      toast.dismiss();
    },
    onError: (e) => {
      toast.error(`Error actualizando rol: ${e.message}`);
      toast.dismiss();
    },
  });

  const handleRole = (roles) => {
    const roleNames = roles.map((role) => role.name);
    if (roleNames.includes("superadmin")) return "SAD";
    if (roleNames.includes("admin")) return "Administrador";
    if (roleNames.includes("moderator")) return "Moderador";
    return "Usuario";
  };

  const handleOpenModal = (user) => {
    setUserToEdit(user);
    setModalState({ isOpen: true, user });
  };
  const handleCloseModal = () => setModalState({ isOpen: false, user: null });

  const onSave = (data) => {
    toast.loading("actualizando entrada");
    const userId = userToEdit.id;
    putUserRole({ userId, data: data });
    handleCloseModal();
  };

  if (!filteredUsers || filteredUsers.length === 0) {
    return <div>No hay usuarios encontrados</div>;
  }

  return (
    <div className="container">
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
            <th>Administrar Rol</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                <img
                  src={user.avatar || "/default-avatar.jpg"}
                  alt={user.username}
                  className="img-thumbnail"
                />
              </td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{handleRole(user.roles)}</td>
              <td>{user.orderCount}</td>
              <td>
                {!user.roles.some((role) => role.name === "superadmin") && (
                  <button
                    className={`btn ${
                      user.isEnabled ? "btn-danger" : "btn-success"
                    } w-100`}
                    onClick={() =>
                      putUser({ id: user.id, isEnabled: !user.isEnabled })
                    }
                  >
                    {user.isEnabled ? "Deshabilitar" : "Habilitar"}
                  </button>
                )}
              </td>
              <td>
                {!user.roles.some((role) => role.name === "superadmin") && (
                  <ButtonComponent onOpenModal={() => handleOpenModal(user)} />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {modalState.isOpen && (
        <UserModalRole
          isOpen={modalState.isOpen}
          onClose={handleCloseModal}
          user={modalState.user}
          roles={modalState.user.roles.map((role) => role.name)}
          onSave={onSave}
        />
      )}
    </div>
  );
};

UserList.propTypes = {
  filteredUsers: PropTypes.arrayOf(PropTypes.object),
  filter: PropTypes.string.isRequired,
};

export default UserList;
