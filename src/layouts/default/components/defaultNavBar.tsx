import { Button } from "antd";
import { Header } from "antd/es/layout/layout";
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../core/provider/AuthProvider";

const DNavBar: React.FC = () => {
  const { logout } = useAuth();

  return (
    <Header className="flex justify-between items-center !bg-white">
      <div className="font-bold text-lg">Logo</div>
      <div className="flex gap-3 items-center">
        <Link to={"/profile"}>
          <Button type="primary">Profile</Button>
        </Link>
        <Button onClick={logout}>Log out</Button>
      </div>
    </Header>
  );
};

export default DNavBar;
