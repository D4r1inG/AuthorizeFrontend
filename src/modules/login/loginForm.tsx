import { Button, Input } from "antd";
import React, { useState } from "react";
import { UserLogin } from "../../core/provider/AuthProvider";

interface Props {
  handleLogin: (userLogin: UserLogin) => void;
}

const LoginForm: React.FC<Props> = ({ handleLogin }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleLogin(user);
      }}
    >
      <div className="grid grid-cols-3 items-center mb-2">
        <span className="col-span-1">Username:</span>
        <Input name="username" className="col-span-2" onChange={handleChange} />
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
  );
};

export default LoginForm;
