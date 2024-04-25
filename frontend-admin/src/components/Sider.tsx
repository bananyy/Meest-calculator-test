import React from "react";
import { LaptopOutlined, NotificationOutlined, UserOutlined } from "@ant-design/icons";
import { Layout, Menu, MenuProps } from "antd";

const Sider = ({}) => {
  const { Sider } = Layout;

  const items: MenuProps["items"] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
    (icon, index) => {
      const key = String(index + 1);

      return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: `subnav ${key}`,

        children: new Array(4).fill(null).map((_, j) => {
          const subKey = index * 4 + j + 1;
          return {
            key: subKey,
            label: `option${subKey}`,
          };
        }),
      };
    }
  );

  return (
    <Sider width={300}>
      <Menu mode="inline" style={{ height: "100vh", borderRight: 0 }} items={items} />
    </Sider>
  );
};

export default Sider;
