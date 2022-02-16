import React, { useState } from "react";
import { Route, NavLink, useHistory } from "react-router-dom";
import Header from "./_component/Header/Header";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  HomeOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import "./AdminTemplate.scss";

const { SubMenu } = Menu;
const { Content, Footer, Sider } = Layout;

function AdminTemplate(props) {
  const history = useHistory();
  const { exact, path, component } = props;
  const [collapsed, setCollapsed] = useState(false);

  let user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    history.push("/");
  }

  const LayoutAdmin = (props) => {
    return (
      <>
        <Header />
        <Layout>
          <Content style={{ padding: "0 50px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>ADMIN</Breadcrumb.Item>
            </Breadcrumb>
            <Layout
              className="site-layout-background"
              style={{ padding: "24px 0", minHeight: "80vh" }}
            >
              <Sider
                className="site-layout-background"
                width={200}
                height={600}
              >
                <Menu
                  className="custom-menu"
                  mode="inline"
                  theme="dark"
                  inlineCollapsed={collapsed}
                >
                  <Menu.Item key="1" icon={<HomeOutlined />}>
                    <NavLink to="/admin" exact activeClassName="myactive">
                      Dashboard
                    </NavLink>
                  </Menu.Item>
                  <Menu.Item key="2" icon={<UserOutlined />}>
                    <NavLink
                      to="/admin/users-management"
                      activeClassName="myactive"
                    >
                      Users-Management
                    </NavLink>
                  </Menu.Item>
                  <SubMenu
                    key="3"
                    icon={<MenuFoldOutlined />}
                    title="User Profile"
                  >
                    <Menu.Item key="3">
                      <NavLink
                        to="/admin/create-user"
                        activeClassName="myactive"
                      >
                        Create User
                      </NavLink>
                    </Menu.Item>
                    <Menu.Item key="4">
                      <NavLink
                        to="/admin/edit-user/1"
                        activeClassName="myactive"
                      >
                        Edit User
                      </NavLink>
                    </Menu.Item>
                  </SubMenu>
                </Menu>
                {/* <div className="sidebar">
                  <ul>
                    <li>
                      <NavLink activeClassName="myactive" exact to="/admin">
                        Dashboard
                      </NavLink>
                    </li>
                    <li>
                      <NavLink activeClassName="myactive" to="/admin/users">
                        Users Profile
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        activeClassName="myactive"
                        to="/admin/users-management"
                      >
                        Users-Management
                      </NavLink>
                    </li>
                  </ul>
                </div> */}
              </Sider>
              <Content style={{ padding: "0 24px", minHeight: 280 }}>
                {props.children}
              </Content>
            </Layout>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </>
    );
  };

  return (
    <LayoutAdmin>
      <Route exact={exact} path={path} component={component}></Route>
    </LayoutAdmin>
  );
}

export default AdminTemplate;
