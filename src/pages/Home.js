import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaVial, FaShieldAlt, FaChartBar,
  FaStethoscope, FaMapMarkerAlt, FaGlobe,
} from 'react-icons/fa';
import './Home.css';

function Home() {
  const [activeItem, setActiveItem] = useState(null);

  // Items for the grid
  const items = [
    { id: 0, title: 'Start Prediction', icon: <FaVial />, link: '/predict', description: 'Use our AI-powered tool to check your diabetes risk.' },
    { id: 1, title: 'Prevention Tips', icon: <FaShieldAlt />, link: '/prevention', description: 'Helpful lifestyle tips to prevent or manage diabetes.' },
    { id: 2, title: 'Check My Risk', icon: <FaChartBar />, link: '/myrisk', description: 'Evaluate your current health and daily habits.' },
    { id: 3, title: 'Diabetes Symptoms', icon: <FaStethoscope />, link: '/symptoms', description: 'Understand the early warning signs like thirst, fatigue, and vision changes.' },
    { id: 4, title: 'Nearby Testing', icon: <FaMapMarkerAlt />, link: '/testing', description: 'Locate nearby clinics or labs for diabetes screening.' },
    { id: 5, title: 'Languages & Help', icon: <FaGlobe />, link: '/language', description: 'Switch between Tamil, Sinhala, or English. Get support.' },
  ];

  return (
    <div className="home-page">
      <video autoPlay loop muted playsInline className="background-video">
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>

      <h1 className="home-heading">
        Welcome to <span className="brand-highlight">DiaSaver</span>
      </h1>
      <p className="subtitle">
        DiaSaver helps you assess your diabetes risk, spot early symptoms, and follow simple lifestyle steps to stay healthy and in control.
      </p>

      <div className="grid">
        {items.map((item) => (
          <Link
            to={item.link}
            key={item.id}
            className={`item item-${item.id} ${activeItem === item.id ? 'clicked' : ''}`}
            onClick={() => setActiveItem(item.id)} // Update active item on click
          >
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p className="desc">{item.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
