import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const NavItem = (props) => {
  const { item, index, activeIndex, setActiveIndex, cartCount } = props;

  const handleClick = () => {
    setActiveIndex(index);
  };

  return (
    <li
      className={`list ${index === activeIndex ? "active" : ""}`}
      onClick={handleClick}
    >
      <NavLink to={item.to}>
        <span className="icon-container">
          <FontAwesomeIcon icon={item.icon} className="icon" />
          {item.text === "Carrito" && cartCount > 0 && (
            <span className="cart-count">{cartCount}</span>
          )}
        </span>
        <span className="text">{item.text}</span>
      </NavLink>
    </li>
  );
};

NavItem.propTypes = {
  item: PropTypes.shape({
    to: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  activeIndex: PropTypes.number.isRequired,
  setActiveIndex: PropTypes.func.isRequired,
  cartCount: PropTypes.number.isRequired,
};

export default NavItem;
