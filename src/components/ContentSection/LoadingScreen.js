import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const LoadingScreen = () => (
  <div className="loading-screen">
    <Spin indicator={<LoadingOutlined style={{ fontSize: 50 }} spin />} />
    <p>Processing your images, please wait...</p>
  </div>
);

export default LoadingScreen;
