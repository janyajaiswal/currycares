import React from 'react';
import { Link } from 'react-router-dom'
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Save with Curry Cares!</h3>
          <p>Order now and enjoy great savings on delicious meals.</p>
          <h3>About Us</h3>
          <Link to="/About"><div id="hyperlink">Click here</div></Link> 
          <h3>Contact Us</h3>
          <p>Email: janya.20bce7028@vitap.ac.in</p>
          <p>Phone: +919320252728</p>
          <p>Address: VIT AP University</p>
        </div>
        <div className="footer-section">
          <div className="social-links">
            <a href="https://www.instagram.com/currycares" id='insta'><i className="fab fa-instagram"></i></a>
            <a href="https://www.facebook.com/currycares" id='meta'><i className="fab fa-facebook"></i></a>
            <a href="https://x.com/currycares" id='x'><i className="fa-solid fa-x"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
