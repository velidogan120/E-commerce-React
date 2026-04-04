import {
  ChevronDown,
  Facebook,
  Heart,
  Instagram,
  LogOut,
  Mail,
  Menu,
  Moon,
  Phone,
  Search,
  ShoppingCart,
  Sun,
  Twitter,
  User,
  X,
  Youtube,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router";
import "../../../src/styles/header.css";
import { useTheme } from "../../hooks/useTheme";
import { logout } from "../../lib/store/slices/clientSlice";
import Gravatar from "./Gravatar";
import { useVerifyToken } from "../../hooks/useAuth";
import { useCategories } from "../../hooks/useProducts";
import { setCategories } from "../../lib/store/slices/productSlice";
import Loading from "./Loading";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);
  const { handleToggleTheme, theme } = useTheme();
  const { user } = useSelector((state) => state.client);
  const { data: categories = [], isPending } = useCategories();
  const dispatch = useDispatch();
  const location = useLocation();
  const [, setSearchParams] = useSearchParams();
  const { mutate: verifyToken } = useVerifyToken();
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
        setIsShopMenuOpen(false);
      }
    };
    verifyToken();
    dispatch(setCategories(categories));

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [verifyToken, categories, dispatch]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "About", href: "/about" },
    { label: "Pricing", href: "/price" },
    { label: "Team", href: "/team" },
    { label: "Contact", href: "/contact" },
  ];

  const handleRoute = () => {
    const redirectPath = location.pathname + location.search;
    setSearchParams({ redirect: encodeURIComponent(redirectPath) });
  };

  const womenCategories = categories.filter(
    (category) => category.gender === "k",
  );
  const menCategories = categories.filter(
    (category) => category.gender === "e",
  );

  if (isPending) {
    return <Loading />;
  }

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
              {navLinks.map((link) =>
                link.href === "/shop" ? (
                  <div key={link.href} className="nav-link-dropdown">
                    <button
                      type="button"
                      className="nav-link nav-link-trigger"
                      aria-expanded={isShopMenuOpen}
                      onClick={() => setIsShopMenuOpen((prev) => !prev)}
                    >
                      {link.label}
                      <ChevronDown size={16} />
                    </button>
                    {isShopMenuOpen && (
                      <button
                        type="button"
                        className="shop-dropdown-backdrop"
                        onClick={() => setIsShopMenuOpen(false)}
                      />
                    )}
                    <div
                      className={`nav-link-dropdown-content ${isShopMenuOpen ? "is-open-mobile" : ""}`}
                    >
                      <div className="nav-link-dropdown-columns">
                        <div className="nav-link-dropdown-group">
                          <p className="nav-link-dropdown-title">Kadın</p>
                          {womenCategories.map((category) => (
                            <Link
                              key={category.id}
                              to={`/shop?category=${encodeURIComponent(category.code ?? category.id)}`}
                              className="nav-link-dropdown-item"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsShopMenuOpen(false);
                              }}
                            >
                              {category.title}
                            </Link>
                          ))}
                        </div>
                        <div className="nav-link-dropdown-group">
                          <p className="nav-link-dropdown-title">Erkek</p>
                          {menCategories.map((category) => (
                            <Link
                              key={category.id}
                              to={`/shop?category=${encodeURIComponent(category.code ?? category.id)}`}
                              className="nav-link-dropdown-item"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsShopMenuOpen(false);
                              }}
                            >
                              {category.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div key={link.href} className="nav-link-dropdown">
                    <Link
                      to={link.href}
                      className="nav-link"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsShopMenuOpen(false);
                      }}
                    >
                      {link.label}
                    </Link>
                  </div>
                ),
              )}
            </div>
            <div className="menu-icons">
              {user ? (
                <>
                  <Gravatar email={user.email} />
                  <p>{user.name}</p>
                  <button
                    className="icon-button"
                    onClick={() => dispatch(logout())}
                  >
                    <LogOut />
                  </button>
                  <button className="icon-button">
                    <Search size={20} />
                  </button>
                  <button className="icon-button">
                    <ShoppingCart size={20} /> 1
                  </button>
                  <button className="icon-button">
                    <Heart size={20} /> 1
                  </button>
                </>
              ) : (
                <span className="login-register-btn">
                  <User size={20} />
                  <Link
                    className="icon-button"
                    to="/login"
                    onClick={handleRoute}
                  >
                    Login
                  </Link>
                  <span>/</span>
                  <Link
                    className="icon-button"
                    to="/signup"
                    onClick={handleRoute}
                  >
                    Register
                  </Link>
                </span>
              )}
              {
                <button className="icon-button" onClick={handleToggleTheme}>
                  {theme === "dark" ? <Moon size={20} /> : <Sun size={20} />}
                </button>
              }
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
