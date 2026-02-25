
import "./ServicesGrid.css";

export default function ServicesGrid(){
  return (
    <section className="services-grid section">

      <div className="container">

        <h2 className="text-center">Yoga Services at Antardrishti</h2>

        <div className="services-grid__wrap">

          <div className="service-card">
            <h3>Online Yoga Classes</h3>
            <p>
              Guided online sessions for flexibility, strength and stress
              reduction from the comfort of your home.
            </p>
          </div>

          <div className="service-card">
            <h3>Offline Studio Sessions</h3>
            <p>
              In-person yoga sessions focused on posture, mobility and
              therapeutic improvement.
            </p>
          </div>

          <div className="service-card">
            <h3>Personal Home Sessions</h3>
            <p>
              One-to-one sessions tailored to your health goals and physical
              condition.
            </p>
          </div>

          <div className="service-card">
            <h3>Therapeutic Yoga</h3>
            <p>
              Specialized sessions for back pain, stiffness, recovery and
              long-term mobility.
            </p>
          </div>

          <div className="service-card">
            <h3>Corporate Yoga Programs</h3>
            <p>
              Structured wellness sessions designed for teams, posture health
              and stress management.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}