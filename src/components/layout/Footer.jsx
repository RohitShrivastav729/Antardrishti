import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__bg"></div>

      <div className="container footer__grid">
        {/* LEFT */}
        <div className="footer__col footer__brand">
          <h2 className="footer__logo">Antardrishti</h2>

          <p className="footer__tagline">Inner Vision for Modern Living</p>

          <p className="footer__desc">
            A calm and thoughtful space where yoga supports modern life —
            helping you build strength, clarity and balance sustainably.
          </p>
        </div>

        {/* CENTER */}
        <div className="footer__col footer__links-col">
          <h4>Explore</h4>

          <ul className="footer__links">
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/services">Yoga Services</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="footer__col footer__contact-col">
          <h4>Contact</h4>

          <ul className="footer__contact">
            <li>
              <div className="footer__icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 6H20V18H4V6Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M4 7L12 13L20 7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <div>
                <span>Email</span>
                <p>antardrishti@gmail.com</p>
              </div>
            </li>

            <li>
              <div className="footer__icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22 16.92V20C22 20.55 21.55 21 21 21C10.51 21 3 13.49 3 3C3 2.45 3.45 2 4 2H7.09C7.6 2 8.03 2.38 8.09 2.88L8.64 7.19C8.7 7.66 8.5 8.12 8.12 8.37L6.21 9.64C7.49 12.5 9.5 14.51 12.36 15.79L13.63 13.88C13.88 13.5 14.34 13.3 14.81 13.36L19.12 13.91C19.62 13.97 20 14.4 20 14.91V16.92H22Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <div>
                <span>Phone</span>
                <p>+91 8728233616</p>
              </div>
            </li>

            <li>
              <div className="footer__icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 21C12 21 5 13.5 5 8.5C5 5.42 7.42 3 10.5 3H13.5C16.58 3 19 5.42 19 8.5C19 13.5 12 21 12 21Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="12"
                    cy="9"
                    r="2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <div>
                <span>Office</span>
                <p>Noida & Delhi NCR</p>
              </div>
            </li>
          </ul>

          {/* ACTIONS */}

          <div className="footer__actions">
            <a href="/contact" className="footer__btn primary">
              Contact Form
            </a>

            <a
              href="https://wa.me/918728233616"
              className="footer__btn whatsapp"
              target="_blank"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container text-center">
          <p>© {new Date().getFullYear()} Antardrishti. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
