import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './src/components/Layout';
import Home from './src/pages/Home';
import About from './src/pages/About';
import Services from './src/pages/Services';
import Solutions from './src/pages/Solutions';
import Contact from './src/pages/Contact';

const App: React.FC = () => {
  return (

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/contact" element={<Contact />} />
          {/* Fallback route for demo purposes */}
          <Route path="/careers" element={<Contact />} />
          <Route path="/blog" element={<Home />} />
        </Routes>
      </Layout>
 
  );
};

export default App;