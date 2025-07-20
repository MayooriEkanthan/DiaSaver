import React from "react";
import "./style.css";

export default function AboutUs() {
  return (
    <div className="container">
      <header className="header-section">
        <h1> About DiaSaver</h1>
        <p className="tagline">
          <strong>Your Health, Our Priority.</strong>
        </p>
      </header>

      <section className="intro-card card">
        <p>
          Managing diabetes doesn’t have to be overwhelming. <strong>DiaSaver</strong> is your smart
          companion in the journey to a healthier, more balanced life. We blend{" "}
          <em>technology, care, and simplicity</em> to help you monitor your sugar levels, stay on
          top of your medication, and live with confidence every single day.
        </p>
      </section>

      <section className="features-card card">
        <h2> What Makes DiaSaver Special?</h2>
        <ul className="features-list">
          <li>
            <div className="icon-box">📈</div>
            Glucose Made Simple – Track your sugar levels with ease and spot trends that matter.
          </li>
          <li>
            <div className="icon-box">⏰</div>
            Never Miss a Beat,Set medication reminders so you stay on schedule, stress-free.
          </li>
          <li>
            <div className="icon-box">🥗</div>
            Eat, Move, Live Better : Get food tips, activity suggestions, and lifestyle advice.
          </li>
          <li>
            <div className="icon-box">📊</div>
            See the Bigger Picture , View easy to understand reports for yourself or your doctor.
          </li>
          <li>
            <div className="icon-box">🚨</div>
            Quick Access in Emergencies  Reach help instantly , because your safety comes first.
          </li>
        </ul>
      </section>

      <section className="mission-card card">
        <h2> Our Mission</h2>
        <p>
          To transform diabetes care into a smooth, empowering experience powered by{" "}
          <strong>digital health tools</strong>, driven by <strong>real needs</strong>. We’re here
          to support you every step of the way.
        </p>
      </section>

      <footer className="footer-message card">
        <h2>💬 A Message From Us</h2>
        <p>
          DiaSaver isn’t just an app  it’s a movement. A movement to make diabetes care{" "}
          <strong>simpler</strong>, <strong>smarter</strong>, and more <strong>human</strong>.
          <br />
          Together, let’s rewrite the story of diabetes, one healthy choice at a time.
        </p>
      </footer>
    </div>
  );
}