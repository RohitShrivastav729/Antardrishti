
import "./Experience.css";

export default function Experience(){
  return (
    <section className="experience section-sm">

      <div className="container">

        <h2 className="text-center">Experience & Credentials</h2>

        <div className="experience__grid">

          <div className="experience__card">
            <h3>8+ Years</h3>
            <p>Professional teaching experience</p>
          </div>

          <div className="experience__card">
            <h3>M.A. in Yoga</h3>
            <p>Academic training & certifications</p>
          </div>

          <div className="experience__card">
            <h3>100+ Students</h3>
            <p>Guided through consistent practice</p>
          </div>

          <div className="experience__card">
            <h3>Corporate Programs</h3>
            <p>Workshops for professionals & teams</p>
          </div>

        </div>

      </div>
    </section>
  );
}