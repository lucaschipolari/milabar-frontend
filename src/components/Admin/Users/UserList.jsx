import PropTypes from "prop-types";
import UserCard from "./UserCard";

const UserList = (props) => {
  const { filteredUsers } = props;
  return (
    <ul className="user-list">
      {filteredUsers.map((user) => (
        <UserCard user={user} key={user.id} />
      ))}
    </ul>
  );
};

UserList.propTypes = {
  filteredUsers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default UserList;
