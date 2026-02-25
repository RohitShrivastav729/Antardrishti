
import "./Philosophy.css";

export default function Philosophy(){
  return (
    <section className="philosophy section">

      <div className="container philosophy__inner">

        <h2 className="text-center">
          A Grounded and Practical Approach
        </h2>

        <p className="text-center philosophy__lead">
          Yoga at Antardrishti is not about extreme flexibility or rigid routines.
          It is about building awareness, respecting the body and progressing
          with steadiness.
        </p>

        <div className="philosophy__grid">

          <div>
            <h4>Therapeutic Focus</h4>
            <p>
              Supporting recovery, posture correction and mobility through
              mindful movement.
            </p>
          </div>

          <div>
            <h4>Sustainable Strength</h4>
            <p>
              Building a functional and stable body suited to modern life.
            </p>
          </div>

          <div>
            <h4>Mental Clarity</h4>
            <p>
              Practices that reduce stress and improve focus naturally.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}