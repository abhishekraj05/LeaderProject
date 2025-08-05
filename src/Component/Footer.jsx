import React from "react";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Gallery Section */}
        <div className="footer-section">
          <h2>Gallery</h2>
          <img
            src="your-image-path.jpg" // replace with actual image path
            alt="RJD Rally"
            className="footer-gallery-image"
          />
        </div>

        {/* Useful Links */}
        <div className="footer-section">
          <h2>Useful Links</h2>
          <ul>
            <li><a href="#">About Party</a></li>
            <li><a href="#">Party Ideology</a></li>
            <li><a href="#">Our Leadership</a></li>
            <li><a href="#">RJD Officials</a></li>
            <li><a href="#">Gallery</a></li>
          </ul>
        </div>

        {/* Connect With Us */}
      <div className="footer-section">
  <h2>Connect with us</h2>
  <ul className="connect-list">
    <li>
      <i className="fa-brands fa-facebook facebook-icon"></i>
      <a href="">Facebook</a>
    </li>
    <li>
      <i className="fa-brands fa-x-twitter twitter-icon"></i>
      <a href="">Twitter</a>
    </li>
    <li>
      <i className="fa-brands fa-youtube youtube-icon"></i>
      <a href="">YouTube</a>
    </li>
    <li>
      <i className="fa-brands fa-square-instagram instagram-icon"></i>
      <a href="">Instagram</a>
    </li>
    <li>
      <i className="fa-brands fa-whatsapp whatsapp-icon"></i>
      <a href="">WhatsApp</a>
    </li>
  </ul>
</div>


      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© Copyright 2020 <strong>Rashtriya Janta Dal</strong>.</p>
      </div>
    </footer>
  );
};

export default Footer;
