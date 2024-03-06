import React from 'react';
import banner from '/Users/janyajaiswal/Desktop/SDP/currycares/src/images/banner.png'
import pizza from '/Users/janyajaiswal/Desktop/SDP/currycares/src/images/biryani.png';
import biryani from '/Users/janyajaiswal/Desktop/SDP/currycares/src/images/curry.png';
import curry from '/Users/janyajaiswal/Desktop/SDP/currycares/src/images/pizza.png';
import './body.css';

export default function Body() {
  return (
    <div>
      <div className='banner-container'>
        <img src={banner} alt="Curry Cares Banner"/>
      </div>

      <div className="container-body">
        <div className="block">
          <img src={biryani} alt="Image 1"/>
        </div>
        <div className="block">
          <img src={pizza} alt="Image 2"/>
        </div>
        <div className="block">
          <img src={curry} alt="Image 3"/>
        </div>
      </div>
    </div>
  );
}
