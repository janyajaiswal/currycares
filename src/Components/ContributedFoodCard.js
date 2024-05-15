import React from 'react';
import "./ContributedFoodCard.css";

const ContributedFoodCard = ({ food }) => {
  return (
    <div className="contributed-food-card" key={food._id}>
      <img src={food.picture} alt="Food" className="food-image" />
      <div className="food-details">
        <p className="description">{food.description}</p>
        <p className="best-before-date">Best Before Date: {food.bestBeforeDate}</p>
        <p className="quantity">Quantity: {food.quantity}</p>
        <p className="price">Price: {food.price}</p>
      </div>
    </div>
  );
};

export default ContributedFoodCard;
