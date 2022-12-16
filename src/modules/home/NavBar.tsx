import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <div className="flex justify-between items-center px-10 my-5">
      <div className="font-bold">Logo</div>
      <div>
        <Link to="/login">
          <Button type="primary" className="bg-[#00b96b]">
            Log in
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
