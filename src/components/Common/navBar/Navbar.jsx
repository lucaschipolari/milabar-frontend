import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faHouse,
  faCartShopping,
  faUsersLine,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div>
      <ul className="navigation">
        <li className="list">
          <a href="/">
            <span className="icon"></span>
            <span className="text">
              <FontAwesomeIcon icon={faHouse} />
            </span>
          </a>
        </li>
        <li className="list">
          <a href="/">
            <span className="icon"></span>
            <span className="text">
              <FontAwesomeIcon icon={faAddressBook} />
            </span>
          </a>
        </li>
        <li className="list">
          <a href="/">
            <span className="icon"></span>
            <span className="text">
              <FontAwesomeIcon icon={faCartShopping} />
            </span>
          </a>
        </li>
        <li className="list">
          <a href="/">
            <span className="icon"></span>
            <span className="text">
              <FontAwesomeIcon icon={faUsersLine} />
            </span>
          </a>
        </li>
        <li className="list">
          <a href="/">
            <span className="icon"></span>
            <span className="text">
              <FontAwesomeIcon icon={faHeart} />
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
