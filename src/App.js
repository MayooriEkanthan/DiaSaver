import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Predict from './pages/Predict';
import Prevention from './pages/Prevention';
import MyRisk from './pages/MyRisk';
import Symptoms from './pages/Symptoms';
import Testing from './pages/Testing';
import Language from './pages/Language';

function App() {
  return (
    <Router>
      {/* ✅ Show only essential links in nav */}
      <nav  className="navbar"  style={{ padding: '10px', background: '#eee' }}>
        <Link to="/" style={{ margin: '0 10px',color:"black" }}>Home</Link>
        <Link to="/about" style={{ margin: '0 10px',color:"black" }}>About</Link>
        <Link to="/contact" style={{ margin: '0 10px',color:"black" }}>Contact</Link>
      </nav>

      {/* ✅ All routes still work */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/predict" element={<Predict />} />
        <Route path="/prevention" element={<Prevention />} />
        <Route path="/myrisk" element={<MyRisk />} />
        <Route path="/symptoms" element={<Symptoms />} />
        <Route path="/testing" element={<Testing />} />
        <Route path="/language" element={<Language />} />
      </Routes>
    </Router>
  );
}

export default App;
