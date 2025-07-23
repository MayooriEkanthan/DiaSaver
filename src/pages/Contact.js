import React, { useState } from 'react';
import './Contact.css';

const team = [
  {
    name: 'E.Mayoori',
    image: '/Mayoori.jpg',
    email: 'mayooriekanthan12@gmail.com',
    phone: '+94 71 123 4567',
  },
  {
    name: 'V.Mathujan',
    image: '/Mathujan.jpg',
    email: 'Vimalarajahmathujan@email.com',
    phone: '+94 71 234 5678',
  },
  {
    name: 'M.M.F.Mushfira',
    image: '/Mushfira.jpg',
    email: 'mushfiramujeeb22@email.com',
    phone: '+94 71 345 6789',
  },
  {
    name: 'M.A.F.Zamha',
    image: '/Zamha.jpg',
    email: 'zamhaameer855194@email.com',
    phone: '+94 71 456 7890',
  },
  {
    name: 'S.Rishikesan',
    image: '/Rishikesan.jpg',
    email: 'bsrishi2003@gmail.com',
    phone: '+94 71 567 8901',
  },
];

const Contact = () => {
  const [clickedCard, setClickedCard] = useState(null); // State to track clicked card

  const handleCardClick = (id) => {
    setClickedCard(id); // Update clicked card
  };

  return (
    <div className="contact-container">
      <h1>Meet Our Team</h1>
      <div className="team-grid">
        {team.map((member, idx) => (
          <div
            className={`team-card ${clickedCard === idx ? 'clicked' : ''}`} // Add clicked class to clicked card
            key={idx}
            draggable
            onClick={() => handleCardClick(idx)} // Handle card click
          >
            <img src={member.image} alt={member.name} className="team-photo" />
            <h3>{member.name}</h3>
            <p><strong>Email:</strong> {member.email}</p>
            <p><strong>Phone:</strong> {member.phone}</p>
          </div>
        ))}
      </div>

      <div className="contact-details">
        <h2>Contact Us</h2>

        {/* Contact Details Section */}
        <div className="contact-info">
          <div className="info-item">
            <h3>Address</h3>
            <p>123 DiaSaver Street, Colombo, Sri Lanka</p>
          </div>
          <div className="info-item">
            <h3>Phone</h3>
            <p>+94 71 123 4567</p>
          </div>
          <div className="info-item">
            <h3>Email</h3>
            <p><a href="mailto:info@diasaver.lk">info@diasaver.lk</a></p>
          </div>
          <div className="info-item">
            <h3>Office Hours</h3>
            <p>Monday - Friday: 9 AM - 6 PM</p>
            <p>Saturday: 10 AM - 2 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

        {/* Social Media Section with Text Links */}
        <div className="social-media">
          <h3>Follow Us</h3>
          <p>
            <a href="https://www.instagram.com/diasaver" target="_blank" rel="noreferrer">Instagram</a>
          </p>
          <p>
            <a href="https://www.facebook.com/diasaver" target="_blank" rel="noreferrer">Facebook</a>
          </p>
          <p>
            <a href="https://www.twitter.com/diasaver" target="_blank" rel="noreferrer">Twitter</a>
          </p>
          <p>
            <a href="https://www.linkedin.com/company/diasaver" target="_blank" rel="noreferrer">LinkedIn</a>
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="contact-form">
          <h3>Get in Touch</h3>
          <form action="mailto:info@diasaver.lk" method="post" enctype="text/plain">
            <div className="form-group">
              <label htmlFor="name">Your Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="4" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
