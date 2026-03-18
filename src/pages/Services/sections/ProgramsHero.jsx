import "./ProgramsHero.css";
import banner from "../../../assets/images/programs-heros.png"; // 👈 CLEAN image

export default function ProgramsHero(){
  return (
    <section className="programs-hero">

      {/* BACKGROUND IMAGE */}
      <div 
        className="programs-hero__bg"
        style={{ backgroundImage: `url(${banner})` }}
      />

      {/* OVERLAY */}
      <div className="programs-hero__overlay" />

      {/* CONTENT */}
      <div className="container programs-hero__inner text-center">

        <p className="programs-hero__tag">
          PROGRAMS & SESSIONS
        </p>

        <h1>
          Practical Yoga for Modern Lifestyles
        </h1>

        <p>
          Antardrishti offers flexible yoga programs designed for working
          professionals, beginners and organizations seeking sustainable
          physical and mental wellness.
        </p>

      </div>

    </section>
  );
}