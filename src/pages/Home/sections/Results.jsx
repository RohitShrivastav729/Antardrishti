
import "./Results.css";

export default function Results(){
  return (
    <section className="results section">

      <div className="container">

        <div className="results__header text-center">
          <p className="results__tag">WHAT YOU MAY NOTICE</p>

          <h2>
            A Gentle Yet Result-Oriented
            <br/> Approach to Wellness
          </h2>

          <p>
            With consistent practice, students begin to experience both
            physical and mental transformation in a sustainable way.
          </p>
        </div>

        <div className="results__grid">

          <div className="results__col">
            <h3>Within Weeks</h3>

            <ul>
              <li>Better sleep quality</li>
              <li>Reduced daily stress</li>
              <li>Improved flexibility</li>
              <li>Breathing awareness</li>
            </ul>
          </div>

          <div className="results__col">
            <h3>With Continued Practice</h3>

            <ul>
              <li>Relief from back & posture pain</li>
              <li>Healthy weight balance</li>
              <li>Higher energy levels</li>
              <li>Mental clarity & discipline</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}