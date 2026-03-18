import "./Authority.css";
import Button from "../../../components/ui/Button";
import ImageCarousel from "../../../components/ui/ImageCarousel";

import kapilImage from "../../../assets/images/kapil3.jpeg";
import sapnaImage from "../../../assets/images/sapna1.jpeg"; 

const trainerImages = [kapilImage, sapnaImage];

export default function Authority(){
  return (
    <section className="authority section">

      <div className="container authority__grid">

        {/* LEFT CONTENT */}
        <div className="authority__left" data-aos="fade-right">

          <p className="authority__tag">
            MEET YOUR GUIDES
          </p>

          <h2>
            Yoga Guided by Experience,
            <br/> Designed for Modern Life
          </h2>

          <p>
            Antardrishti is guided by Kapil and Sapna, two dedicated yoga practitioners
            committed to bringing therapeutic and sustainable wellness practices into
            modern lifestyles.
          </p>

          <p>
            Kapil, a premium yoga therapist and corporate wellness consultant with
            over eight years of teaching experience, specializes in therapeutic yoga,
            movement correction and stress management for working professionals and
            organizations.
          </p>

          <p>
            Sapna, founder of Antardrishti Yoga & Wellness, integrates yoga,
            breathwork, meditation and sound healing to create deeply nurturing
            and restorative wellness experiences.
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
              <h3>Holistic</h3>
              <span>Yoga & Sound Healing</span>
            </div>

          </div>

          <Button href="/about">
            Learn More About Our Approach
          </Button>

        </div>


        {/* RIGHT IMAGE CAROUSEL */}

        <div className="authority__right" data-aos="fade-left">
          <ImageCarousel images={trainerImages} variant="about" />
        </div>

      </div>

    </section>
  );
}