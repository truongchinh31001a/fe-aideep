import React from 'react';
import { Button } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';
import '../styles/ToTopButton.css'; // Import CSS

const ToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Button
      className="to-top-button"
      type="primary"
      onClick={scrollToTop}
      icon={<ArrowUpOutlined />}
    />
  );
};

export default ToTopButton;
