import { Button, Input, message, Modal } from "antd";
import { Header } from "antd/es/layout/layout";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../core/provider/AuthProvider";
import LoginForm from "../../../modules/login/loginForm";

const DNavBar: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const { logout, handleLoginWithAuthorAcc } = useAuth();

  const handleLogin = (user) => {
    if (user.username.length === 0 || user.password.length === 0) {
      message.error("Please fill all the form!");
      return;
    }
    handleLoginWithAuthorAcc(user);
    setVisible(false);
  };

  return (
    <Header className="flex justify-between items-center !bg-white">
      <div className="font-bold text-lg">Logo</div>
      <div className="flex gap-3 items-center">
        <Button
          type="primary"
          onClick={() => {
            setVisible(true);
          }}
        >
          Log in with different account
        </Button>
        <Link to={"/profile"}>
          <Button type="primary">Profile</Button>
        </Link>
        <Link to={"/"}>
          <Button>Home</Button>
        </Link>
        <Button danger onClick={logout}>
          Log out
        </Button>
      </div>
      <Modal
        open={visible}
        onCancel={() => {
          setVisible(false);
        }}
        footer={null}
        closable={false}
        destroyOnClose
      >
        <LoginForm handleLogin={handleLogin} />
      </Modal>
    </Header>
  );
};

export default DNavBar;
