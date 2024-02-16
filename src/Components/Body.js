import React from 'react';
import banner from '/Users/janyajaiswal/Desktop/SDP/currycares/src/images/banner.png';
import './body.css';

export default function Body() {
  return (
    <div>
      <div className='banner-container'>
        <img src={banner} alt="Curry Cares Banner"/>
      </div>

      <div className="container">
        <div className="block">
          <img src="mushroom.jpeg" alt="Image 1"/>
        </div>
        <div className="block">
          <img src="pizza.jpeg" alt="Image 2"/>
        </div>
        <div className="block">
          <img src="chicken.jpg" alt="Image 3"/>
        </div>
      </div>
    </div>
  );
}
