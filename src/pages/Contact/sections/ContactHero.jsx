import "./ContactHero.css";
import heroImg from "../../../assets/images/contact-hero.png";

export default function ContactHero(){
  return (
    <section 
      className="contact-hero section"
      style={{ backgroundImage: `url(${heroImg})` }}
    >

      <div className="container text-center contact-hero__inner">

        <p className="contact-hero__tag">GET IN TOUCH</p>

        <h1 className="hero-title">
          <span>Begin</span>
          <span>Your</span>
          <span>Wellness</span>
          <br/>
          <span>Journey</span>
          <span>with</span>
          <span>Antardrishti</span>
        </h1>

        <p className="hero-desc">
          Whether you are exploring yoga for the first time or seeking
          therapeutic guidance, you are welcome to connect and begin
          at your own pace.
        </p>

      </div>

    </section>
  );
}