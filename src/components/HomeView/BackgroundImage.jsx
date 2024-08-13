import PropTypes from 'prop-types';

import backgroundImage from "../../assets/sanguche.jpg";
import "./styles/backgroundImage.css";

const BackgroundImage = ({ children }) => {
  return (
    <div className="background-container">
      <div className="background-image">
        <img
          src={backgroundImage}
          alt="Fondo de pantalla de la pagina de inicio"
          className="bg-img"
        />
      </div>
      <div className="overlay">
        {children}
      </div>
    </div>
  );
};
export default BackgroundImage;

BackgroundImage.propTypes = {
    children: PropTypes.node.isRequired, 
  };
