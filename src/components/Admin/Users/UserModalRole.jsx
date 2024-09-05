import { useQuery } from "@tanstack/react-query";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { getRolesFn } from "../../../api/roles";
import { useUser } from "../../../stores/useUser";

const UserModalRole = (props) => {
  const { isOpen, onClose, onSave } = props;
  const [selectedRoles, setSelectedRoles] = useState([]);

  const {
    data: roles,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["roles"],
    queryFn: getRolesFn,
  });

  const { userToEdit } = useUser();
  console.log(userToEdit);
  console.log(roles);

  useEffect(() => {
    if (isOpen && userToEdit) {
      setSelectedRoles(
        Array.isArray(userToEdit.roles)
          ? userToEdit.roles.map((role) => role.name)
          : [userToEdit.roles.name]
      );
    }
  }, [isOpen, userToEdit]);

  const handleRoleChange = (e) => {
    const { value, checked } = e.target;
    setSelectedRoles((prev) =>
      checked ? [...prev, value] : prev.filter((role) => role !== value)
    );
  };

  const handleName = (roleName) => {
    if (roleName === "admin") {
      return "Administrador";
    } else if (roleName === "moderator") {
      return "Moderador";
    }
  };

  const handleSave = () => {
    onSave(selectedRoles);
    onClose();
  };

  return (
    <div
      className={`modal fade ${isOpen ? "show d-block" : ""}`}
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden={!isOpen}
      style={{ display: isOpen ? "block" : "none" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Editar Roles para {userToEdit?.username}
            </h1>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {isLoading ? (
              <div>Cargando roles...</div>
            ) : isError ? (
              <div>Error al cargar los roles.</div>
            ) : (
              <form>
                <h6>Selecciona los roles:</h6>
                {roles?.data.map((role) => (
                  <div key={role._id} className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={role.name}
                      id={`role-${role._id}`}
                      checked={selectedRoles.includes(role.name)}
                      onChange={handleRoleChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`role-${role._id}`}
                    >
                      {handleName(role.name)}
                    </label>
                  </div>
                ))}
              </form>
            )}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Cerrar
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSave}
            >
              Guardar cambios
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

UserModalRole.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    role: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
  }).isRequired,
  onSave: PropTypes.func,
};

export default UserModalRole;
