
import "./AboutPreview.css";
import Button from "../../../components/ui/Button";
import aboutImage from "../../../assets/images/about.jpeg";

export default function AboutPreview(){
  return (
    <section className="about-preview section">

      <div className="container about-preview__grid">

        <div className="about-preview__left" data-aos="fade-right">
          <img 
            src={aboutImage} 
            alt="Therapeutic Yoga Session"
          />
        </div>

        <div className="about-preview__right" data-aos="fade-left">

          <p className="about-preview__tag">
            THE PRACTICE OF INNER VISION
          </p>

          <h2>
            Yoga That Adapts to
            <br/> Modern Life
          </h2>

          <p>
            Antardrishti approaches yoga as a grounded and therapeutic 
            discipline — not performance. It is designed to support your body, 
            steady your mind and build sustainable strength for real, 
            demanding lives.
          </p>

          <p>
            Founded by Kapil, a premium yoga therapist and corporate 
            wellness consultant, Antardrishti bridges traditional Hatha yoga 
            with modern therapeutic understanding.
          </p>

          <Button href="/about">
            Learn More About Kapil
          </Button>

        </div>

      </div>
    </section>
  );
}