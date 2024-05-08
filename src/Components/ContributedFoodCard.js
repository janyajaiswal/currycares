import React from 'react';
import "./ContributedFoodCard.css";

const ContributedFoodCard = ({ food }) => {
  const { picture, description, bestBeforeDate, quantity, price } = food;

  return (
    <div className="contributed-food-card">
      <img src={picture} alt="Food" className="food-image" />
      <div className="food-details">
        <p className="description">{description}</p>
        <p className="best-before-date">Best Before Date: {bestBeforeDate}</p>
        <p className="quantity">Quantity: {quantity}</p>
        <p className="price">Price: {price}</p>
      </div>
    </div>
  );
};

export default ContributedFoodCard;
