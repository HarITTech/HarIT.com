import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Connect from "./Pages/connect";
import Construction from "./Pages/construction";

const App = () => {
  return (
    <Router>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Construction />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
    </Router>
  );
};

export default App;