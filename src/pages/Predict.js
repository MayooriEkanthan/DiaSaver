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
 // 📝 Placeholders for each field
 const placeholders = {
  Pregnancies: 'Number of pregnancies if you are a man put "0"',
  Glucose: 'Plasma glucose concentration',
  BloodPressure: '120/80  - put Diastolic blood pressure(80) -(mm Hg)',
  SkinThickness: 'Triceps skin fold thickness, skin thickness of average human is between 0.5 - 4(mm)',
  Insulin: '2-Hour serum insulin (mu U/ml)',
  BMI: 'Body mass index (weight/height²)',
  DiabetesPedigreeFunction: 'Family risk score based on relatives with diabetes.The number is usually between 0.0 and 2.5.',
  Age: 'Age in years',
};
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

  // Placeholder text mapping for each field
  const placeholders = {
    Pregnancies: 'Enter the number of pregnancies: (If you are a man, this value is 0. If you are a woman, please enter your count.)',
    Glucose: 'Enter glucose level: (mg/dL - milligrams per deciliter) - (Plasma glucose concentration a 2 hours in an oral glucose tolerance test)',
    BloodPressure: 'Enter Diastolic blood pressure: (mm Hg - millimeters of mercury) - (120/80 mm Hg - 80 is the diastolic blood pressure',
    SkinThickness: 'Enter skin thickness:(mm - millimeters) Triceps skin fold thickness',
    Insulin: 'Enter insulin level: (micro U/mL - micro units per milliliter) - (2-Hour serum insulin)',
    BMI: 'Enter BMI value: (kg/m*2)- (BMI= weight/height*2)',
    DiabetesPedigreeFunction: 'Enter diabetes pedigree function: (A funtion which scores likelihood of diabetes based on family history, normal range can be within 0-2.5',
    Age: 'Enter your age(years):',
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
              placeholder={placeholders[field]} // Add placeholder for each field
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
