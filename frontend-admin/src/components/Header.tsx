import { Layout } from "antd";

const Header = ({}) => {
  const { Header } = Layout;

  return (
    <Header style={{ display: "flex", alignItems: "center" }}>
      <div className="demo-logo" />
    </Header>
  );
};

export default Header;
