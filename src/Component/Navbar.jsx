import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import rjdLogo from "../assets/rjd-logooo.jpg";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100); // delay to ensure DOM is loaded
      }
    }
  }, [location]);

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
          <img src={rjdLogo} alt="RJD Logo" className="rjd-logo" />
          <div className="rjd-text">
            <div className="leader-name">Jawahar Lal Rai</div>
            <div className="party-name">Rashtriya Janata Dal</div>
          </div>
        </div>

        <div className="hamburger" onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <FaTimes /> : <FaBars />}
        </div>

        <div className="nav-links-desktop">
          <Link to="/" onClick={closeSidebar}>Home</Link>
          <Link to="/#vision" onClick={() => handleHashLink("/#vision")}>Vision</Link>
          <Link to="/#about" onClick={() => handleHashLink("/#about")}>About</Link>
          <Link to="/#gallery" onClick={() => handleHashLink("/#gallery")}>Gallery</Link>
          <Link to="/#contact" onClick={() => handleHashLink("/#contact")}>Contact</Link>
          <Link to="/biography" onClick={closeSidebar}>Biography</Link>
        </div>
      </nav>

      <div className={`mobile-sidebar ${sidebarOpen ? "open" : ""}`}>
        <Link to="/" onClick={closeSidebar}>Home</Link>
        <Link to="/#vision" onClick={() => handleHashLink("/#vision")}>Vision</Link>
        <Link to="/#about" onClick={() => handleHashLink("/#about")}>About</Link>
        <Link to="/#gallery" onClick={() => handleHashLink("/#gallery")}>Gallery</Link>
        <Link to="/#contact" onClick={() => handleHashLink("/#contact")}>Contact</Link>
        <Link to="/biography" onClick={closeSidebar}>Biography</Link>
      </div>

      {sidebarOpen && <div className="sidebar-overlay" onClick={closeSidebar} />}
    </>
  );
}
