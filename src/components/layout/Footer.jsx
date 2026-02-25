
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container text-center">
        <h3>Antardrishti</h3>
        <p>Inner Vision for Modern Living</p>

        <p className="footer__copyright">
          © {new Date().getFullYear()} Antardrishti. All rights reserved.
        </p>
      </div>
    </footer>
  );
}