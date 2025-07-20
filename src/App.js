import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
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
        <div className="navbar-logo bordered-logo">DiaSaver</div>

        <ul className="navbar-links">
          <li>
            <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
              Contact
            </NavLink>
          </li>
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
