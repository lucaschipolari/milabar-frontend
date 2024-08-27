import PropTypes from "prop-types";

import backgroundImage from "../../assets/videomilanesa.mp4";
import "./styles/backgroundImage.css";

const BackgroundImage = ({ children }) => {
  return (
    <div className="background-container">
      <div className="background-image">
        <img
          src="https://static.vecteezy.com/system/resources/previews/002/911/729/large_2x/weathered-grey-brick-wall-for-texture-and-background-photo.jpg"
          alt="imagen-ladrillo-fondo"
        />
      </div>
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
