
import "./CorporateOffer.css";

export default function CorporateOffer(){
  return (
    <section className="corp-offer section-sm">

      <div className="container">

        <h2 className="text-center">Program Formats</h2>

        <div className="corp-offer__grid">

          <div className="offer-card">
            <h4>On-site Sessions</h4>
            <p>Yoga sessions at office locations.</p>
          </div>

          <div className="offer-card">
            <h4>Online Corporate Sessions</h4>
            <p>Live guided sessions for remote teams.</p>
          </div>

          <div className="offer-card">
            <h4>Workshops & Wellness Days</h4>
            <p>Special sessions for events and retreats.</p>
          </div>

          <div className="offer-card">
            <h4>Posture & Desk Yoga</h4>
            <p>Short routines for daily office wellness.</p>
          </div>

        </div>

      </div>
    </section>
  );
}