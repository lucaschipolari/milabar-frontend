import PropTypes from 'prop-types';

import backgroundImage from "../../assets/videomilanesa.mp4";
import "./styles/backgroundImage.css";

const BackgroundImage = ({ children }) => {
  return (
    <div className="background-container">
      <div className="background-image">
        <video
          src={backgroundImage}
          alt="Fondo de pantalla de la pagina de inicio"
          autoPlay
          muted
          loop
          className="bg-video"
          onError={(error)=>{
            console.log(error)
          }}
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
