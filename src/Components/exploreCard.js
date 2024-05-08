import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../stores/cart/cartSlice';
import { AddProduct } from './AddProducts'; // For veg items
import { AddProduct_nv } from './AddProducts_nv'; // For non-veg items
import "./exploreCard.css";

const ExploreCard = ({ restaurant }) => {
  const dispatch = useDispatch();

  const addProductToCart = (type) => {
    // Dispatch addToCart action with the restaurant object and product type
    dispatch(addToCart({ ...restaurant, type }));
  };

  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {
      setExpanded(!expanded);
  };

  const name = restaurant?.name ?? "";
  const coverImg = restaurant?.image;
  const rating = restaurant?.rating;
  const approxPrice = restaurant?.sb_avg_cost;
  const cuisines = restaurant?.cuisine?.map((item) => item);
  const description = restaurant?.description;
  const breakfast_veg = restaurant?.breakfast_veg;
  const lunch_veg = restaurant?.lunch_veg;
  const dinner_veg = restaurant?.dinner_veg;
  const breakfast_nonveg = restaurant?.breakfast_nonveg;
  const lunch_nonveg = restaurant?.lunch_nonveg;
  const dinner_nonveg = restaurant?.dinner_nonveg;

  // Get current local time
  const currentHour = new Date().getHours();

  // Determine which meal to display based on the current time
  let meal;
  if (currentHour >= 6 && currentHour < 12) {
    meal = expanded ? `Breakfast: ${breakfast_veg !== 0 ? `${breakfast_veg} 🟢` : ''} ${breakfast_nonveg !== 0 ? `${breakfast_nonveg} 🔴` : ''}` : `Breakfast (Veg/Non-Veg)`;
  } else if (currentHour >= 12 && currentHour < 18) {
    meal = expanded ? `Lunch: ${lunch_veg !== 0 ? `${lunch_veg} 🟢` : ''} ${lunch_nonveg !== 0 ? `${lunch_nonveg} 🔴` : ''}` : `Lunch (Veg/Non-Veg)`;
  } else if (currentHour >= 18 && currentHour < 24) {
    meal = expanded ? `Dinner: ${dinner_veg !== 0 ? `${dinner_veg} 🟢` : ''} ${dinner_nonveg !== 0 ? `${dinner_nonveg} 🔴` : ''}` : `Dinner (Veg/Non-Veg)`;
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
            <div className="button-container">
              <AddProduct onAddProduct={() => addProductToCart('veg')} />
              <AddProduct_nv onAddProduct={() => addProductToCart('non-veg')} />
            </div>
          </div>
        )}
        {approxPrice && <div className='res-price'>{approxPrice}</div>}
      </div>
    </div>
  );
};

export default ExploreCard;
