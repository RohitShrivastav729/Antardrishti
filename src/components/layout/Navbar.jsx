import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo/logo.png";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="container navbar__inner">
        {/* BRAND */}
        <div className="navbar__brand">
          <img src={logo} alt="logo" className="brand-logo" />
          <div className="brand-text">
            <div className="brand-name">Antardrishti</div>
            <div className="brand-tag">INNER VISION</div>
          </div>
        </div>

        {/* HAMBURGER */}
        <div className="hamburger" onClick={() => setOpen(!open)}>
          ☰
        </div>

        {/* LINKS */}
        <div className={`navbar__links ${open ? "active" : ""}`}>
          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link to="/services" onClick={() => setOpen(false)}>
            Programs
          </Link>
          <Link to="/corporate" onClick={() => setOpen(false)}>
            Corporate
          </Link>
          <Link
            to="/contact"
            className="navbar__cta"
            onClick={() => setOpen(false)}
          >
            Join Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
