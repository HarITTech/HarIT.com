import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './src/components/Layout';
import Home from './src/pages/Home';
import About from './src/pages/About';
import Services from './src/pages/Services';
import Solutions from './src/pages/Solutions';
import Contact from './src/pages/Contact';
import Privacy from './src/pages/Privacy';
import Terms from './src/pages/Terms';
import Certificate from './src/pages/Certificate';
import Aaramse from './src/pages/Aaramse';
import AaramsePrivacy from './src/pages/AaramsePrivacy';
import AaramseTerms from './src/pages/AaramseTerms';
import AaramseRefund from './src/pages/AaramseRefund';

const App: React.FC = () => {
  return (

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/aaramse" element={<Aaramse />} />
          <Route path="/aaramse/privacy-policy" element={<AaramsePrivacy />} />
          <Route path="/aaramse/terms" element={<AaramseTerms />} />
          <Route path="/aaramse/refund-policy" element={<AaramseRefund />} />
          <Route path="/msme-certificate" element={<Certificate />} />
          {/* Fallback route for demo purposes */}
          <Route path="/careers" element={<Contact />} />
          <Route path="/blog" element={<Home />} />
        </Routes>
      </Layout>
 
  );
};

export default App;
