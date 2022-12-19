import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../core/provider/AuthProvider";

const NavBar: React.FC = () => {
  const { isAuthen } = useAuth();

  return (
    <div className="flex justify-between items-center px-10 my-5">
      <div className="font-bold">Logo</div>
      <div>
        {isAuthen ? (
          <Link to="/profile">
            <Button type="primary" className="bg-[#00b96b]">
              Profile
            </Button>
          </Link>
        ) : (
          <Link to="/login">
            <Button type="primary" className="bg-[#00b96b]">
              Log in
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
