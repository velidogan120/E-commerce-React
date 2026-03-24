import { Facebook, Instagram, Twitter } from "lucide-react";
import "../../styles/footer.css";
import { useLocation } from "react-router";
const Footer = () => {
  const location = useLocation();
  return (
    <div className="footer">
      <div
        className={`footer-top ${location.pathname === "/" ? "home" : "other"}`}
      >
        <div className="footer-container">
          <span className="footer-logo">Bandage</span>
          <div className="footer-brands">
            <a href="#" target="_blank">
              <Facebook fill="currentColor" size={24} />
            </a>
            <a href="#" target="_blank">
              <Instagram size={24} />
            </a>
            <a href="#" target="_blank">
              <Twitter fill="currentColor" size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-middle footer-container">
        <div className="footer-column">
          <h5>Company Info</h5>
          <ul className="footer-list">
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/careers">Careers</a>
            </li>
            <li>
              <a href="/press">We are hiring</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h5>Legal</h5>
          <ul className="footer-list">
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/careers">Careers</a>
            </li>
            <li>
              <a href="/press">We are hiring</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h5>Features</h5>
          <ul className="footer-list">
            <li>
              <a href="/about">Business Marketing</a>
            </li>
            <li>
              <a href="/careers">User Analytic</a>
            </li>
            <li>
              <a href="/press">Live Chat</a>
            </li>
            <li>
              <a href="/blog">Unlimited Support</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h5>Resources</h5>
          <ul className="footer-list">
            <li>
              <a href="/about">IOS & Android</a>
            </li>
            <li>
              <a href="/careers">Watch a Demo</a>
            </li>
            <li>
              <a href="/press">Customers</a>
            </li>
            <li>
              <a href="/blog">API</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h5>Get In Touch</h5>
          <form className="footer-form">
            <input
              type="email"
              placeholder="Your email"
              className="footer-input"
            />
            <button type="submit" className="footer-button btn">
              Subscribe
            </button>
          </form>
          <p>Lore imp sum dolor Amit</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-container">
          <p>
            <span>Made With Love By</span> Finland All Right Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
