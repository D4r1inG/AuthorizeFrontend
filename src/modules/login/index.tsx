import { message } from "antd";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../core/provider/AuthProvider";
import LoginForm from "./loginForm";

const Login: React.FC = () => {
  const { login, isAuthen } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    isAuthen && navigate("/profile");
  }, [isAuthen]);

  const handleLogin = (user) => {
    if (user.username.length === 0 || user.password.length === 0) {
      message.error("Please fill all the form!");
      return;
    }
    login(user);
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-50">
      <div>
        <div className="text-center mb-2 text-slate-600">
          Please login to continue!
        </div>
        <div className="border border-gray-200 border-solid bg-white p-5">
          <LoginForm handleLogin={handleLogin} />
        </div>
      </div>
    </div>
  );
};

export default Login;
