import React, { useState } from 'react';
import { AddProduct } from './AddProducts';
import "./exploreCard.css";

const ExploreCard = ({ restaurant, onAddProduct }) => {

  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {
      setExpanded(!expanded);
  };
    
    const addProduct = () => {
      //Code to be added after setting up redux state for cart to add product there
    
    }

  const name = restaurant?.name ?? "";
  const coverImg = restaurant?.image;
  const rating = restaurant?.rating;
  const approxPrice = restaurant?.sb_avg_cost;
  const cuisines = restaurant?.cuisine?.map((item) => item);
  const description = restaurant?.description;
  const breakfast = restaurant?.breakfast;
  const lunch = restaurant?.lunch;
  const dinner = restaurant?.dinner;

  // Get current local time
  const currentHour = new Date().getHours();

  // Determine which meal to display based on the current time
  let meal;
  if (currentHour >= 6 && currentHour < 12) {
    meal = `Breakfast: ${breakfast}`;
  } else if (currentHour >= 12 && currentHour < 18) {
    meal = `Lunch: ${lunch}`;
  } else if (currentHour >= 18 && currentHour < 24) {
    meal = `Dinner: ${dinner}`;
  }

  return (
    <div className={`explore-card cur-po ${expanded ? 'expanded' : ''}`} onClick={toggleExpanded}>
      <div className='explore-card-cover'>
        <img src={coverImg} alt={name} className='explore-card-image' />
        <div className='res-row'>
          <div className='res-name'>{name}</div>
          {rating && (
            <div className='res-rating absolute-center'>
              {rating} <i className="fa-solid fa-star absolute-center"></i>
            </div>
          )}
        </div>
        <div className='card-separator'></div>
        <div className='res-row'>
          {cuisines.length && (
            <div className='res-cuisine'>
              {cuisines.map((item, i) => {
                return (
                  <span className='res-cuisine-tag' key={i}>
                    {item} {i !== cuisines.length - 1 && ","}
                  </span>
                );
              })}
            </div>
          )}
        </div>
        {/* Display meal information only when card is expanded */}
        {expanded && meal && <div className='meal'>{meal}</div>}
        {/* Description placed below cuisines, only when card is expanded */}
        {expanded && description && (
          <div className="description">
            <p>Description: {description}</p>
            <AddProduct onAddProduct={addProduct}/>          
          </div>
                  
        )}
        {approxPrice && <div className='res-price'>{approxPrice}</div>}
      </div>
    </div>
  );
};

export default ExploreCard;
