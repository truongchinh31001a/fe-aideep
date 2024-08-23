import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Import HomePage
import MetricsPage from './pages/MetricsPage'; // Import MetricsPage
import AboutPage from './pages/AboutUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/metrics" element={<MetricsPage />} />
        <Route path='/about' element={<AboutPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
