
import "./TrustedBy.css";

import ymc from "../../../assets/images/clients/ymc.png";
import ikrish from "../../../assets/images/clients/irkish.png";
import nuvama from "../../../assets/images/clients/Nuvama.png";
import jubilant from "../../../assets/images/clients/jubilant.png";

export default function TrustedBy(){

  const clients = [
    {
      name:"YMC India",
      logo:ymc
    },
    {
      name:"Ikrish Pharma",
      logo:ikrish
    },
    {
      name:"Nuvama Wealth",
      logo:nuvama
    },
    {
      name:"Jubilant Ingrevia",
      logo:jubilant
    }
  ];

  return (
    <section className="trusted section-sm">

      <div className="container">

        <div className="trusted__header text-center">

          <p className="trusted__tag">
            EXPERIENCE & TRUST
          </p>

          <h3>
            Trusted by Professionals and Organizations
          </h3>

          <p className="trusted__lead">
            Over the years Antardrishti has guided individuals,
            working professionals and corporate teams through
            mindful yoga practices and wellness programs.
          </p>

        </div>

        <div className="trusted__grid">

          {clients.map((client,i)=>(
            <div className="trusted-card" key={i}>

              <div className="trusted-card__logo">
                <img src={client.logo} alt={client.name}/>
              </div>

              <p>{client.name}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}