import React from 'react'

const ExploreSection = ({ list, collectionName}) => {
  return (
      <div className='max-widt explore-section'>
          <div className='collection-title'>{collectionName}</div>
          <div className='explore-grid'>
              {list.map((restaurant) => {
                  return
              })}
          </div>
          
    </div>
  )
}

export default ExploreSection