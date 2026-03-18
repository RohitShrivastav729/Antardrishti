import "./Results.css";

export default function Results(){
  return (
    <section className="results section">

      <div className="container">

        <div className="results__header text-center">
          <p className="results__tag">WHAT YOU MAY NOTICE</p>

          <h2>
            A Gentle Yet Result-Oriented
            <br/> Approach to Wellness
          </h2>

          <p>
            With consistent practice, transformation unfolds gradually —
            physically, mentally and sustainably.
          </p>
        </div>

        <div className="results__timeline">

          {/* LEFT */}
          <div className="results__col">

            <div className="results__badge">Within Weeks</div>

            <ul>
              <li>
                <span>🌙</span>
                Better sleep quality
              </li>
              <li>
                <span>🧘</span>
                Reduced daily stress
              </li>
              <li>
                <span>🤸</span>
                Improved flexibility
              </li>
              <li>
                <span>🌿</span>
                Breathing awareness
              </li>
            </ul>

          </div>

          {/* RIGHT */}
          <div className="results__col">

            <div className="results__badge">With Continued Practice</div>

            <ul>
              <li>
                <span>💆</span>
                Relief from back & posture pain
              </li>
              <li>
                <span>⚖️</span>
                Healthy weight balance
              </li>
              <li>
                <span>⚡</span>
                Higher energy levels
              </li>
              <li>
                <span>🧠</span>
                Mental clarity & discipline
              </li>
            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}