import React from 'react'
import { Layout, Menu } from 'antd';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import LayoutPage from './LayoutPage';

const {Header, Footer, Content, Sider} = Layout

function DashBoard() {
    return (
        <div>
            <Layout>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
      className="left-sider"
    >
    </Sider>
    <Layout className="site-layout" style={{ marginLeft: 200 }}>
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }} className = "Content">
        <div style={{ padding: 24, textAlign: 'center' }}>
           <LayoutPage />
        </div>
      </Content>
    </Layout>
    <Sider width={400} className="right-sider"></Sider>
  </Layout>
        </div>
    )
}

export default DashBoard
