import "./CorporateOffer.css";
import onsiteImg from "../../../assets/images/corporate/office-yoga.png";
import onlineImg from "../../../assets/images/corporate/onlineOffice-yoga.png";
import workshopImg from "../../../assets/images/corporate/wellness-workshop.png";
import deskImg from "../../../assets/images/corporate/desk-yoga.png";
import { useNavigate } from "react-router-dom";

export default function CorporateOffer(){

  const navigate = useNavigate();

  const data = [
    {
      title: "On-site Sessions",
      desc: "Yoga sessions at office locations.",
      img: onsiteImg,
    },
    {
      title: "Online Corporate Sessions",
      desc: "Live guided sessions for remote teams.",
      img: onlineImg,
    },
    {
      title: "Workshops & Wellness Days",
      desc: "Special sessions for events and retreats.",
      img: workshopImg,
    },
    {
      title: "Posture & Desk Yoga",
      desc: "Short routines for daily office wellness.",
      img: deskImg,
    },
  ];

  return (
    <section className="corp-offer section-sm">

      <div className="container">

        <h2 className="text-center">Program Formats</h2>

        <div className="corp-offer__grid">

          {data.map((item, index) => (
            <div key={index} className="offer-card">

              <img src={item.img} alt={item.title} />

              <div className="offer-overlay">
                <h4>{item.title}</h4>
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