import { Descriptions } from "antd";
import React from "react";
import { useAuth } from "../../core/provider/AuthProvider";

const Profile: React.FC = () => {
  const { userInfo } = useAuth();

  return (
    <div>
      <Descriptions title="User Info">
        <Descriptions.Item className="font-bold" label="UserName">
          {userInfo?.username}
        </Descriptions.Item>
        <Descriptions.Item className="font-bold" label="Full name">
          {userInfo?.fullname}
        </Descriptions.Item>
        <Descriptions.Item className="font-bold" label="Telephone">
          {userInfo?.phone}
        </Descriptions.Item>
        <Descriptions.Item className="font-bold" label="Position">
          {userInfo?.position}
        </Descriptions.Item>
        <Descriptions.Item className="font-bold" label="Warehouse">
          {userInfo?.warehouse}
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default Profile;
