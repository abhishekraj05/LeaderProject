import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../LanguageContext.jsx";
import "./Navbar.css";
import rjdLogo from "../assets/rjd-logo.jpg";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const { language } = useContext(LanguageContext);
  const [sidebarOpen, setSidebarOpen] = useState(false); // always false by default

  // Scroll lock on body when sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [sidebarOpen]);

  // Close on nav link click
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <img src={rjdLogo} alt="RJD Logo" className="rjd-logo" />
          <div className="rjd-text">
            <div className="leader-name">जवाहर लाल राय</div>
            <div className="party-name">राष्ट्रीय जनता दल</div>
          </div>
        </div>

        <div className="hamburger" onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <FaTimes /> : <FaBars />}
        </div>

        <div className="nav-links-desktop">
          <Link to="/" onClick={closeSidebar}>{language === "en" ? "Home" : "मुखपृष्ठ"}</Link>
          <Link to="/about" onClick={closeSidebar}>{language === "en" ? "About" : "जीवनी"}</Link>
          <Link to="/vision" onClick={closeSidebar}>{language === "en" ? "Vision" : "मेरे प्रेरणा स्रोत"}</Link>
          <Link to="/gallery" onClick={closeSidebar}>{language === "en" ? "Gallery" : "गेलरी"}</Link>
          <Link to="/contact" onClick={closeSidebar}>{language === "en" ? "Contact" : "संपर्क करें"}</Link>
        </div>
      </nav>

      {/* Sidebar for mobile */}
      <div className={`mobile-sidebar ${sidebarOpen ? "open" : ""}`}>
        <Link to="/" onClick={closeSidebar}>{language === "en" ? "Home" : "मुखपृष्ठ"}</Link>
        <Link to="/about" onClick={closeSidebar}>{language === "en" ? "About" : "जीवनी"}</Link>
        <Link to="/vision" onClick={closeSidebar}>{language === "en" ? "Vision" : "मेरे प्रेरणा स्रोत"}</Link>
        <Link to="/gallery" onClick={closeSidebar}>{language === "en" ? "Gallery" : "गेलरी"}</Link>
        <Link to="/contact" onClick={closeSidebar}>{language === "en" ? "Contact" : "संपर्क करें"}</Link>
      </div>

      {sidebarOpen && <div className="sidebar-overlay" onClick={closeSidebar} />}
    </>
  );
}
