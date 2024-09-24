import React, { useState } from "react";
import AuthMenu from "../components/Auth/AuthMenu";
import LoginPage from "../components/Auth/LoginPage";
import RegisterPage from "../components/Auth/RegisterPage";
import "../components/Auth/auth.css";

const LoginRegisterView = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };
  return (
    <div className="container mt-5 rounded-4 col col-md-6 mx-auto">
      <AuthMenu onTabChange={handleTabChange} />
      {activeTab === 0 ? <LoginPage /> : <RegisterPage />}
    </div>
  );
};

export default LoginRegisterView;
