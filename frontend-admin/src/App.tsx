import { Layout } from "antd";

import Sider from "./components/Layouts/Sider";
import Header from "./components/Layouts/Header";
import { useEffect, useState } from "react";
// import { AdminLogin } from "./components/Layouts/AdminLogin";

const { Content } = Layout;

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  setTimeout(handleResize, 0);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <Layout style={{ background: "white" }}>
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

export default App;
