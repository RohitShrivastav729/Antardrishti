
import "./AboutAntardrishti.css";
import aboutImage from "../../../assets/images/antardrishti-space.png";

export default function AboutAntardrishti(){
  return (
    <section className="about-antardrishti section">

      <div className="container about-antardrishti__grid">

        {/* LEFT CONTENT */}

        <div className="about-antardrishti__content">

          <p className="about-antardrishti__tag">
            ABOUT ANTARDRISHTI 
          </p>

          <h2>
            A Calm Space for
            <br/>
            Modern Wellness
          </h2>

          <p>
            Antardrishti is a yoga and wellness space created for people living
            full, demanding lives. Here, yoga is not treated as performance but
            as a supportive practice for better health, clarity and balance.
          </p>

          <p>
            Through a thoughtful blend of traditional Hatha yoga and therapeutic
            understanding, Antardrishti helps individuals move better, breathe
            deeper and reconnect with themselves — physically and mentally.
          </p>

          <p>
            Sessions are designed to be accessible and supportive for beginners,
            working professionals and anyone seeking a calmer, healthier rhythm
            of life.
          </p>

          {/* HIGHLIGHTS */}

          <div className="about-antardrishti__points">

            <div>
              <span>Online & Offline</span>
              <p>Flexible yoga sessions</p>
            </div>

            <div>
              <span>Noida & Delhi NCR</span>
              <p>Local and corporate sessions</p>
            </div>

            <div>
              <span>Beginner Friendly</span>
              <p>Open to all experience levels</p>
            </div>

          </div>

        </div>

        {/* RIGHT IMAGE */}

        <div className="about-antardrishti__left">

          <img
            src={aboutImage}
            alt="Antardrishti Yoga Wellness Space"
          />

        </div>

      </div>

      {/* MEANING SECTION */}

      <div className="container about-antardrishti__meaning">

        <p className="about-antardrishti__tag">
          WHAT ANTARDRISHTI MEANS
        </p>

        <h3>The Practice of Inner Vision</h3>

        <p>
          Antardrishti translates to “inner vision” — the ability to stay
          connected with yourself even when life feels busy or overwhelming.
        </p>

        <p>
          At Antardrishti, yoga is practiced as a grounded and practical
          discipline. It supports the body, steadies the mind and gradually
          builds awareness that carries into everyday life.
        </p>

        <p>
          This approach is not about extreme flexibility or rigid routines.
          It is about listening to your body, respecting its limits and
          strengthening it with patience and care.
        </p>

      </div>

    </section>
  );
}