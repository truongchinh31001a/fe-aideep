import React, { useState, useEffect } from 'react';
import { Layout, Menu, Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useLocation, Link } from 'react-router-dom';
import '../styles/header.css';

import logoImage from '../images/347888387_1297082107889841_1665891125946599267_n.png';

const { Header } = Layout;

const CustomHeader = () => {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  const showDrawer = () => setVisible(true);
  const onClose = () => setVisible(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
    if (window.innerWidth > 768) setVisible(false);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Determine the selected key based on the current route
  const selectedKey = location.pathname === '/' ? '1' : location.pathname === '/metrics' ? '2' : '3';

  return (
    <Header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logoImage} alt="Logo" />
        </Link>
      </div>
      <div className="menu-container">
        {isMobile ? (
          <>
            <Button
              className="menu-toggle"
              type="primary"
              onClick={showDrawer}
              icon={<MenuOutlined />}
            />
            <Drawer
              title="Menu"
              placement="right"
              closable={true}
              onClose={onClose}
              visible={visible}
            >
              <Menu
                theme="light"
                mode="vertical"
                selectedKeys={[selectedKey]}
                onClick={onClose} // Close drawer after selecting an item
              >
                <Menu.Item key="1">
                  <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/metrics">Metrics</Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link to="/about">About</Link>
                </Menu.Item>
                <Menu.Item key="4">
                  <Link to="/contact">Contact</Link>
                </Menu.Item>
              </Menu>
            </Drawer>
          </>
        ) : (
          <div className="menu">
            <Menu theme="light" mode="horizontal" selectedKeys={[selectedKey]}>
              <Menu.Item key="1">
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/metrics">Metrics</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/about">About</Link>
              </Menu.Item>
            </Menu>
          </div>
        )}
      </div>
      <div className="auth-buttons">
        <Button type="link" style={{ color: '#009baa' }}>Login</Button>
        <Button type="primary" style={{ backgroundColor: '#009baa' }}>Register</Button>
      </div>
    </Header>
  );
};

export default CustomHeader;
