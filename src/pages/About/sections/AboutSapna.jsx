
import "./AboutSapna.css";
import sapnaImage from "../../../assets/images/sapna1.jpeg";

export default function AboutSapna() {
  return (
    <section className="about-sapna section">

      <div className="container about-sapna__grid">

        {/* CONTENT */}

        <div className="about-sapna__content">

          <p className="about-sapna__tag">
            ABOUT SAPNA
          </p>

          <h2>
            A Holistic Vision
            <br/>
            for Inner Well-Being
          </h2>

          <p>
            Sapna is the founder of Antardrishti Yoga & Wellness and a dedicated
            yoga practitioner with over six years of experience in holistic
            health and therapeutic wellness practices.
          </p>

          <p>
            She holds a Master’s Degree in Yoga, a Postgraduate Diploma in Yoga
            Science, and is also a Certified Sound Healing Practitioner. Her
            work blends traditional yogic knowledge with modern wellness
            approaches that respect today’s lifestyle and emotional needs.
          </p>

          <p>
            Through yoga, breathwork, meditation and sound healing, her sessions
            create a calm and nurturing environment where individuals can relax,
            restore balance and reconnect with themselves.
          </p>

          {/* EXPERTISE */}

          <div className="about-sapna__skills">

            <span>Yoga Therapy</span>
            <span>Sound Healing</span>
            <span>Meditation</span>
            <span>Breathwork</span>
            <span>Holistic Wellness</span>

          </div>

          {/* APPROACH */}

          <div className="about-sapna__points">

            <div>
              <h4>Gentle Guidance</h4>
              <p>Sessions built around individual pace and comfort.</p>
            </div>

            <div>
              <h4>Emotional Balance</h4>
              <p>Focus on calmness, mental clarity and inner alignment.</p>
            </div>

            <div>
              <h4>Sound Healing</h4>
              <p>Deep relaxation through therapeutic sound practices.</p>
            </div>

          </div>

        </div>

        {/* IMAGE */}

        <div className="about-sapna__image">
          <img
            src={sapnaImage}
            alt="Sapna Yoga Practitioner"
          />
        </div>

      </div>

    </section>
  );
}