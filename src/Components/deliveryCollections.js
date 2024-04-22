import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Components/deliveryCollections.css';

const DeliveryCollections = () => {
    const [deliveryItems, setDeliveryItems] = useState([]);
  
    useEffect(() => {
      const fetchDeliveryItems = async () => {
        try {
          const response = await fetch("http://localhost:4000/api/getItems", {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          });
          
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          
          const data = await response.json();
          setDeliveryItems(data.data); // Update to set the actual data array
        } catch (error) {
          console.error('Error fetching delivery items:', error);
        }
      };
  
      fetchDeliveryItems();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        //nextArrow: <SampleNextArrow />,
        //prevArrow: <SamplePrevArrow />
      };

  return (
    <div className='delivery-collection'>
      <div className='max-width'>
        <div className='collection-title'>Eat what makes you happy</div>
              {deliveryItems.map(item => {
                  return (
                  <div key={item.id} className='delivery-item'>
                      <img src={item.cover} alt={item.title} />
                      <div>{item.title}</div>
                  </div>
              )})}
      </div>
    </div>
  );
};

export default DeliveryCollections;
