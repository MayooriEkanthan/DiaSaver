import React from 'react';
import './MyRisk.css'; // Import the MyRisk CSS file

function MyRisk() {
  return (
    <div className="myrisk-container">
      <h2>🩺 Know Your Diabetes Risk — Stay One Step Ahead</h2>

      <p>
        Your health is your greatest wealth — and it starts with awareness. If you’ve already been diagnosed with diabetes, regular checkups and proper care help you avoid complications and live a healthier, happier life.
      </p>

      <p>
        But even if you don’t have diabetes yet, you could still be at risk without knowing it. Your risk level high, moderate, or low  depends on factors like age, body weight (BMI), family history, blood sugar levels, and your daily habits.
      </p>

      <div className="risk-levels">
        <div className="risk-level high-risk">
          <h3>✨ High Risk:</h3>
          <ul>
            <li>You are overweight or have a high Body Mass Index (BMI)</li>
            <li>You have close family members with diabetes</li>
            <li>Your blood tests show higher than normal glucose (prediabetes)</li>
            <li>You are over 40 and not physically active</li>
          </ul>
        </div>

        <div className="risk-level moderate-risk">
          <h3>✨ Moderate Risk:</h3>
          <ul>
            <li>You may be slightly overweight</li>
            <li>Your lifestyle is irregular  sometimes active, sometimes not</li>
            <li>You have mild risk factors but normal blood sugar</li>
          </ul>
        </div>

        <div className="risk-level low-risk">
          <h3>✨ Low Risk:</h3>
          <ul>
            <li>You have a healthy weight and BMI</li>
            <li>You eat balanced, nutritious meals</li>
            <li>You exercise regularly</li>
            <li>You have normal blood sugar levels and no family history of diabetes</li>
          </ul>
        </div>
      </div>

      <p>
        🧪 <strong>How do you know your level?</strong>
        Doctors and hospitals check your risk using simple tests like BMI measurements, blood glucose tests, and age-based screenings. The earlier you check, the better you can manage or prevent diabetes in the future.
      </p>

      <p>
        ✔ Don’t wait — prevention is always better than cure!
      </p>

      <p>
        Use the trusted hospital list to find a diabetes care centre near you. Click the Google Maps links to get directions, book an appointment, and take the first step towards a healthier tomorrow.
      </p>
    </div>
  );
}

export default MyRisk;
