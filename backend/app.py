from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np

# ✅ Create the Flask app
app = Flask(__name__)
CORS(app)  # Let React talk to Flask

# ✅ Load your trained model
model = joblib.load("diabetes_model.pkl")

# ✅ Define a route for prediction
@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()

        features = np.array([
            data['Pregnancies'],
            data['Glucose'],
            data['BloodPressure'],
            data['SkinThickness'],
            data['Insulin'],
            data['BMI'],
            data['DiabetesPedigreeFunction'],
            data['Age']
        ]).reshape(1, -1)

        prediction = model.predict(features)[0]
        result = "High Risk" if prediction == 1 else "Low Risk"

        return jsonify({'result': result})

    except Exception as e:
        return jsonify({'error': str(e)}), 400

# ✅ Run the server
if __name__ == '__main__':
    app.run(debug=True)
