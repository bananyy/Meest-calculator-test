import React from "react";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Flex, Space } from "antd";

const items: MenuProps["items"] = [
  {
    label: "1st menu item",
    key: "0",
  },
  {
    label: "2nd menu item",
    key: "1",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
];

const ProfileNav: React.FC = () => (
  <Dropdown menu={{ items }} trigger={["click"]}>
    <a onClick={(e) => e.preventDefault()}>
      <Flex gap={5}>
        <div className="w-12 h-12 flex rounded-full bg-[#F5F1F1] justify-center items-center">
          <UserOutlined className="text-[24px]" />
        </div>
        <DownOutlined className="text-[18px]" />
      </Flex>
    </a>
  </Dropdown>
);

export default ProfileNav;
