import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import rjdLogo from "../assets/rjd-logo.png";
import { FaBars, FaTimes, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "auto";
  }, [sidebarOpen]);

  const closeSidebar = () => setSidebarOpen(false);

  const handleHashLink = (hashPath) => {
    navigate(hashPath);
    closeSidebar();
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
           <Link to="/" onClick={closeSidebar}>
             <img
            style={{ width: "7em", height: "1%" }}
            src={rjdLogo}
            alt="RJD Logo"
            className="rjd-logo"
          />
           </Link>
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

      <div className={`mobile-sidebar ${sidebarOpen ? "open" : ""}`}>
        <Link to="/" onClick={closeSidebar}>Home</Link>
        <Link to="/about" onClick={closeSidebar}>About</Link>
        <Link to="/vision" onClick={closeSidebar}>Vision</Link>
        <Link to="/gallery" onClick={closeSidebar}>Gallery</Link>
        <Link to="/contact" onClick={closeSidebar}>Contact</Link>

        {/* Icons at bottom */}
        <div className="sidebar-icons">
          <a href="https://www.facebook.com/share/1BJRQcMG5v/" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://x.com/pramukhjawahar?t=XgBns0xgcnB1coIkB0rKUw&s=08" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/jawaharlal_ray_?igsh=MXhxa2k5bXozaDZpaw==" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>

      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={closeSidebar} />
      )}
    </>
  );
}
