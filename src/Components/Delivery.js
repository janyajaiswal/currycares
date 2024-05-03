import React from 'react';
import "./delivery.css";
import Filters from'./common/filters.js';
import DeliveryCollections from './deliveryCollections.js';
import ExploreSection from './ExploreSection.js';
import { restaurants } from '../data/restaurants.js';
const deliveryFilters = [
    {
        id: 1,
        icon: <i className="fa-solid fa-filter absolute-center"></i>,
        title: 'Filters',
    },
    {
        id: 2,
        icon: <i class="fa-solid fa-ranking-star"></i>,
        title: 'Ratings 4+',
    },
    {
        id: 3,
        icon: <i className="fa-solid fa-house-medical"></i>,
        title: 'Safe and Hygienic',
    },
    {
        id: 4,
        icon: <i className="fa-solid fa-seedling"></i>,
        title: 'Veg only',
    },
    {
        id: 5,
        icon: <i className="fa-solid fa-stopwatch"></i>,
        title: 'Delivery Time',
    },
    {
        id: 6,
        icon: <i class="fa-solid fa-hand-holding-dollar"></i>,
        title: 'Daily offers',
    }
]
const restaurantList = restaurants;
const Delivery = () => {
    return (
        <div>
            <div className='max-width'>
                <Filters filterList={ deliveryFilters} />
            </div>
            <DeliveryCollections />
            <ExploreSection list= {restaurantList} collectionName= 'Delivery Restaurants in Bengaluru'/>
        </div>
    )
};

export default Delivery;
