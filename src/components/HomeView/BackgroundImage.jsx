import PropTypes from "prop-types";

import backgroundImage from "../../assets/videomilanesa.mp4";
import "./styles/backgroundImage.css";

const BackgroundImage = ({ children }) => {
  return (
    <div className="background-container">
      <div className="background-image"></div>
      <div className="overlay">
        <div className="d-flex align-items-center flex-column contenedor-opciones">
          {children}
        </div>
      </div>
    </div>
  );
};
export default BackgroundImage;

BackgroundImage.propTypes = {
  children: PropTypes.node.isRequired,
};
