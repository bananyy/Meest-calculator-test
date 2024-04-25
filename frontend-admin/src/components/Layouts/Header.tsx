import { SearchOutlined } from "@ant-design/icons";
import { Input, Layout } from "antd";
import ProfileNav from "../ProfileNav";

const Header = ({}) => {
  const { Header } = Layout;

  return (
    <Header className="flex items-center justify-between bg-white shadow-inner">
      <Input
        placeholder="Пошук"
        prefix={<SearchOutlined className="text-[20px]" />}
        style={{ width: "300px", borderRadius: 100 }}
      />
      <ProfileNav />
    </Header>
  );
};

export default Header;
