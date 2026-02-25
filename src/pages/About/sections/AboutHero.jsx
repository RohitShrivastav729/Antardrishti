
import "./AboutHero.css";
import kapilImage from "../../../assets/images/kapil.jpg";

export default function AboutHero(){
  return (
    <section className="about-hero section">

      <div className="container about-hero__grid">

        <div className="about-hero__left">

          <p className="about-hero__tag">ABOUT ANTARDRISHTI</p>

          <h1>
            Yoga Guided by Awareness,
            <br/> Experience and Care
          </h1>

          <p>
            Antardrishti is founded and led by Kapil, a yoga therapist and
            wellness coach dedicated to helping modern individuals build
            strength, mobility and mental clarity through sustainable practice.
          </p>

          <p>
            With over 8 years of teaching experience across professionals,
            corporate teams and individuals, his approach blends traditional
            Hatha yoga with practical therapeutic understanding.
          </p>

        </div>

        <div className="about-hero__right">
          <img src={kapilImage} alt="Kapil Yoga Therapist"/>
        </div>

      </div>

    </section>
  );
}