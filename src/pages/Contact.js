import React from 'react';
import './Contact.css';

const team = [
  {
    name: 'Kisara',
    image: '/team/kisara.jpg',
    email: 'kisara@email.com',
    phone: '+94 71 123 4567',
  },
  {
    name: 'Shaganjaly',
    image: '/team/shaganjaly.jpg',
    email: 'shagan@email.com',
    phone: '+94 71 234 5678',
  },
  {
    name: 'Gayan',
    image: '/team/gayan.jpg',
    email: 'gayan@email.com',
    phone: '+94 71 345 6789',
  },
  {
    name: 'Aysha',
    image: '/team/aysha.jpg',
    email: 'aysha@email.com',
    phone: '+94 71 456 7890',
  },
  {
    name: 'Hazna',
    image: '/team/hazna.jpg',
    email: 'hazna@email.com',
    phone: '+94 71 567 8901',
  },
];

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Meet Our Team</h1>
      <div className="team-grid">
        {team.map((member, idx) => (
          <div className="team-card" key={idx} draggable>
            <img src={member.image} alt={member.name} className="team-photo" />
            <h3>{member.name}</h3>
            <p><strong>Email:</strong> {member.email}</p>
            <p><strong>Phone:</strong> {member.phone}</p>
          </div>
        ))}
      </div>

      <div className="common-contact">
        <h2>Contact DiaSaver</h2>
        <p>Email: <a href="mailto:info@diasaver.lk">info@diasaver.lk</a></p>
        <p>Website: <a href="https://diasaver.lk">diasaver.lk</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/company/diasaver" target="_blank" rel="noreferrer">linkedin.com/company/diasaver</a></p>
        <p>Instagram: <a href="https://instagram.com/diasaver" target="_blank" rel="noreferrer">@diasaver</a></p>
        <p>Facebook: <a href="https://facebook.com/diasaver" target="_blank" rel="noreferrer">facebook.com/diasaver</a></p>
      </div>
    </div>
  );
};

export default Contact;
