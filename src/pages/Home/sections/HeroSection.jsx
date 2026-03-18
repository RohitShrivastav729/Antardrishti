import "./HeroSection.css";
import Button from "../../../components/ui/Button";
import heroImage from "../../../assets/images/hero.jpeg";

import ImageCarousel from "../../../components/ui/ImageCarousel";

import img1 from "../../../assets/images/sapna2.jpeg";
import img2 from "../../../assets/images/sapna3.jpeg";
import img3 from "../../../assets/images/kapil6.jpeg";
import img4 from "../../../assets/images/kapil10.jpeg";

const heroImages = [img1, img3, img2, img4];

export default function HeroSection() {
  return (
    <section className="hero section">
      <div className="container hero__grid">
        <div className="hero__left">
          <p className="hero__tag">Inner Vision for Modern Living</p>

          <h1>A Calm Space to Heal, Strengthen and Rebalance</h1>

          <p className="hero__desc">
            Antardrishti is a premium yoga and wellness space designed for
            modern lifestyles. Build strength, reduce stress and reconnect with
            yourself through therapeutic yoga.
          </p>

          <div className="hero__buttons">
            <a href="/contact" className="btn btn-primary">
              Book Trial Class
            </a>

            <a
              href="https://wa.me/919416514652"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              WhatsApp Enquiry
            </a>
          </div>
        </div>

        <div className="hero__right">
          <ImageCarousel images={heroImages} variant="hero" />
        </div>
      </div>
    </section>
  );
}
