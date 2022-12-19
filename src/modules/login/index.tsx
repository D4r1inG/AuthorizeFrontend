import { Button, Input, message } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../core/provider/AuthProvider";

const Login: React.FC = () => {
  const { login, isAuthen } = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-50">
      <div>
        <div className="text-center mb-2 text-slate-600">
          Please login to continue!
        </div>
        <div className="border border-gray-200 border-solid bg-white p-5">
          <form
            className="mx-auto"
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin(user);
            }}
          >
            <div className="grid grid-cols-3 items-center mb-2">
              <span className="col-span-1">Username:</span>
              <Input
                name="username"
                className="col-span-2"
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-3 items-center mb-4">
              <span className="col-span-1">Password:</span>
              <Input
                name="password"
                type="Password"
                className="col-span-2"
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-center">
              <Button htmlType="submit" type="primary">
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
