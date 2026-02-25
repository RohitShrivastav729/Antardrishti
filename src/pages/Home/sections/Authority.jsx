
import "./Authority.css";
import Button from "../../../components/ui/Button";
import kapilImage from "../../../assets/images/kapil.jpg";

export default function Authority(){
  return (
    <section className="authority section">

      <div className="container authority__grid">

        {/* LEFT CONTENT */}
        <div className="authority__left" data-aos="fade-right">

          <p className="authority__tag">
            MEET YOUR GUIDE
          </p>

          <h2>
            Yoga Guided by Experience,
            <br/> Adapted for Real Life
          </h2>

          <p>
            Antardrishti is founded and led by Kapil, a premium yoga therapist
            and corporate wellness consultant with over 8 years of teaching
            experience across working professionals, organizations and
            high-performance individuals.
          </p>

          <p>
            His approach combines traditional Hatha yoga with therapeutic
            understanding, focusing on safe movement, breath awareness and
            sustainable progress rather than intensity.
          </p>

          <div className="authority__stats">

            <div>
              <h3>8+ Years</h3>
              <span>Teaching Experience</span>
            </div>

            <div>
              <h3>100+</h3>
              <span>Students Guided</span>
            </div>

            <div>
              <h3>Corporate</h3>
              <span>Wellness Programs</span>
            </div>

          </div>

          <Button href="/about">
            Read Full Profile
          </Button>

        </div>

        {/* RIGHT IMAGE */}
        <div className="authority__right" data-aos="fade-left">
          <img src={kapilImage} alt="Kapil Yoga Therapist"/>
        </div>

      </div>
    </section>
  );
}