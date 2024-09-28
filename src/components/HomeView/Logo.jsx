import logo from "../../assets/logo1.png";
import "./styles/logo.css";
import logoMilabar from "../../assets/logofinal.mp4";

const Logo = () => {
  return (
    <div className="logo-container">
      <div className="title">
        {"MILABAR".split("").map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </div>
    </div>
  );
};
export default Logo;
