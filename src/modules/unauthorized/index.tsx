import { Button, Result } from "antd";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../core/provider/AuthProvider";

const Unauthorized: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLoginAgain = () => {
    logout();
    navigate("/login", {
      state: { path: location.pathname },
    });
  };

  return (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
      extra={
        <div className="flex items-center justify-center gap-3">
          <Link to="/profile">
            <Button type="primary">Back Home</Button>
          </Link>
          <div className="text-black opacity-[0.45]"> Or</div>
          <Button onClick={handleLoginAgain}>
            Login with authorized account
          </Button>
        </div>
      }
    />
  );
};

export default Unauthorized;
