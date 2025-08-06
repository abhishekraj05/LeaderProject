import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import rjdLogo from "../assets/rjd-logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "auto";
  }, [sidebarOpen]);

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <img
            style={{ width: "7em", height: "1%" }}
            src={rjdLogo}
            alt="RJD Logo"
            className="rjd-logo"
          />
          <div className="rjd-text">
            <div className="leader-name">Jawahar Lal Ray</div>
            <div className="party-name">Rashtriya Janata Dal</div>
          </div>
        </div>

        <div className="navbar-right">
          <div
            className="hamburger"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        <div className="nav-links-desktop">
          <Link to="/" onClick={closeSidebar}>Home</Link>
          <Link to="/about" onClick={closeSidebar}>About</Link>
          <Link to="/vision" onClick={closeSidebar}>Vision</Link>
          <Link to="/gallery" onClick={closeSidebar}>Gallery</Link>
          <Link to="/contact" onClick={closeSidebar}>Contact</Link>
        </div>
      </nav>

      {/* Sidebar for mobile */}
      <div className={`mobile-sidebar ${sidebarOpen ? "open" : ""}`}>
        <Link to="/" onClick={closeSidebar}>Home</Link>
        <Link to="/about" onClick={closeSidebar}>About</Link>
        <Link to="/vision" onClick={closeSidebar}>Vision</Link>
        <Link to="/gallery" onClick={closeSidebar}>Gallery</Link>
        <Link to="/contact" onClick={closeSidebar}>Contact</Link>
      </div>

      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={closeSidebar} />
      )}
    </>
  );
}
