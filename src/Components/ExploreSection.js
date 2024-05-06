import React, { useState, useEffect } from 'react';
import ExploreCard from "./exploreCard";
import "./exploreSection.css";
import { useDispatch } from "react-redux";
import { addToCart } from '../stores/cart/cartSlice';

const ExploreSection = ({ list, collectionName }) => {

  const dispatch = useDispatch();
  const onAddProduct = (restaurant) => {//originates here
    dispatch(addToCart(restaurant))
  }

  return (
      <div className='max-width explore-section'>
          <div className='collection-title'>{collectionName}</div>
          <div className='explore-grid'>
              {list.map((restaurant, index) => {
                return <ExploreCard key={index} restaurant={restaurant} onAddProduct={onAddProduct} />;
              })}
          </div>
      </div>
  );
}

export default ExploreSection;
