import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);
  const location = useLocation();

  const menuRef = useRef();
  const timeoutRef = useRef();

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenu(null);
        setHoveredMenu(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setOpenMenu(null);
    setHoveredMenu(null);
    setMobileMenuOpen(false);
    setMobileSubmenu(null);
  }, [location]);

  const handleMouseEnter = (menu) => {
    if (window.innerWidth > 768) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setHoveredMenu(menu);
      setOpenMenu(menu);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) {
      timeoutRef.current = setTimeout(() => {
        setOpenMenu(null);
        setHoveredMenu(null);
      }, 200);
    }
  };

  const handleMenuItemClick = () => {
    setOpenMenu(null);
    setHoveredMenu(null);
    setMobileMenuOpen(false);
    setMobileSubmenu(null);
  };

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const toggleMobileSubmenu = (menu) => {
    setMobileSubmenu(mobileSubmenu === menu ? null : menu);
  };

  return (
    <header className="main-header">
      <div className="nav-container" ref={menuRef}>
        <Link to="/" className="logo" onClick={handleMenuItemClick}>
          <div className="cursive-logo">
            <span className="cursive-fintech">Fintech</span>
            <span className="cursive-it">IT</span>
            <span className="cursive-solutions">Solutions</span>
          </div>
        </Link>

        <nav className="nav-menu desktop-menu">
          <Link
            to="/"
            className={`menu-link ${location.pathname === "/" ? "active" : ""}`}
            onClick={handleMenuItemClick}
          >
            Home
          </Link>

          <div
            className="menu-item"
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`menu-link ${openMenu === "services" ? "active" : ""}`}
              onClick={() => toggleMenu("services")}
            >
              What we do <span className="dropdown-arrow">▾</span>
            </button>

            {openMenu === "services" && (
              <div className="mega-menu">
                <div className="mega-left">
                  <h2>Perpetually Adaptive Enterprise</h2>
                  <p>
                    We help businesses modernize technology,
                    build scalable platforms and grow globally.
                  </p>
                  <Link
                    to="/services"
                    className="mega-link"
                    onClick={handleMenuItemClick}
                  >
                    Explore services →
                  </Link>
                </div>

                <div className="mega-right">
                  <Link to="/industries" onClick={handleMenuItemClick}>Industries →</Link>
                  <Link to="/services" onClick={handleMenuItemClick}>Services →</Link>
                  <Link to="/projects" onClick={handleMenuItemClick}>Products & Platforms →</Link>
                  <Link to="/insights" onClick={handleMenuItemClick}>Research & Innovation →</Link>
                  <Link to="/projects" onClick={handleMenuItemClick}>Alliances →</Link>
                </div>
              </div>
            )}
          </div>

          <div
            className="menu-item"
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`menu-link ${openMenu === "about" ? "active" : ""}`}
              onClick={() => toggleMenu("about")}
            >
              Who we are <span className="dropdown-arrow">▾</span>
            </button>

            {openMenu === "about" && (
              <div className="mega-menu">
                <div className="mega-left">
                  <h2>About Us</h2>
                  <p>
                    We create value for customers and communities
                    through technology innovation.
                  </p>
                  <Link
                    to="/about"
                    className="mega-link"
                    onClick={handleMenuItemClick}
                  >
                    Discover the difference →
                  </Link>
                </div>

                <div className="mega-right">
                  <Link to="/aspiration" onClick={handleMenuItemClick}>Our Aspiration →</Link>
                  <Link to="/brand" onClick={handleMenuItemClick}>Brand →</Link>
                  <Link to="/leadership" onClick={handleMenuItemClick}>Leadership →</Link>
                  <Link to="/community" onClick={handleMenuItemClick}>Community →</Link>
                  <Link to="/sustainability" onClick={handleMenuItemClick}>Sustainability →</Link>
                </div>
              </div>
            )}
          </div>

          <Link
            to="/careers"
            className={`menu-link ${location.pathname === "/careers" ? "active" : ""}`}
            onClick={handleMenuItemClick}
          >
            Careers
          </Link>

          <Link
            to="/newsroom"
            className={`menu-link ${location.pathname === "/newsroom" ? "active" : ""}`}
            onClick={handleMenuItemClick}
          >
            Newsroom
          </Link>

          <Link
            to="/contact"
            className={`menu-link ${location.pathname === "/contact" ? "active" : ""}`}
            onClick={handleMenuItemClick}
          >
            Contact
          </Link>
        </nav>

        <button
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <Link
            to="/"
            className="mobile-link"
            onClick={handleMenuItemClick}
          >
            Home
          </Link>

          <div className="mobile-menu-item">
            <div
              className={`mobile-menu-header ${mobileSubmenu === 'services' ? 'open' : ''}`}
              onClick={() => toggleMobileSubmenu('services')}
            >
              <span>What we do</span>
              <ChevronDown size={20} />
            </div>
            <div className={`mobile-submenu ${mobileSubmenu === 'services' ? 'open' : ''}`}>
              <Link to="/industries" onClick={handleMenuItemClick}>Industries</Link>
              <Link to="/services" onClick={handleMenuItemClick}>Services</Link>
              <Link to="/projects" onClick={handleMenuItemClick}>Products & Platforms</Link>
              <Link to="/insights" onClick={handleMenuItemClick}>Research & Innovation</Link>
              <Link to="/projects" onClick={handleMenuItemClick}>Alliances</Link>
            </div>
          </div>

          <div className="mobile-menu-item">
            <div
              className={`mobile-menu-header ${mobileSubmenu === 'about' ? 'open' : ''}`}
              onClick={() => toggleMobileSubmenu('about')}
            >
              <span>Who we are</span>
              <ChevronDown size={20} />
            </div>
            <div className={`mobile-submenu ${mobileSubmenu === 'about' ? 'open' : ''}`}>
              <Link to="/aspiration" onClick={handleMenuItemClick}>Our Aspiration</Link>
              <Link to="/brand" onClick={handleMenuItemClick}>Brand</Link>
              <Link to="/leadership" onClick={handleMenuItemClick}>Leadership</Link>
              <Link to="/community" onClick={handleMenuItemClick}>Community</Link>
              <Link to="/sustainability" onClick={handleMenuItemClick}>Sustainability</Link>
            </div>
          </div>

          <Link
            to="/careers"
            className="mobile-link"
            onClick={handleMenuItemClick}
          >
            Careers
          </Link>

          <Link
            to="/newsroom"
            className="mobile-link"
            onClick={handleMenuItemClick}
          >
            Newsroom
          </Link>

          <Link
            to="/contact"
            className="mobile-link"
            onClick={handleMenuItemClick}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}

