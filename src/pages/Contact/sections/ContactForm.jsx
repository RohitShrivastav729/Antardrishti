import "./ContactForm.css";
import Button from "../../../components/ui/Button";

export default function ContactForm() {
  return (
    <section className="contact-form section">
      <div className="container contact-form__grid">
        {/* LEFT SIDE */}
        <div className="contact-form__left">
          <p className="contact-form__tag">CONTACT US</p>

          <h2>
            Begin Your Wellness
            <span> Journey</span>
          </h2>

          <p className="contact-form__desc">
            Connect with us to start your yoga journey. Whether you are a
            beginner or looking for therapeutic guidance, we are here to help
            you move better, feel better and live better.
          </p>

          {/* CONTACT INFO */}
          <div className="contact-info">
            <div className="contact-info__item">
              <div className="icon">📍</div>
              <div>
                <h4>Our Office</h4>
                <p>Noida & Delhi NCR</p>
              </div>
            </div>

            <div className="contact-info__item">
              <div className="icon">📞</div>
              <div>
                <h4>Call Us</h4>
                <p>+91 8728233616</p>
              </div>
            </div>

            <div className="contact-info__item">
              <div className="icon">✉️</div>
              <div>
                <h4>Email</h4>
                <p>antardrishti@gmail.com</p>
              </div>
            </div>
          </div>

          {/* WHATSAPP BUTTON */}
          <div className="contact-form__actions">
            <a
              href="https://wa.me/918728233616"
              target="_blank"
              className="whatsapp-btn premium"
            >
              <span className="whatsapp-icon">💬</span>
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="contact-form__card">
          <h3>Book a Trial Session</h3>

          <form
            action="https://formsubmit.co/rohitshrivastav628@gmail.com"
            method="POST"
            className="form"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Yoga Enquiry" />

            <input type="text" name="name" placeholder="Your Name *" required />
            <input
              type="email"
              name="email"
              placeholder="Your Email *"
              required
            />

            <div className="phone-group">
              <select name="countryCode">
                <option value="+91">+91</option>
                <option value="+1">+1</option>
              </select>

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                required
              />
            </div>

            <textarea name="message" placeholder="Your Message" rows="4" />

            <Button>Send Enquiry</Button>

            {/* SECONDARY CTA */}
            <div className="form__secondary">
              <a href="https://wa.me/918728233616" target="_blank">
                Prefer WhatsApp? Chat instantly →
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
