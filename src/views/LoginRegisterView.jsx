import React, { useState } from 'react';
import AuthMenu from '../components/Auth/AuthMenu';
import LoginPage from '../components/Auth/LoginPage';
import RegisterPage from '../components/Auth/RegisterPage';

const LoginRegisterView = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="bg-white m-4 p-3 rounded-4">
      <AuthMenu onTabChange={handleTabChange} />
      {activeTab === 0 ? <LoginPage /> : <RegisterPage />}
    </div>
  );
};

export default LoginRegisterView;
