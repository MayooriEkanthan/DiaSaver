import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './pages/Navbar.css'; // ✅ External CSS for navbar

// Pages
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
      {/* ✅ Navbar */}
      <nav className="navbar">
        <div className="navbar-logo bordered-logo">
  DiaSaver
</div>

        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* ✅ All route paths */}
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
