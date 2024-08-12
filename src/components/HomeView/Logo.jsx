import logo from "../../assets/logo1.png";
import "./styles/logo.css"

const Logo = () => {
  return (
    <div className="logo-container">
        <img src={logo} alt="Logo de la milabar sangucheria" className="logo-img" />
    </div>
  )
}
export default Logo