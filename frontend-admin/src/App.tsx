import { Layout } from "antd";

import Sider from "./components/Sider";
import Header from "./components/Header";

const { Content } = Layout;

const App = () => {
  return (
    <Layout>
      <Sider />
      <Layout>
        <Header />
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
