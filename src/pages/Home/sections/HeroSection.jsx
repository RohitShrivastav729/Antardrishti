import "./HeroSection.css";
import Button from "../../../components/ui/Button";
import heroImage from "../../../assets/images/hero.jpeg";

export default function HeroSection(){
  return (
    <section className="hero">

      <div className="container hero__grid">

        {/* LEFT TEXT */}
        <div className="hero__left" data-aos="fade-up">

          <p className="hero__tag">
            INNER VISION FOR MODERN LIVING
          </p>

          <h1>
            A Calm Space to Heal,
            Strengthen and Rebalance
          </h1>

          <p className="hero__desc">
            Antardrishti is a premium yoga therapy and wellness space 
            created for modern, demanding lives. Build strength, reduce 
            stress and restore balance through therapeutic and mindful yoga.
          </p>

          <div className="hero__buttons">
            <Button href="/contact">
              Book Trial Session
            </Button>

            <Button
              variant="outline"
              href="https://wa.me/919416514652"
            >
              WhatsApp Enquiry
            </Button>
          </div>

          <p className="hero__location">
            Noida & Delhi NCR • Online & Offline Sessions
          </p>

        </div>

        {/* RIGHT IMAGE */}
        <div className="hero__right">
          <img src={heroImage} alt="Yoga therapy"/>
        </div>

      </div>
    </section>
  );
}