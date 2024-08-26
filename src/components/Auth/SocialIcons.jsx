import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./auth.css";

const SocialIcons = ({ github, instagram, facebook, google }) => {
  return (
    <div className="social-icons">
      <a href={facebook} className="social-icon" aria-label="Facebook" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a href="/404" className="social-icon" aria-label="Google" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faGoogle} />
      </a>
      <a href={github} className="social-icon" aria-label="GitHub" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href={instagram} className="social-icon" aria-label="Instagram" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </div>
  );
};

export default SocialIcons;
