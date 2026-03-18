import "./ServicesGrid.css";
import { useNavigate } from "react-router-dom";

import onlineImg from "../../../assets/images/onlineSessions.png";
import offlineImg from "../../../assets/images/offlineStudioSessions.png";
import homeImg from "../../../assets/images/personalHomeSessions.png";
import therapyImg from "../../../assets/images/TherapeuticSessions.png";
import corporateImg from "../../../assets/images/corporateSessions.png";

export default function ServicesGrid(){

  const navigate = useNavigate();

  const services = [
    {
      title: "Online Yoga Classes",
      desc: "Guided sessions from the comfort of your home.",
      img: onlineImg
    },
    {
      title: "Offline Studio Sessions",
      desc: "In-person sessions for posture and mobility.",
      img: offlineImg
    },
    {
      title: "Personal Home Sessions",
      desc: "One-to-one personalized yoga sessions.",
      img: homeImg
    },
    {
      title: "Therapeutic Yoga",
      desc: "Recovery, mobility and pain management.",
      img: therapyImg
    },
    {
      title: "Corporate Yoga Programs",
      desc: "Wellness sessions for teams and organizations.",
      img: corporateImg
    }
  ];

  return (
    <section className="services-grid section">

      <div className="container">

        <h2 className="text-center">Yoga Services at Antardrishti</h2>

        <div className="services-grid__wrap">

          {services.map((item, index) => (
            <div key={index} className="service-card">

              <img src={item.img} alt={item.title} />

              <div className="service-overlay">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>

                <button onClick={() => navigate("/contact")}>
                  Enquire Now
                </button>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}