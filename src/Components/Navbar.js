import React from 'react';
import logo2 from '/Users/janyajaiswal/Desktop/SDP/currycares/src/images/logo2.png';
import pfp from '/Users/janyajaiswal/Desktop/SDP/currycares/src/images/pfp.png';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate()

  }

  return (
    <div>
          <nav className="nav">
              
        <div className="logo">
            <Link to="/">
            <img src={logo2} width='50px' height='50px' alt="Curry Cares Logo" className="dib at" />
            Curry Cares
          </Link>
                  
        <div className="navlinks">
            <ul className="ulist">
              <li className="item">
              <Link className="pdln signup" to="/SignUp">SignUp</Link>
              </li>
              {(localStorage.getItem("authToken")) ?
              <li>
              <Link className="pdln" to="/Orders">Orders</Link>
              </li>
                
                : ""}
              
            </ul>
            {(!localStorage.getItem("authToken")) ?
            <div className ='navlinks'>

                <Link className="pdln" to="/Profile">Profile</Link>
            
              </div>
              : 
              <div>
              <div className='navlinks'>
                  My Cart
                </div>
                <div className='navlinks' onClick={handleLogout}>
                  Logout
                </div>
              </div>
            }
          </div>
          <div className='header-right'>
            <div className='header-location-search-container'>
              <div className='location-wrapper'>
                <div className='location-icon-name'>
                  <i className="fa-solid fa-location-dot absolute-center location-icon"></i>
                  <div>Bangalore</div>
                </div>
                <i className="fa-solid fa-caret-down absolute-center"></i>
              </div>
              <div className='location-search-seperator'></div>
              <div className='header-searchBar'>
                <i class="fa-solid fa-magnifying-glass absolute-center search-icon"></i>
                <input
                  placeholder='Search for restaurant or dish'
                  className='search-input'
                />
              </div>
            </div>
            <div className='profile-wrapper'>
              <img src={pfp} alt='' className='header-profile-image'></img>
              <span className='header-username'>Janya</span>
              <i className="fa-solid fa-angle-down absolute-center profile-options-icon"></i>
            </div>
          </div>

        </div>
      </nav>
    </div>
  );
}
