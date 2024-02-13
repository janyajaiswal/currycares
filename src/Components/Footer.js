import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Save with Curry Cares!</h3>
        <p>Order now and enjoy great savings on delicious meals.</p>
        <div className="social-links">
          <a href="https://www.instagram.com/currycares"><i className="fab fa-instagram"></i></a>
          <a href="https://www.facebook.com/currycares"><i className="fab fa-facebook"></i></a>
          <a href="https://twitter.com/currycares"><i className="fab fa-twitter"></i></a>
        </div>
      </div>
    </footer>
  );
}
