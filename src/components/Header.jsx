import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <Link to="/" style={styles.logo}>
          Incisor Cleaning Services
        </Link>

        <button
          style={styles.mobileMenuButton}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>

        <nav
          style={{
            ...styles.nav,
            ...(mobileMenuOpen ? styles.navMobileOpen : {}),
          }}

          className={mobileMenuOpen ?"navMobileOpen":"nav"}
        >
          <Link
            to="/"
            style={{
              ...styles.navLink,
              ...(isActive("/") ? styles.navLinkActive : {}),
            }}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/services"
            style={{
              ...styles.navLink,
              ...(isActive("/services") ? styles.navLinkActive : {}),
            }}
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/gallery"
            style={{
              ...styles.navLink,
              ...(isActive("/gallery") ? styles.navLinkActive : {}),
            }}
            onClick={() => setMobileMenuOpen(false)}
          >
            Gallery
          </Link>
          <Link
            to="/blog"
            style={{
              ...styles.navLink,
              ...(isActive("/blog") ? styles.navLinkActive : {}),
            }}
            onClick={() => setMobileMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            style={{
              ...styles.navLink,
              ...(isActive("/contact") ? styles.navLinkActive : {}),
            }}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <a
            href="https://wa.me/250785234933?text=Hello%2C%20I%27d%20like%20to%20get%20a%20quote%20for%20cleaning%20services."
            target="_blank"
            rel="noopener noreferrer"
            style={styles.ctaButton}
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Quote
          </a>
        </nav>
      </div>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: "#ffffff",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "1rem 1.5rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#FF6600",
    textDecoration: "none",
  },
  mobileMenuButton: {
    display: "none",
    fontSize: "1.5rem",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    color: "#333",
  },
  nav: {
    display: "flex",
    gap: "2rem",
    alignItems: "center",
  },
  navMobileOpen: {
    display: "flex",
    gap: "2rem",
    alignItems: "center",
  },
  navLink: {
    color: "#333",
    textDecoration: "none",
    fontWeight: 500,
    transition: "color 0.3s",
  },
  navLinkActive: {
    color: "#FF6600",
  },
  ctaButton: {
    backgroundColor: "#FF6600",
    color: "#ffffff",
    padding: "0.75rem 1.5rem",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: 600,
    transition: "background-color 0.3s",
  },
};

const mediaQueries = `
  @media (max-width: 768px) {
    header button {
      display: block !important;
    }
    header nav {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background-color: #ffffff;
      flex-direction: column;
      padding: 1rem;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
  }
`;

const styleSheet = document.createElement("style");
styleSheet.textContent = mediaQueries;
document.head.appendChild(styleSheet);

export default Header;
