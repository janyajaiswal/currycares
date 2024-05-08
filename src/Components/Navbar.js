import React, { useState, useEffect } from 'react';
import logo2 from '/Users/janyajaiswal/Desktop/SDP/currycares/src/images/logo2.png';
import pfp from '/Users/janyajaiswal/Desktop/SDP/currycares/src/images/pfp.png';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const [userLocation, setUserLocation] = useState(''); // Default location
  const [showDropdown, setShowDropdown] = useState(false);
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/');
  };

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setShowDropdown(false);
  };

  useEffect(() => {
    // Fetch user's location based on IP address
    fetch('https://ipapi.co/json/')
      .then((response) => response.json())
      .then((data) => {
        setUserLocation(data.city);
      })
      .catch((error) => {
        console.error('Error fetching location:', error);
      });

    // Fetch list of cities
    fetch('https://countriesnow.space/api/v0.1/countries/population/cities')
      .then((response) => response.json())
      .then((data) => {
        const citiesData = Object.values(data.data).flat().map(city => city.city);
        setCities(citiesData.sort()); // Sort the cities alphabetically
      })
      .catch((error) => {
        console.error('Error fetching cities:', error);
      });
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <nav className="nav">
      <div className="logo">
        <Link to="/">
          <img src={logo2} width="50px" height="50px" alt="Curry Cares Logo" className="dib at" />
          Curry Cares
        </Link>
      </div>

      <div className="navlinks">
        <ul className="ulist">
          <li className="item">
            <Link className="pdln signup" to="/SignUp">
              SignUp
            </Link>
          </li>
          {localStorage.getItem('authToken') && (
            <li>
              <Link className="pdln" to="/Orders">
                Orders
              </Link>
              <Link className="pdln" to="/Profile">
                Profile
              </Link>
            </li>
          )}
        </ul>
        {!localStorage.getItem('authToken') ? (
          <div className="navlinks">
            <Link className="pdln" to="/Cart">
              My Cart
            </Link>
          </div>
        ) : (
          <div onClick={handleLogout}>Logout</div>
        )}
      </div>

      <div className="header-location-search-container">
        <div className="location-wrapper" onClick={handleDropdownToggle}>
          <div className="location-icon-name">
            <i className="fa-solid fa-location-dot absolute-center location-icon"></i>
            <div>{selectedCity || userLocation}</div>
          </div>
          <i className={`fa-solid fa-caret-${showDropdown ? 'up' : 'down'} absolute-center`}></i>
        </div>
        {showDropdown && (
          <div className="dropdown-menu">
            <ul className="city-list">
              {cities.map((city, index) => (
                <li key={index} onClick={() => handleCitySelect(city)}>
                  {city}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="location-search-seperator"></div>
        <div className="header-searchBar">
          <i className="fa-solid fa-magnifying-glass absolute-center search-icon"></i>
          <input placeholder="Search for restaurant or dish" className="search-input" />
        </div>
      </div>

      <div className="profile-wrapper">
        <img src={pfp} alt="" className="header-profile-image"></img>
        <span className="header-username">Janya</span>
        <i className="fa-solid fa-angle-down absolute-center profile-options-icon"></i>
      </div>
    </nav>
  );
}
