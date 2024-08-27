import PropTypes from "prop-types";
import UserCard from "./UserCard";

const UserList = (props) => {
  const { filteredUsers, filter } = props;
  return (
    <div className="container">
      <div className="row g-2">
        {filteredUsers ? (
          filteredUsers.map((user) => (
            <UserCard user={user} filter={filter} key={user.id} />
          ))
        ) : (
          <div>No hay usuarios encontrados</div>
        )}
      </div>
    </div>
  );
};

UserList.propTypes = {
  filteredUsers: PropTypes.arrayOf(PropTypes.object),
  filter: PropTypes.string.isRequired,
};

export default UserList;
