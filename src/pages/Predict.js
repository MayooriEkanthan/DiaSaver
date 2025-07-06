import React, { useState } from 'react';

function Predict() {
  const [form, setForm] = useState({
    age: '',
    gender: '',
    bmi: '',
    bp: '',
    activity: '',
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.age && form.bmi && form.bp && form.gender && form.activity) {
      const risk = form.bmi > 25 ? 'High Risk' : 'Low Risk';
      setResult(risk);
    } else {
      setResult('Please fill all fields');
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto', padding: '20px' }}>
      <h2>🧪 Start Your Prediction</h2>
      <p>Use our AI tool to check your diabetes risk by entering age, weight, lifestyle, and more.</p>

      <form onSubmit={handleSubmit}>
        <label>Age:</label>
        <input type="number" name="age" value={form.age} onChange={handleChange} required />

        <label>Gender:</label>
        <select name="gender" value={form.gender} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <label>BMI:</label>
        <input type="number" step="0.1" name="bmi" value={form.bmi} onChange={handleChange} required />

        <label>Blood Pressure:</label>
        <input type="number" name="bp" value={form.bp} onChange={handleChange} required />

        <label>Physical Activity:</label>
        <select name="activity" value={form.activity} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="low">Low</option>
          <option value="moderate">Moderate</option>
          <option value="high">High</option>
        </select>

        <button type="submit" style={{ marginTop: '15px' }}>Predict</button>
      </form>

      {result && (
        <p style={{ marginTop: '20px', fontWeight: 'bold' }}>
          Result: {result}
        </p>
      )}
    </div>
  );
}

export default Predict;
