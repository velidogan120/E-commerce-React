import { useEffect, useState } from "react";
import {
  Search,
  ShoppingCart,
  Menu,
  X,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Heart,
  User,
} from "lucide-react";
import "../../../src/styles/header.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Product", href: "/products" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="h-full">
      <div className="top-info">
        <div className="top-info-bar">
          <div className="top-info-left">
            <div className="info-item">
              <Phone size={16} />
              <span>(225) 555-0118</span>
            </div>
            <div className="info-item">
              <Mail size={16} />
              <span>michelle.rivera@example.com</span>
            </div>
          </div>

          <div className="top-info-center">
            <span>Follow Us and get a chance to win 80% off</span>
          </div>

          <div className="top-info-right">
            <span>Follow Us :</span>
            <a href="#" title="Instagram">
              <Instagram size={16} />
            </a>
            <a href="#" title="Youtube">
              <Youtube size={16} />
            </a>
            <a href="#" title="Facebook">
              <Facebook size={16} />
            </a>
            <a href="#" title="Twitter">
              <Twitter size={16} />
            </a>
          </div>
        </div>
      </div>

      <nav className="main-header">
        <div className="header-container">
          <div className="logo">
            <h1>Bandage</h1>
          </div>

          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className={`nav-menu ${isMenuOpen ? "is-open" : ""}`}>
            <div className="menu-links">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="menu-icons">
              <button className="icon-button" aria-label="Search">
                <User size={20} />{" "}
                <span className="font-bold">Login / Register</span>
              </button>
              <button className="icon-button" aria-label="Search">
                <Search size={20} />
              </button>
              <button className="icon-button" aria-label="Shopping cart">
                <ShoppingCart size={20} /> 1
              </button>
              <button className="icon-button" aria-label="Search">
                <Heart size={20} /> 1
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
