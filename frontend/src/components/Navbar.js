import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>FinTech IT Solutions</h2>

      <div style={styles.links}>
        <Link style={styles.link} to="/">Home</Link>
        <Link style={styles.link} to="/about">About</Link>
        <Link style={styles.link} to="/services">Services</Link>
        <Link style={styles.link} to="/contact">Contact</Link>
        <Link style={styles.loginBtn} to="/login">Login</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: "#0f172a",
    color: "#ffffff",
    padding: "15px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  logo: {
    margin: 0
  },
  links: {
    display: "flex",
    gap: "20px",
    alignItems: "center"
  },
  link: {
    color: "#cbd5f5",
    textDecoration: "none",
    fontSize: "16px"
  },
  loginBtn: {
    backgroundColor: "#2563eb",
    padding: "8px 14px",
    borderRadius: "6px",
    color: "#ffffff",
    textDecoration: "none"
  }
};

export default Navbar;
