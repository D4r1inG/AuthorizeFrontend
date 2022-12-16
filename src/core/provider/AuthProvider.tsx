import React, { createContext, ReactNode, useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { message } from "antd";

interface UserLogin {
  username: string;
  password: string;
}

interface Props {
  children: ReactNode;
}

interface User {
  id: number;
  username: string;
  fullname: string;
  email: string;
  phone: string;
  position: string;
  warehouse: string;
}

interface ProviderValue {
  userInfo: User | undefined;
  login: (user: UserLogin) => void;
  logout: () => void;
  getUserInfoByToken: () => void;
  isAuthen: boolean;
}

const AuthContext = createContext<ProviderValue | null>(null);

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || "/profile";
  const [userInfo, setUserInfo] = useState<User>();

  const login = async (user: UserLogin) => {
    try {
      let res = await axios.get(
        `http://localhost:3000/login?username=${user.username}`
      );
      if (res.data.length === 0) {
        message.error("User not found!");
        return;
      }
      setUserInfo(res.data[0]);
      localStorage.setItem("access_token", res.data[0].accessToken);
      message.success("Login successfully!");
      navigate(redirectPath, { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  const getUserInfoByToken = async () => {
    const token = localStorage.getItem("access_token");
    if (!token) return;
    try {
      let res = await axios.get(
        `http://localhost:3000/login?accessToken=${token}`
      );
      setUserInfo(res.data[0]);
      navigate(location.pathname);
    } catch (err) {
      console.log(err);
    }
  };

  const logout = () => {
    setUserInfo(undefined);
  };

  const isAuthen = userInfo ? true : false;

  return (
    <AuthContext.Provider
      value={{
        userInfo,
        login,
        logout,
        getUserInfoByToken,
        isAuthen,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext)!;
};
