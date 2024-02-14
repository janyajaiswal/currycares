import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Save with Curry Cares!</h3>
        <p>Order now and enjoy great savings on delicious meals.</p>
        <div className="social-links">
          <a href="https://www.instagram.com/currycares" id='insta'><i className="fab fa-instagram"></i></a>
          <a href="https://www.facebook.com/currycares" id='meta'><i className="fab fa-facebook"></i></a>
          <a href="https://x.com/currycares" id='x'>< i className="fa-solid fa-x"></i></a>
        </div>
      </div>
    </footer>
  );
}
