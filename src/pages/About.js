import React from "react";
import { FaHeartbeat, FaCogs, FaPhoneAlt, FaLightbulb } from 'react-icons/fa'; // icons for new features
import './About.css';

export default function AboutUs() {
  const features = [
    { id: 0, title: 'Health Tracking', icon: <FaHeartbeat />, link: '/track', description: 'Track your blood glucose levels, meals, and medications in one easy place.' },
    { id: 1, title: 'Personalized Health Plans', icon: <FaCogs />, link: '/plans', description: 'Receive personalized plans based on your health data and goals.' },
    { id: 2, title: 'Emergency Access', icon: <FaPhoneAlt />, link: '/emergency', description: 'Access emergency contacts and services instantly during critical moments.' },
    { id: 3, title: 'Health Insights', icon: <FaLightbulb />, link: '/insights', description: 'Get data-driven insights into your health trends and take control of your well-being.' },
  ];

  return (
    <div className="about-container">
      <header className="header-section">
        <h1>About DiaSaver</h1>
        <p className="tagline">
          <strong>Your Health, Our Priority.</strong>
        </p>
      </header>

      <section className="intro-card card">
        <p>
          Managing diabetes doesn’t have to be overwhelming. <strong>DiaSaver</strong> is your smart
          companion in the journey to a healthier, more balanced life. We blend{" "}
          <em>technology, care, and simplicity</em> to help you monitor your sugar levels, stay on
          top of your medication, and live with confidence every single day.
        </p>
      </section>

      <section className="features-card card gradient-card">
        <h2>What We Are Planning to Offer</h2>
        <div className="features-grid">
          {features.map((feature) => (
            <a href={feature.link} key={feature.id} className="feature-item">
              <div className="icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="mission-card card">
        <h2>Our Mission</h2>
        <p>
          At DiaSaver, our mission is to simplify diabetes management and make it more accessible. We want to empower individuals with diabetes by providing the tools and insights they need to lead a healthier, more informed life. By focusing on personalized care, we are creating an experience that puts you in control of your health.
        </p>
      </section>

      <footer className="footer-message card">
        <h2>Join the DiaSaver Community</h2>
        <p>
          DiaSaver is not just a tool; it's a movement. A movement towards better health, smarter management, and an empowered community. Join us today and start taking control of your diabetes journey.
        </p>
      </footer>
    </div>
  );
}
