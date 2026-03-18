import "./CorporateHero.css";
import heroImg from "../../../assets/images/corporate/corporate-hero.png";

export default function CorporateHero(){
  return (
    <section 
      className="corp-hero section"
      style={{ backgroundImage: `url(${heroImg})` }}
    >

      <div className="corp-hero__overlay">

        <div className="container text-center corp-hero__inner">

          <p className="corp-hero__tag">CORPORATE WELLNESS</p>

          <h1>
            Yoga & Wellness Programs
            <br/> for Modern Workplaces
          </h1>

          <p className="innerParagraph">
            Structured yoga sessions designed to reduce stress, improve posture
            and enhance focus for working professionals and teams.
          </p>

        </div>

      </div>

    </section>
  );
}