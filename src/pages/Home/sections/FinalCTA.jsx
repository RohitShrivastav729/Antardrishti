
import "./FinalCTA.css";
import Button from "../../../components/ui/Button";

export default function FinalCTA(){
  return (
    <section className="final-cta section">

      <div className="container final-cta__inner text-center">

        <p className="final-cta__tag">
          BEGIN WHERE YOU ARE
        </p>

        <h2>
          You Don’t Need Flexibility.
          <br/> You Only Need Willingness.
        </h2>

        <p>
          Antardrishti offers a calm and respectful space where yoga 
          meets modern life thoughtfully and sustainably.
          If you feel ready, you are welcome to begin.
        </p>

        <div className="final-cta__buttons">

          <Button href="/contact">
            Book a Trial Session
          </Button>

          <Button 
            variant="outline"
            href="https://wa.me/919416514652"
          >
            WhatsApp Enquiry
          </Button>

        </div>

      </div>

    </section>
  );
}