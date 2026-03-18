
import "./AboutKapil.css";
import kapilImage from "../../../assets/images/kapil3.jpeg";

export default function AboutKapil() {
  return (
    <section className="about-kapil section">

      <div className="container about-kapil__grid">

        {/* IMAGE */}

        <div className="about-kapil__image">
          <img
            src={kapilImage}
            alt="Kapil Yoga Therapist"
          />
        </div>

        {/* CONTENT */}

        <div className="about-kapil__content">

          <p className="about-kapil__tag">
            ABOUT KAPIL
          </p>

          <h2>
            A Therapeutic Approach
            <br/>
            to Modern Yoga
          </h2>

          <p>
            Kapil is a yoga therapist and corporate wellness consultant with
            over eight years of teaching experience across working professionals,
            organizations and individuals seeking a sustainable approach to
            health and well-being.
          </p>

          <p>
            His work blends traditional Hatha yoga with modern therapeutic
            understanding, helping people improve posture, manage stress and
            build strength without unnecessary intensity.
          </p>

          <p>
            Over the years he has guided professionals, beginners and corporate
            teams toward healthier daily routines through safe movement,
            breath awareness and mindful practice.
          </p>

          {/* EXPERTISE */}

          <div className="about-kapil__skills">

            <span>Therapeutic Yoga</span>
            <span>Posture Correction</span>
            <span>Stress Management</span>
            <span>Corporate Wellness</span>
            <span>Breathwork</span>

          </div>

          {/* EXPERIENCE */}

          <div className="about-kapil__stats">

            <div>
              <h3>8+</h3>
              <p>Years Teaching Experience</p>
            </div>

            <div>
              <h3>100+</h3>
              <p>Students Guided</p>
            </div>

            <div>
              <h3>Corporate</h3>
              <p>Wellness Programs</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}