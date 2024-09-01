import PropTypes from "prop-types";
import { useState } from "react";

const UserModalRole = (props) => {
  const { isOpen, onClose, user, roles, onSave } = props;

  const [selectedRoles, setSelectedRoles] = useState(user.role || []);

  const handleRoleChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedRoles([...selectedRoles, value]);
    } else {
      setSelectedRoles(selectedRoles.filter((role) => role !== value));
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
              Editar Roles para {user.username}
            </h1>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <h6>Selecciona los roles:</h6>
              {roles.map((role) => (
                <div key={role} className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={role}
                    id={`role-${role}`}
                    checked={selectedRoles.includes(role)}
                    onChange={handleRoleChange}
                  />
                  <label className="form-check-label" htmlFor={`role-${role}`}>
                    {role}
                  </label>
                </div>
              ))}
            </form>
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
    role: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSave: PropTypes.func,
};

export default UserModalRole;
