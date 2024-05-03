import React from 'react';
import ExploreCard from "./exploreCard";
import "./exploreSection.css";

const ExploreSection = ({ list, collectionName}) => {
  return (
      <div className='max-width explore-section'>
          <div className='collection-title'>{collectionName}</div>
          <div className='explore-grid'>
              {list.map((restaurant, index) => {
                return <ExploreCard key={index} restaurant={restaurant} />;
              })}
          </div>
      </div>
  );
}

export default ExploreSection;
