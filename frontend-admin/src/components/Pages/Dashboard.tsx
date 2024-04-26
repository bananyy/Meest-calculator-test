import { useEffect, useState } from "react";

import { Layout } from "antd";
import Header from "../Layouts/Header";
import Sider from "../Layouts/Sider";

const { Content } = Layout;

const Dashboard = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <Layout style={{ background: "white", height: "100dvh", overflow: "hidden" }}>
      <Sider isMobile={isMobile} />
      <Layout>
        <Header isMobile={isMobile} />
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
