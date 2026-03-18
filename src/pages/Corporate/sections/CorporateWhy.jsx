
import "./CorporateWhy.css";
import stressImg from "../../../assets/images/stress.png";
import postureImg from "../../../assets/images/posture.png";
import focusImg from "../../../assets/images/focus.png";
import { useNavigate } from "react-router-dom";


export default function CorporateWhy() {
  const navigate = useNavigate();

  const data = [
    {
      title: "Reduce Workplace Stress",
      desc: "Guided sessions to help employees manage pressure and maintain mental balance.",
      img: stressImg,
    },
    {
      title: "Posture & Back Pain Relief",
      desc: "Corrective practices for long sitting hours and screen fatigue.",
      img: postureImg,
    },
    {
      title: "Improve Focus & Energy",
      desc: "Breath and movement practices that enhance daily productivity.",
      img: focusImg,
    },
  ];

  return (
    <section className="corp-why section">
      <div className="container">

        <h2 className="text-center">
          Supporting Employee Wellbeing & Productivity
        </h2>

        <div className="corp-why__grid">
          {data.map((item, index) => (
            <div key={index} className="corp-card">
              <img src={item.img} alt={item.title} />

              <div className="corp-overlay">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>

                <button onClick={() => navigate("/contact")}>
                  Start Session
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}