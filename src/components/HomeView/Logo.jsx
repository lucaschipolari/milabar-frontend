import "./styles/logo.css";
import logoMilabar from "../../assets/logofinal.mp4";

const Logo = () => {
  return (
    <div className="logo-container">
      <video
        src={logoMilabar}
        alt="Logo de la milabar sangucheria"
        className="logo-img"
        autoPlay
        muted
        loop
      />
    </div>
  );
};
export default Logo;
