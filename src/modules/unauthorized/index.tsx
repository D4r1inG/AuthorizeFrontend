import { Button, Result } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Unauthorized: React.FC = () => {
  return (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
      extra={
        <Link to="/profile">
          <Button type="primary" className="bg-[#00b96b]">
            Back Home
          </Button>
        </Link>
      }
    />
  );
};

export default Unauthorized;
