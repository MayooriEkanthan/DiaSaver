import React, { useState } from 'react';
import './Predict.css'; // optional styling file

function Predict() {
  const [form, setForm] = useState({
    Pregnancies: '',
    Glucose: '',
    BloodPressure: '',
    SkinThickness: '',
    Insulin: '',
    BMI: '',
    DiabetesPedigreeFunction: '',
    Age: '',
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      setResult(data.result || data.error);
    } catch (error) {
      setResult('❌ Error: Could not connect to the server.');
    }
  };

  return (
    <div className="predict-page">
      <h2>🧪 Start Your Diabetes Prediction</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(form).map((field) => (
          <div key={field} style={{ marginBottom: '10px' }}>
            <label>{field}:</label>
            <input
              type="number"
              name={field}
              value={form[field]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <button type="submit">Predict</button>
      </form>

      {result && (
        <p style={{ marginTop: '20px', fontWeight: 'bold', fontSize: '18px' }}>
          ✅ Result: {result}
        </p>
      )}
    </div>
  );
}

export default Predict;
