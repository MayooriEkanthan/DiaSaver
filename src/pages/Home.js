import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Home() {
  const items = [
    { id: 0, title: "Start Prediction to ensure you have diabetic", icon: "🧪", link: "/predict" },
    { id: 1, title: "Prevention Tips", icon: "🛡️", link: "/prevention" },
    { id: 2, title: "Check My Risk", icon: "📊", link: "/myrisk" },
    {
      id: 3,
      title: "Diabetes Symptoms",
      icon: "🩺",
      link: "/symptoms",
      description: "Diabetes is a chronic condition that affects how the body processes blood sugar. When insulin is not properly used or produced, glucose builds up in the blood. Recognizing early symptoms such as fatigue, excessive thirst, blurred vision, frequent urination, and slow-healing wounds can help in early diagnosis and management, preventing serious complications."
    },
    { id: 4, title: "Nearby Testing", icon: "📍", link: "/testing" },
    { id: 5, title: "Languages & Help", icon: "🌐", link: "/language" },
  ];

  return (
    <div className="home-page">
      <h2>Welcome to DiaSaver</h2>
      <p style={{ fontSize: '18px', color: '#555' }}>
        Predict your diabetes risk and get personalized health tips in your language.
      </p>

      <div className="grid">
        {items.map((item) => (
          <div className={`item item-${item.id}`} key={item.id}>
            <Link
              to={item.link}
              style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'block',
                width: '100%',
                height: '100%',
              }}
            >
              <div style={{ fontSize: '2.5rem' }}>{item.icon}</div>
              <h3 style={{ marginTop: '10px' }}>{item.title}</h3>

              {/* ✅ Show description if available */}
              {item.description && (
                <p style={{
                  fontSize: '14px',
                  color: '#666',
                  marginTop: '10px',
                  lineHeight: '1.5',
                  maxHeight: '120px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}>
                  {item.description}
                </p>
              )}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
