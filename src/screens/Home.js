import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Body from '../Components/Body';
import Footer from '../Components/Footer';
import TabOptions from '../Components/TabOptions';
import Pickup from '../Components/Pickup';
import Delivery from '../Components/Delivery'; 
import Contribute from '../Components/Contribute';

const Home = () => {
  const [activeTab, setActiveTab] = useState("Delivery");
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/foodData", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();
      console.log("Data:", data); // Log the data received from the server
      if (Array.isArray(data) && data.length >= 2) {
        setFoodItem(data[0]);
        setFoodCat(data[1]);
      } else {
        console.error("Invalid data format received from server");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => { 
    loadData(); 
  }, []);

  console.log("foodCat:", foodCat); // Log the value of foodCat
  console.log("foodItem:", foodItem); // Log the value of foodItem

  return (
    <div>
      <Navbar />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} /> 
      {getCorrectScreen(activeTab)}
      <Body />
      <div className='homecontainer'>
        {foodCat.length > 0 ? (
          foodCat.map((cat) => {
            return (
              <div className='row mb-3' key={cat._id}>
                <div className='cards'>
                  {cat.CategoryName}
                  <hr />
                  {foodItem.length > 0 ?
                    foodItem.filter((item) => item.CategoryName === cat.CategoryName)
                      .map((item) => {
                        return (
                          <div key={item._id} className='col-12 col-md-6 col-lg-3'>
                            {/* Render card here */}
                          </div>
                        );
                      })
                    :
                    <div>No items found</div>
                  }
                </div>
              </div>
            );
          })
        ) : (
          <div>No food categories found</div>
        )}
      </div>
      <Footer />
    </div>
  );
};

const getCorrectScreen = (tab) => {
  switch (tab) {
    case "Delivery":
      return <Delivery />;
    case "Pickup":
      return <Pickup />;
    case "Contribute":
      return <Contribute />;
    default:
      return <div>Delivery</div>;
  }
};

export default Home;
