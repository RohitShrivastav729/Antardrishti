import "./Audience.css";

import img1 from "../../../assets/images/audience-professionals.png";
import img2 from "../../../assets/images/audience-stress.png";
import img3 from "../../../assets/images/audience-beginners.png";
import img4 from "../../../assets/images/audience-weight.png";

export default function Audience(){
  return (
    <section className="audience section">

      <div className="container">

        <div className="audience__header text-center">
          <p className="audience__tag">WHO THIS IS FOR</p>

          <h2>
            Designed for Modern,
            Demanding Lives
          </h2>

          <p>
            Antardrishti is especially suited for individuals who seek
            balance, strength and mental clarity without extreme routines.
          </p>
        </div>

        <div className="audience__grid">

          {/* CARD 1 */}
          <div className="audience__card">
            <img src={img1} alt="Working Professionals" />

            <div className="audience__overlay">
              <h4>Working Professionals</h4>
              <p>Long sitting hours, screen fatigue and posture strain.</p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="audience__card">
            <img src={img2} alt="Stress and Mental Overload" />

            <div className="audience__overlay">
              <h4>Stress & Mental Overload</h4>
              <p>Constant pressure, poor sleep and restless energy.</p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="audience__card">
            <img src={img3} alt="Yoga Beginners" />

            <div className="audience__overlay">
              <h4>Beginners to Yoga</h4>
              <p>Safe and structured start without intensity.</p>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="audience__card">
            <img src={img4} alt="Weight Balance" />

            <div className="audience__overlay">
              <h4>Sustainable Weight Balance</h4>
              <p>Gradual transformation through consistency.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}