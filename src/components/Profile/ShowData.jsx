import PropTypes from "prop-types";
import { useUser } from "../../stores/useUser.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import "./profile.css";
import FormUserEdit from "./FormUserEdit.jsx";

const UserCard = (props) => {
  const { user } = props;
  const { userToEdit, setUserToEdit } = useUser();

  const handleEdit = (user) => {
    setUserToEdit(user);
  };

  return (
    <div className=" container p-2 custom-card-edit">
      {userToEdit ? (
        <FormUserEdit />
      ) : (
        <>
          <div className="row">
            <div className="col-12 col-md-3 content-img-data">
              <p className="text-center">
                <strong>Avatar</strong>
              </p>
              <img
                src={user.data.avatar}
                alt={user.data.username}
                className="w-100 h-auto object-fit-cover"
              />
            </div>
            <div className="col-9">
              <p className="text-start my-2">
                <strong>Nombre de usuario:</strong> {user.data.username}
              </p>
              <p className="text-start my-2">
                <strong>Email:</strong> {user.data.email}
              </p>
            </div>
          </div>
          <hr />
          <button
            className="btn btn-warning col-auto mb-2 w-100"
            onClick={() => handleEdit(user)}
          >
            <FontAwesomeIcon icon={faPencil} />
          </button>
        </>
      )}
    </div>
  );
};

export default UserCard;

UserCard.propTypes = {
  user: PropTypes.shape({
    data: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
