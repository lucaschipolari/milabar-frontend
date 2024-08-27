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
      <div className="rounded-4 p-5">
        <AuthMenu onTabChange={handleTabChange} />
        {activeTab === 0 ? <LoginPage /> : <RegisterPage />}
      </div>
  );
};

export default LoginRegisterView;
