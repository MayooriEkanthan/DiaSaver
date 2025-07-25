# DiaSaver

DiaSaver is a full-stack web application designed to help users assess their risk of diabetes, learn about prevention, recognize symptoms, and find support resources. The project combines a React-based frontend with a Flask backend that serves a machine learning model for diabetes risk prediction.

---

## Features

- *AI-Powered Diabetes Risk Prediction:*  
  Users can input their health data and receive an instant risk assessment using a trained machine learning model.

- *Prevention Tips:*  
  Practical lifestyle advice for everyone, people at risk, and those already diagnosed with diabetes.

- *Symptom Awareness:*  
  Information on early warning signs and symptoms of diabetes.

- *Risk History:*  
  (Planned) Track your previous predictions and monitor your health trends.

- *Nearby Testing Centers:*  
  Guidance to find local clinics and labs for diabetes testing.

- *Multi-language & Support:*  
  Switch between English, Sinhala, and Tamil. Access help and support resources.

- *About & Contact:*  
  Learn about the DiaSaver mission and meet the team.

---

## Project Structure


backend/
  app.py                # Flask backend with prediction API
  diabetes_model.pkl    # Trained ML model for diabetes prediction

public/
  ...                   # Static assets (icons, video, images, manifest, etc.)

src/
  App.js                # Main React app with routing
  pages/                # All main page components (Home, About, Contact, Predict, etc.)
  ...                   # Stylesheets and supporting files


---

## How It Works

### 1. Diabetes Prediction

- The user fills out a form with health metrics (Pregnancies, Glucose, Blood Pressure, etc.).
- The React frontend sends this data to the Flask backend (/predict endpoint).
- The backend loads a pre-trained model (diabetes_model.pkl) and returns a risk prediction ("High Risk" or "Low Risk").

### 2. Educational Content

- The app provides prevention tips, symptom guides, and general diabetes information.
- Users can access resources in multiple languages and find contact/support info.

---

## Getting Started

### Prerequisites

- *Node.js* and *npm* (for the frontend)
- *Python 3* (for the backend)
- *Flask, **flask-cors, **joblib, **numpy* (Python packages)

### Installation

#### 1. Backend (Flask API)

sh
cd backend
pip install flask flask-cors joblib numpy
python app.py

- The backend runs on http://localhost:5000.

#### 2. Frontend (React App)

sh
npm install
npm start

- The frontend runs on http://localhost:3000.

---

## Usage

- Open [http://localhost:3000](http://localhost:3000) in your browser.
- Navigate using the navbar or the home grid.
- Try the "Start Prediction" feature to assess your diabetes risk.
- Explore prevention, symptoms, and other resources.

---

## Team

See the [Contact](src/pages/Contact.js) page for team members and contact details.

---

## License

This project is for educational and demonstration purposes.  
For clinical use, consult a healthcare professional.

---

## Acknowledgements

- Built with [Create React App](https://github.com/facebook/create-react-app)
- Machine learning model and backend powered by Flask

---

## Screenshots

![luffy-vs-kaido-one-3840x2160-18361](https://github.com/user-attachments/assets/8bf50d94-dee6-4ef4-8876-f0411a4e9424)


---

## Contributing

Pull requests and suggestions are welcome!

---

## Troubleshooting

- If the prediction feature does not work, ensure the Flask backend is running and accessible at localhost:5000.
- For styling issues, check that all CSS files are loaded correctly.

---

## Learn More

- [React Documentation](https://reactjs.org/)
- [Flask Documentation](https://flask.palletsprojects.com/)
- [Diabetes Information (WHO)](https://www.who.int/news-room/fact-sheets/detail/diabetes)
