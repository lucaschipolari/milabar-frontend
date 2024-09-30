import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import LoginPage from "../components/Auth/LoginPage";
import RegisterPage from "../components/Auth/RegisterPage";
import "../components/Auth/auth.css";

const LoginRegisterView = () => {  
  const navigate = useNavigate();
  const location = useLocation();
  const [showLogin, setShowLogin] = useState(true); 

  useEffect(() => {
    
    if (location.pathname === "/users/register") {
      setShowLogin(false);
    } else {
      setShowLogin(true);
    }
  }, [location]);
  const toggleView = () => {
    if (showLogin) {
      navigate("/users/register");
    } else {
      navigate("/users/login");
    }
  };
  return (
    <div className="mt-3 col-md-6 mx-auto">
         {showLogin ? (
        <LoginPage toggleView={toggleView} />
      ) : (
        <RegisterPage toggleView={toggleView} />
      )}
    </div>
  );
};

export default LoginRegisterView;
