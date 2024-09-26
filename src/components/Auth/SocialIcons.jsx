import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import "./auth.css";

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a className="all-bg-color rounded-4 p-2 text-decoration-none d-flex align-items-center mb-2 border-primary">
        <FontAwesomeIcon icon={faFacebook} className="me-2 text-primary" />
        <p className="m-0 p-0 flex-grow-1 text-center blue-color">Continua con Facebook</p>
      </a>
      <a className="all-bg-color rounded-4 p-2 d-flex justify-content-around align-items-center text-decoration-none border-primary">
        <FontAwesomeIcon icon={faGoogle} className="text-success"/>
        <p className="m-0 p-0 text-center flex-grow-1 blue-color">Continua con Gmail</p>
      </a>
    </div>
  );
};

export default SocialIcons;
