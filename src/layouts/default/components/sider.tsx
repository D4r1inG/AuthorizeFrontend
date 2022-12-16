import { Menu, MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../core/provider/AuthProvider";

const MENUS = [
  {
    label: "GHTK building",
    key: "GHTK-building",
    allowedwarehouse: ["GHTK building"],
    children: [
      {
        label: "Admin & Manager",
        key: "/content1",
        allowed: ["admin", "manager"],
        children: [
          {
            label: "Manager content",
            key: "/manager-content",
            allowed: ["manager"],
          },
          {
            label: "Admin content",
            key: "/admin-content",
            allowed: ["manager", "admin"],
          },
        ],
      },
      {
        label: "User",
        key: "/Content2",
        allowed: ["user", "admin"],
        children: [
          {
            label: "User content 1",
            key: "/user-content",
            allowed: ["user", "admin"],
          },
        ],
      },
    ],
  },
  {
    label: "Kho 1",
    key: "Kho1",
    allowedwarehouse: ["Kho1"],
    children: [
      {
        label: "Cod content 1",
        key: "/cod-content-1",
        allowed: ["cod"],
      },
    ],
  },
  {
    label: "Kho 2",
    key: "Kho2",
    allowedwarehouse: ["Kho2"],
    children: [
      {
        label: "Cod content 2",
        key: "/cod-content-2",
        allowed: ["cod"],
      },
    ],
  },
];

const SiderApp: React.FC = () => {
  const { userInfo } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // const getNewMenus = (item) => {
  //   const newChildren = item.children.filter((item) =>
  //     item.allowed.includes(userInfo?.position)
  //   );

  //   return newChildren.map((item) => {
  //     if (!item.children) return item;
  //     return { ...item, children: getNewMenus(item) };
  //   });
  // };

  // const NewMenus = MENUS.reduce((prev: any, curr) => {
  //   if (curr.allowedwarehouse.includes(userInfo?.warehouse!)) {
  //     let newChildren = getNewMenus(curr);
  //     prev.push({ ...curr, children: newChildren });
  //   }
  //   return [...prev];
  // }, []);

  const onClick: MenuProps["onClick"] = (e) => {
    navigate(e.key);
  };

  return (
    <Sider width={200} className="!bg-white">
      <Menu
        onClick={onClick}
        defaultSelectedKeys={[location.pathname]}
        mode="inline"
        items={MENUS}
      />
    </Sider>
  );
};

export default SiderApp;
