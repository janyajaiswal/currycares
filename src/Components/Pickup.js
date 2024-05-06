import React from 'react';
import './pickup.css'
import Collection from './common/collection';

import trending from '../images/trending.jpg';
import topPicks from '../images/topPicks.jpg';
import quickBites from '../images/quickBites.jpg';
import healthyEats from '../images/healthyEats.jpg';
import internationalFlavors from '../images/internationalFlavors.jpg';
import lateNightCravings from '../images/lateNightCravings.jpg';

const collectionList = [
    {
        id: "1",
        title: "Top Picks for You",
        cover: topPicks,
        places: "8 places"
    },
    {
        id: "2",
        title: "Trending this week",
        cover: trending,
        places: "12 places"
    },
    {
        id: "3",
        title: "Quick Bites",
        cover: quickBites,
        places: "5 places"
    },
    {
        id: "4",
        title: "Healthy Eats",
        cover: healthyEats,
        places: "9 places"
    },
    {
        id: "5",
        title: "International Flavors",
        cover: internationalFlavors,
        places: "14 places"
    },
    {
        id: "6",
        title: "Late Night Cravings",
        cover: lateNightCravings,
        places: "7 places"
    }
];

const Pickup = () => {
    return (
        <div>
            <Collection list={collectionList} />
        </div>
    )
};
export default Pickup