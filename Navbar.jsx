import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const { pathname } = useLocation();
  return (
    <nav className="navbar">
      <div className="navbar-logo">A Consulting</div>
      <ul className="navbar-links">
        <li className={pathname === "/" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={pathname === "/about" ? "active" : ""}>
          <Link to="/about">About Us</Link>
        </li>
        <li className={pathname === "/services" ? "active" : ""}>
          <Link to="/services">Services</Link>
        </li>
        <li className={pathname === "/contact" ? "active" : ""}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;