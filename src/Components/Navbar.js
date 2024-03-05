import React from 'react';
import logo2 from '/Users/janyajaiswal/Desktop/SDP/currycares/src/images/logo2.png';
import './Navbar.css';
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
          <nav className="nav">
              
        <div className="logo">
            <Link to="/">
            <img src={logo2} width='50px' height='50px' alt="Curry Cares Logo" className="dib at" />
            Curry Cares
          </Link>
          
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-bar" />
          <button type="submit" className="search-button">
            <i className="fas fa-search"></i>
          </button>
        </div>
                  
        <div className="navlinks">
            <ul className="ulist">
              <li className="item">
                <Link className="pdln" to="/Orders">Orders</Link>
              </li>
              <li className="item">
                <Link className="pdln" to="/Profile">Profile</Link>
              </li>
              <li className="item">
                <Link className="pdln" to="/Login">Login</Link>
              </li>
              <li className="item">
                <Link className="pdln" to="/SignUp">SignUp</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
