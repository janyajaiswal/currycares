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
    "description": "Modern Asian restaurant offering a variety of Japanese and Chinese dishes.",
    "breakfast": Math.floor(Math.random() * 5), // Random value between 0 and 4
    "lunch": Math.floor(Math.random() * 5), // Random value between 0 and 4
    "dinner": Math.floor(Math.random() * 5) // Random value between 0 and 4
  },
  {
    "name": "Truffles",
    "location": "Koramangala",
    "cuisine": ["Burger", "American", "Fast Food"],
    "rating": 4.3,
    "reviews_count": 1800,
    "image": truffles,
    "sb_avg_cost": "₹149 for one",
    "description": "Casual eatery known for its delicious burgers and American fast food.",
    "breakfast": Math.floor(Math.random() * 5), // Random value between 0 and 4
    "lunch": Math.floor(Math.random() * 5), // Random value between 0 and 4
    "dinner": Math.floor(Math.random() * 5) // Random value between 0 and 4
  },
  {
    "name": "Karavalli",
    "location": "Residency Road",
    "cuisine": ["South Indian", "Seafood"],
    "rating": 4.7,
    "reviews_count": 900,
    "image": karavalli,
    "sb_avg_cost": "₹399 for one",
    "description": "Fine dining restaurant offering traditional South Indian and seafood dishes.",
    "breakfast": Math.floor(Math.random() * 5), // Random value between 0 and 4
    "lunch": Math.floor(Math.random() * 5), // Random value between 0 and 4
    "dinner": Math.floor(Math.random() * 5) // Random value between 0 and 4
  },
  {
    "name": "Vidyarthi Bhavan",
    "location": "Basavanagudi",
    "cuisine": ["South Indian", "Breakfast"],
    "rating": 4.8,
    "reviews_count": 2500,
    "image": vidyarthi_bhavan,
    "sb_avg_cost": "₹199 for one",
    "description": "Iconic eatery known for its delicious South Indian breakfast dishes.",
    "breakfast": Math.floor(Math.random() * 5), // Random value between 0 and 4
    "lunch": Math.floor(Math.random() * 5), // Random value between 0 and 4
    "dinner": Math.floor(Math.random() * 5) // Random value between 0 and 4
  },
  {
    "name": "Toit",
    "location": "Indiranagar",
    "cuisine": ["European", "Continental", "Pizza"],
    "rating": 4.6,
    "reviews_count": 1500,
    "image": toit,
    "sb_avg_cost": "₹299 for one",
    "description": "Popular brewery known for its European and Continental dishes.",
    "breakfast": Math.floor(Math.random() * 5), // Random value between 0 and 4
    "lunch": Math.floor(Math.random() * 5), // Random value between 0 and 4
    "dinner": Math.floor(Math.random() * 5) // Random value between 0 and 4
  },
  {
    "name": "Cafe Thulp",
    "location": "Koramangala",
    "cuisine": ["Burger", "American", "Fast Food"],
    "rating": 4.1,
    "reviews_count": 1200,
    "image": cafe_thulp,
    "sb_avg_cost": "₹449 for one",
    "description": "Casual dining spot offering a variety of burgers and American fast food.",
    "breakfast": Math.floor(Math.random() * 5), // Random value between 0 and 4
    "lunch": Math.floor(Math.random() * 5), // Random value between 0 and 4
    "dinner": Math.floor(Math.random() * 5) // Random value between 0 and 4
  },
  {
    "name": "Koshy's",
    "location": "St. Marks Road",
    "cuisine": ["Continental", "Indian", "South Indian"],
    "rating": 4.2,
    "reviews_count": 1100,
    "image": koshys,
    "sb_avg_cost": "₹129 for one",
    "description": "Heritage restaurant serving a mix of Continental, Indian, and South Indian cuisine.",
    "breakfast": Math.floor(Math.random() * 5), // Random value between 0 and 4
    "lunch": Math.floor(Math.random() * 5), // Random value between 0 and 4
    "dinner": Math.floor(Math.random() * 5) // Random value between 0 and 4
  },
  {
    "name": "Sri Sairam's Chaat and Juice",
    "location": "Jayanagar",
    "cuisine": ["Street Food", "Juices"],
    "rating": 4.6,
    "reviews_count": 800,
    "image": sri_sairams,
    "sb_avg_cost": "₹349 for one",
    "description": "Local favorite for delicious street food and refreshing juices.",
    "breakfast": Math.floor(Math.random() * 5), // Random value between 0 and 4
    "lunch": Math.floor(Math.random() * 5), // Random value between 0 and 4
    "dinner": Math.floor(Math.random() * 5) // Random value between 0 and 4
  },
  {
    "name": "Mavalli Tiffin Room (MTR)",
    "location": "Lalbagh Road",
    "cuisine": ["South Indian"],
    "rating": 4.5,
    "reviews_count": 1700,
    "image": mtr,
    "sb_avg_cost": "₹179 for one",
    "description": "Iconic South Indian restaurant serving delicious breakfast and snacks.",
    "breakfast": Math.floor(Math.random() * 5), // Random value between 0 and 4
    "lunch": Math.floor(Math.random() * 5), // Random value between 0 and 4
    "dinner": Math.floor(Math.random() * 5) // Random value between 0 and 4
  },
  {
    "name": "Corner House Ice Cream",
    "location": "Indiranagar",
    "cuisine": ["Desserts", "Ice Cream"],
    "rating": 4.7,
    "reviews_count": 2000,
    "image": corner_house,
    "sb_avg_cost": "₹549 for one",
    "description": "Famous ice cream parlor offering a variety of desserts and ice cream flavors.",
    "breakfast": Math.floor(Math.random() * 5), // Random value between 0 and 4
    "lunch": Math.floor(Math.random() * 5), // Random value between 0 and 4
    "dinner": Math.floor(Math.random() * 5) // Random value between 0 and 4
  },
  {
    "name": "Cafe Coffee Day",
    "location": "MG Road",
    "cuisine": ["Cafe", "Beverages"],
    "rating": 4.0,
    "reviews_count": 1400,
    "image": cafe_coffee_day,
    "sb_avg_cost": "₹449 for one",
    "description": "Coffee shop chain known for its variety of hot and cold beverages.",
    "breakfast": Math.floor(Math.random() * 5), // Random value between 0 and 4
    "lunch": Math.floor(Math.random() * 5), // Random value between 0 and 4
    "dinner": Math.floor(Math.random() * 5) // Random value between 0 and 4
  },
  {
    "name": "Barbeque Nation",
    "location": "Indiranagar",
    "cuisine": ["North Indian", "Barbecue"],
    "rating": 4.4,
    "reviews_count": 1900,
    "image": barbeque_nation,
    "sb_avg_cost": "₹199 for one",
    "description": "Buffet restaurant known for its delicious North Indian and barbecue dishes.",
    "breakfast": Math.floor(Math.random() * 5), // Random value between 0 and 4
    "lunch": Math.floor(Math.random() * 5), // Random value between 0 and 4
    "dinner": Math.floor(Math.random() * 5) // Random value between 0 and 4
  },
  {
    "name": "Airlines Hotel",
    "location": "Lavelle Road",
    "cuisine": ["South Indian", "Breakfast"],
    "rating": 4.3,
    "reviews_count": 1500,
    "image": airlines_hotel,
    "sb_avg_cost": "₹299 for one",
    "description": "Classic South Indian restaurant known for its delicious breakfast dishes.",
    "breakfast": Math.floor(Math.random() * 5), // Random value between 0 and 4
    "lunch": Math.floor(Math.random() * 5), // Random value between 0 and 4
    "dinner": Math.floor(Math.random() * 5) // Random value between 0 and 4
  },
  {
    "name": "The Black Pearl",
    "location": "Koramangala",
    "cuisine": ["North Indian", "Chinese", "Continental"],
    "rating": 4.6,
    "reviews_count": 1000,
    "image": the_black_pearl,
    "sb_avg_cost": "₹549 for one",
    "description": "Multi-cuisine restaurant offering North Indian, Chinese, and Continental dishes.",
    "breakfast": Math.floor(Math.random() * 5), // Random value between 0 and 4
    "lunch": Math.floor(Math.random() * 5), // Random value between 0 and 4
    "dinner": Math.floor(Math.random() * 5) // Random value between 0 and 4
  },
  {
    "name": "Maiyas",
    "location": "Jayamahal",
    "cuisine": ["South Indian", "North Indian", "Sweets"],
    "rating": 4.2,
    "reviews_count": 800,
    "image": maiyas,
    "sb_avg_cost": "₹349 for one",
    "description": "Popular eatery offering a variety of South Indian, North Indian, and sweet dishes.",
    "breakfast": Math.floor(Math.random() * 5), // Random value between 0 and 4
    "lunch": Math.floor(Math.random() * 5), // Random value between 0 and 4
    "dinner": Math.floor(Math.random() * 5) // Random value between 0 and 4
  }
];
