import React from 'react';
import { Layout, Row, Col } from 'antd';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined } from '@ant-design/icons';
import '../styles/footer.css';

const { Footer } = Layout;

const CustomFooter = () => {
  return (
    <Footer className="footer">
      <Row gutter={16}>
        <Col xs={24} sm={12} md={6}>
          <h5>Categories</h5>
          <p>Quisque velit nisi,</p>
          <p>pretium ut lacinia in,</p>
          <p>elementum id enim.</p>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <h5>Contact</h5>
          <p>64 Cách Mạng Tháng 8, P.Khuê Trung, Quận Cẩm Lệ, TP Đà Nẵng.</p>
          <p>Phone: 0903 595 593</p>
          <p>Fax: 02363 679 555</p>
          <p>Email: cskh.dn@tmmchealthcare.com</p>
        </Col>
        <Col xs={24} sm={12} md={6} style={{ alignItems: 'center' }}>
          <h5>Follow Us</h5>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FacebookOutlined className="social-icon" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <TwitterOutlined className="social-icon" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <InstagramOutlined className="social-icon" />
            </a>
          </div>
        </Col>
      </Row>
    </Footer>
  );
};

export default CustomFooter;
