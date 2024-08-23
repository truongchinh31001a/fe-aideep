// src/pages/HomePage.js
import React from 'react';
import CustomHeader from '../components/Header';
import CustomFooter from '../components/Footer';
import ContentSection from '../components/ContentSection';
import ToTopButton from '../components/ToTopButton';

const HomePage = () => {
  return (
    <div className="home-page">
      <CustomHeader />
      <div className="content">
        <ContentSection />
      </div>
      <ToTopButton/>
      <CustomFooter />
    </div>
  );
};

export default HomePage;
