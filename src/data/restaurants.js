// Import all restaurant images
import the_fatty_bao from "../images/the_fatty_bao.jpeg";
import truffles from "../images/truffles.jpeg";
import karavalli from "../images/karavalli.jpeg";
import vidyarthi_bhavan from "../images/vidyarthi_bhavan.jpeg";
import toit from "../images/toit.jpeg";
import cafe_thulp from "../images/cafe_thulp.jpeg";
import koshys from "../images/koshys.jpeg";
import sri_sairams from "../images/sri_sairams.jpeg";
import mtr from "../images/mtr.jpeg";
import corner_house from "../images/corner_house.jpeg";
import cafe_coffee_day from "../images/cafe_coffee_day.jpeg";
import barbeque_nation from "../images/barbeque_nation.jpeg";
import airlines_hotel from "../images/airlines_hotel.jpeg";
import the_black_pearl from "../images/the_black_pearl.jpeg";
import maiyas from "../images/maiyas.jpeg";

export const restaurants = [
  {
    "name": "The Fatty Bao",
    "location": "Indiranagar",
    "cuisine": ["Asian", "Japanese", "Chinese"],
    "rating": 4.5,
    "reviews_count": 1200,
    "image": the_fatty_bao,
    "sb_avg_cost": "₹249 for one",
    "address": {
      "street": "12th Main, Indiranagar",
      "city": "Bangalore",
      "zipcode": "560008",
      "location_coordinates": {
        "latitude": 12.9716,
        "longitude": 77.5946
      }
    }
  },
  {
    "name": "Truffles",
    "location": "Koramangala",
    "cuisine": ["Burger", "American", "Fast Food"],
    "rating": 4.3,
    "reviews_count": 1800,
    "image": truffles,
    "sb_avg_cost": "₹149 for one",
    "address": {
      "street": "80 Feet Road, Koramangala",
      "city": "Bangalore",
      "zipcode": "560034",
      "location_coordinates": {
        "latitude": 12.9358,
        "longitude": 77.6148
      }
    }
  },
  {
    "name": "Karavalli",
    "location": "Residency Road",
    "cuisine": ["South Indian", "Seafood"],
    "rating": 4.7,
    "reviews_count": 900,
    "image": karavalli,
    "sb_avg_cost": "₹399 for one",
    "address": {
      "street": "The Gateway Hotel, Residency Road",
      "city": "Bangalore",
      "zipcode": "560025",
      "location_coordinates": {
        "latitude": 12.9674,
        "longitude": 77.5958
      }
    }
  },
  {
    "name": "Vidyarthi Bhavan",
    "location": "Basavanagudi",
    "cuisine": ["South Indian", "Breakfast"],
    "rating": 4.8,
    "reviews_count": 2500,
    "image": vidyarthi_bhavan,
    "sb_avg_cost": "₹199 for one",
    "address": {
      "street": "Gandhi Bazaar, Basavanagudi",
      "city": "Bangalore",
      "zipcode": "560004",
      "location_coordinates": {
        "latitude": 12.9423,
        "longitude": 77.5732
      }
    }
  },
  {
    "name": "Toit",
    "location": "Indiranagar",
    "cuisine": ["European", "Continental", "Pizza"],
    "rating": 4.6,
    "reviews_count": 1500,
    "image": toit,
    "sb_avg_cost": "₹299 for one",
    "address": {
      "street": "100 Feet Road, Indiranagar",
      "city": "Bangalore",
      "zipcode": "560008",
      "location_coordinates": {
        "latitude": 12.9740,
        "longitude": 77.6386
      }
    }
  },
  {
    "name": "Cafe Thulp",
    "location": "Koramangala",
    "cuisine": ["Burger", "American", "Fast Food"],
    "rating": 4.1,
    "reviews_count": 1200,
    "image": cafe_thulp,
    "sb_avg_cost": "₹449 for one",
    "address": {
      "street": "Koramangala 5th Block",
      "city": "Bangalore",
      "zipcode": "560095",
      "location_coordinates": {
        "latitude": 12.9350,
        "longitude": 77.6245
      }
    }
  },
  {
    "name": "Koshy's",
    "location": "St. Marks Road",
    "cuisine": ["Continental", "Indian", "South Indian"],
    "rating": 4.2,
    "reviews_count": 1100,
    "image": koshys,
    "sb_avg_cost": "₹129 for one",
    "address": {
      "street": "39, St. Marks Road",
      "city": "Bangalore",
      "zipcode": "560001",
      "location_coordinates": {
        "latitude": 12.9754,
        "longitude": 77.6047
      }
    }
  },
  {
    "name": "Sri Sairam's Chaat and Juice",
    "location": "Jayanagar",
    "cuisine": ["Street Food", "Juices"],
    "rating": 4.6,
    "reviews_count": 800,
    "image": sri_sairams,
    "sb_avg_cost": "₹349 for one",
    "address": {
      "street": "4th T Block, Jayanagar",
      "city": "Bangalore",
      "zipcode": "560041",
      "location_coordinates": {
        "latitude": 12.9306,
        "longitude": 77.5833
      }
    }
  },
  {
    "name": "Mavalli Tiffin Room (MTR)",
    "location": "Lalbagh Road",
    "cuisine": ["South Indian"],
    "rating": 4.5,
    "reviews_count": 1700,
    "image": mtr,
    "sb_avg_cost": "₹179 for one",
    "address": {
      "street": "14, Lalbagh Road",
      "city": "Bangalore",
      "zipcode": "560027",
      "location_coordinates": {
        "latitude": 12.9508,
        "longitude": 77.5846
      }
    }
  },
  {
    "name": "Corner House Ice Cream",
    "location": "Indiranagar",
    "cuisine": ["Desserts", "Ice Cream"],
    "rating": 4.7,
    "reviews_count": 2000,
    "image": corner_house,
    "sb_avg_cost": "₹549 for one",
    "address": {
      "street": "100 Feet Road, Indiranagar",
      "city": "Bangalore",
      "zipcode": "560038",
      "location_coordinates": {
        "latitude": 12.9741,
        "longitude": 77.6395
      }
    }
  },
  {
    "name": "Cafe Coffee Day",
    "location": "MG Road",
    "cuisine": ["Cafe", "Beverages"],
    "rating": 4.0,
    "reviews_count": 1400,
    "image": cafe_coffee_day,
    "sb_avg_cost": "₹449 for one",
    "address": {
      "street": "MG Road",
      "city": "Bangalore",
      "zipcode": "560001",
      "location_coordinates": {
        "latitude": 12.9750,
        "longitude": 77.6018
      }
    }
  },
  {
    "name": "Barbeque Nation",
    "location": "Indiranagar",
    "cuisine": ["North Indian", "Barbecue"],
    "rating": 4.4,
    "reviews_count": 1900,
    "image": barbeque_nation,
    "sb_avg_cost": "₹199 for one",
    "address": {
      "street": "100 Feet Road, Indiranagar",
      "city": "Bangalore",
      "zipcode": "560038",
      "location_coordinates": {
        "latitude": 12.9767,
        "longitude": 77.6408
      }
    }
  },
  {
    "name": "Airlines Hotel",
    "location": "Lavelle Road",
    "cuisine": ["South Indian", "Breakfast"],
    "rating": 4.3,
    "reviews_count": 1500,
    "image": airlines_hotel,
    "sb_avg_cost": "₹299 for one",
    "address": {
      "street": "4, Madras Bank Road, Lavelle Road",
      "city": "Bangalore",
      "zipcode": "560001",
      "location_coordinates": {
        "latitude": 12.9715,
        "longitude": 77.5956
      }
    }
  },
  {
    "name": "The Black Pearl",
    "location": "Koramangala",
    "cuisine": ["North Indian", "Chinese", "Continental"],
    "rating": 4.6,
    "reviews_count": 1000,
    "image": the_black_pearl,
    "sb_avg_cost": "₹549 for one",
    "address": {
      "street": "Koramangala 5th Block",
      "city": "Bangalore",
      "zipcode": "560095",
      "location_coordinates": {
        "latitude": 12.9345,
        "longitude": 77.6228
      }
    }
  },
  {
    "name": "Maiyas",
    "location": "Jayamahal",
    "cuisine": ["South Indian", "North Indian", "Sweets"],
    "rating": 4.2,
    "reviews_count": 800,
    "image": maiyas,
    "sb_avg_cost": "₹349 for one",
    "address": {
      "street": "JP Nagar, Jayamahal",
      "city": "Bangalore",
      "zipcode": "560006",
      "location_coordinates": {
        "latitude": 12.9979,
        "longitude": 77.5885
      }
    }
  }
];
