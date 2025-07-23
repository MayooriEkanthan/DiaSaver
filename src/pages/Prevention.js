import React from 'react';
import './preven.css';

function Prevention() {
  return (
    <div>
      <div className="predi">
        <h2>Diabetes Prevention Tips</h2>

        <div className="grid">
          <div className="item">
            <h4>For Diabetic Patients</h4>
            <p>
              If you are already diagnosed with diabetes, the goal is to manage your blood sugar levels and prevent complications.
              Stick to a diabetes-friendly meal plan filled with whole grains, lean proteins, and vegetables. Monitor your blood
              glucose regularly, follow your prescribed medications, and stay physically active with daily exercises like walking
              or light aerobics.
            </p>
          </div>

          <div className="item">
            <h4>For Everyone</h4>
            <p>
              Diabetes is a chronic condition that affects millions of people worldwide. Whether you're already diagnosed,
              at risk, or simply want to stay healthy, taking preventive steps is essential to living a long and active life.
              Here's how you can take control.
            </p>
          </div>

          <div className="item">
            <h4>For the General Population</h4>
            <p>
              Even if you're not currently at risk, healthy habits now can protect you in the future. Maintain a balanced diet,
              stay active, limit junk food, and keep a healthy weight. Avoid sitting for too long—move every hour if possible
              and consider regular health screenings.
            </p>
          </div>

          <div className="item">
            <h4>For People at Risk of Diabetes</h4>
            <p>
              If you have a family history of diabetes, are overweight, or have been diagnosed with prediabetes, you're at higher
              risk. Prevention starts with lifestyle changes. Losing even a small amount of weight, exercising regularly, and limiting
              sugar and refined carbs can significantly reduce your risk.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prevention;
