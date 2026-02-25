
import "./Audience.css";

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

          <div className="audience__card">
            <h4>Working Professionals</h4>
            <p>
              Long sitting hours, screen fatigue and posture-related strain.
            </p>
          </div>

          <div className="audience__card">
            <h4>Stress & Mental Overload</h4>
            <p>
              Constant pressure, poor sleep and restless energy.
            </p>
          </div>

          <div className="audience__card">
            <h4>Beginners to Yoga</h4>
            <p>
              A safe and structured start without intensity or pressure.
            </p>
          </div>

          <div className="audience__card">
            <h4>Sustainable Weight Balance</h4>
            <p>
              Gradual and healthy transformation through consistency.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}