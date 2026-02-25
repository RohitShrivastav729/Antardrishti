
import "./Formats.css";
import Button from "../../../components/ui/Button";

export default function Formats(){
  return (
    <section className="formats section-sm">

      <div className="container text-center">

        <h2>Flexible Session Formats</h2>

        <p className="formats__lead">
          Choose the format that suits your schedule and comfort.
        </p>

        <div className="formats__grid">

          <div>
            <h4>Group Classes</h4>
            <p>Structured sessions with guided progression.</p>
          </div>

          <div>
            <h4>One-to-One</h4>
            <p>Personalized attention and therapeutic focus.</p>
          </div>

          <div>
            <h4>Monthly Plans</h4>
            <p>Consistent practice with flexible scheduling.</p>
          </div>

        </div>

        <div style={{marginTop:"40px"}}>
          <Button href="/contact">
            Enquire About Joining
          </Button>
        </div>

      </div>
    </section>
  );
}