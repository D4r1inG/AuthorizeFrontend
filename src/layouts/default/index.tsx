import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Outlet } from "react-router-dom";
import DNavBar from "./components/defaultNavBar";
import SiderApp from "./components/sider";

const { Header, Content, Sider } = Layout;

const DefaultLayout: React.FC = () => {
  return (
    <Layout className="h-full">
      <DNavBar />
      <Layout>
        <SiderApp />
        <Layout style={{ padding: "24px " }}>
          <Content>
            <div className="bg-white p-6">
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;
