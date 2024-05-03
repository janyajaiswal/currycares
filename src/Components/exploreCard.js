import React from 'react';
import "./exploreCard.css";

const ExploreCard = ({ restaurant }) => {
    const name = restaurant?.name ?? "";
    const coverImg = restaurant?.image;
    const rating = restaurant?.rating;
    const approxPrice = restaurant?.sb_avg_cost;
    const cuisines = restaurant?.cuisine?.map((item) => item);
    //question mark prevents undecided status
    return (
        <div className='explore-card cur-po'>
            <div className='explore-card-cover'>
                <img src={coverImg} alt={name} className='explore-card-image' />
                <div className='res-row'>
                    <div className='res-name'>{name}</div>
                    {rating && (
                        <div className='res-rating absolute-center'>
                            {rating} <i className="fa-solid fa-star absolute-center"></i>
                        </div>)}
                </div>
                <div className='card-seperator'></div>
                <div className='res-row'>
                    {cuisines.length && (
                        <div className='res-cuisine'>
                        {cuisines.map((item,i) => {
                            return (
                                <span className='res-cuisine-tag'>
                                    {item} {i !== cuisines.length - 1 && ","}
                            </span>
                            );
                        })}   
                        </div>
                    )}
                     {approxPrice && <div className='res-price'>{approxPrice}</div>}    
                </div>

            </div>
        </div>
    );
}

export default ExploreCard;
