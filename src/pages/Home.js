import React from 'react';
import '../App.css';

function Home() {
  const items = [
    { id: 0, title: "Start Prediction", icon: "🧪" },
    { id: 1, title: "Prevention Tips", icon: "🛡️" },
    { id: 2, title: "Check My Risk", icon: "📊" },
    { id: 3, title: "Diabetes Symptoms", icon: "🩺" },
    { id: 4, title: "Nearby Testing", icon: "📍" },
    { id: 5, title: "Languages & Help", icon: "🌐" },
  ];

  return (
    <div>
      <h2>Welcome to DiaSaver</h2>
      <p style={{ fontSize: '18px', color: '#555' }}>
        Predict your diabetes risk and get personalized health tips in your language.
      </p>

      <div className="grid">
        {items.map((item) => (
          <div className={`item item-${item.id}`} key={item.id}>
            <div style={{ fontSize: '2.5rem' }}>{item.icon}</div>
            <h3 style={{ marginTop: '10px' }}>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
