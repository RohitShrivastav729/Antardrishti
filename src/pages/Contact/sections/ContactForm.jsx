import "./ContactForm.css";
import Button from "../../../components/ui/Button";

export default function ContactForm(){

  return (
    <section className="contact-form section">

      <div className="container contact-form__grid">

        {/* FORM */}
        <div className="contact-form__left">

          <h2>Send an Enquiry</h2>
          <p>We will respond within 24 hours.</p>

          <form 
            action="https://formsubmit.co/rohitshrivastav628@gmail.com"
            method="POST"
            className="form"
          >

            {/* Disable captcha */}
            <input type="hidden" name="_captcha" value="false"/>
            <input type="hidden" name="_subject" value="New Yoga Enquiry"/>

            <input 
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />

            <input 
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />

            <div className="phone-group">

              <select name="countryCode" required>
                <option value="+91">India (+91)</option>
                <option value="+1">USA (+1)</option>
                <option value="+44">UK (+44)</option>
                <option value="+61">Australia (+61)</option>
                <option value="+64">New Zealand (+64)</option>
                <option value="+971">UAE (+971)</option>
                <option value="+65">Singapore (+65)</option>
                <option value="+81">Japan (+81)</option>
                <option value="+49">Germany (+49)</option>
                <option value="+33">France (+33)</option>
              </select>

              <input 
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
              />

            </div>

            <textarea 
              name="message"
              placeholder="Your Message"
              rows="5"
            />

            <Button>
              Submit Enquiry
            </Button>

          </form>

        </div>

        {/* RIGHT SIDE */}
        <div className="contact-form__right">

          <div className="contact-card">
            <h3>WhatsApp</h3>
            <p>Quickest way to connect for trial sessions.</p>

            <a 
              href="https://wa.me/918708293816"
              target="_blank"
              className="whatsapp-btn"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="contact-card">
            <h3>Location</h3>
            <p>Noida & Delhi NCR</p>
            <p>Online sessions available across India</p>
          </div>

        </div>

      </div>

    </section>
  );
}