import React from 'react';
import './Language.css'; // Importing the CSS file

function Language() {
  return (
    <div className="language-container">
      <h2>World Diabetes Foundation’s Project WDF09‑0411 in Sri Lanka</h2>

      <p>
        The World Diabetes Foundation’s project WDF09‑0411 is making a meaningful difference in Sri Lanka by ensuring that vital diabetes care reaches local communities in the languages they understand best Sinhala and Tamil. Through this initiative, hundreds of doctors, nurses, and health workers receive practical training in local languages, empowering them to deliver clear, compassionate care to people across the country.
      </p>

      <p>
        The project also organizes free community screening camps, school programs, and workplace sessions, sharing life changing information through leaflets, posters, and talks designed in Sinhala and Tamil. By breaking down language barriers, the World Diabetes Foundation helps families learn how to prevent, detect, and manage diabetes building healthier communities one person at a time.
      </p>

      <p>
        Learn more about this impactful work at{' '}
        <a href="https://worlddiabetesfoundation.org" target="_blank" rel="noopener noreferrer">
          worlddiabetesfoundation.org
        </a>.
      </p>

      {/* Previous content for DASL */}
      <h2>Diabetes Association of Sri Lanka (DASL) and Its Role in Local Communities</h2>

      <p>
        The Diabetes Association of Sri Lanka plays a big role in helping local people manage and prevent diabetes by giving information and services in Sinhala and Tamil, the main languages spoken in Sri Lanka. They conduct free awareness programs, workshops, and community screenings in villages, towns, and schools, making sure that people understand diabetes, how to prevent it, and how to live with it. When they do health talks or camps, they use clear, simple Sinhala or Tamil, so everyone young or old can follow.
      </p>

      <p>
        They also provide leaflets, posters, and videos in local languages about healthy eating, exercising, taking insulin, and controlling blood sugar. For patients who come to the National Diabetes Centre, doctors, nurses, and counsellors speak in Sinhala and Tamil to explain test results, treatments, and diet plans in a way that families can easily understand.
      </p>

      <p>
        This local-language support is very important because it helps break myths and misunderstandings about diabetes. It encourages people to get tested early, take medicine properly, and follow healthy habits. By using Sinhala and Tamil, DASL builds trust with the community and makes sure no one is left behind due to a language barrier.
      </p>

      <p>
        For more information, visit the{' '}
        <a href="https://www.diabetessrilanka.org/" target="_blank" rel="noopener noreferrer">
          official website of the Diabetes Association of Sri Lanka (DASL)
        </a>.
      </p>
    </div>
  );
}

export default Language;
