import React, { useEffect, useState } from 'react'; //hooks
import Navbar from '../Components/Navbar';
import Body from '../Components/Body';
import Footer from '../Components/Footer';
import TabOptions from '../Components/TabOptions';
import Pickup from '../Components/Pickup';
import Delivery from '../Components/Delivery'; 
import Contribute from '../Components/Contribute';

const Home = () => {
// Whichever tab is currently selected
  const [activeTab, setActiveTab] = useState("Delivery");



  const [foodCat, setFoodCat] = useState([]); // State for food categories
  const [foodItem, setFoodItem] = useState([]); // State for food items

  // Function to fetch data from the server
  const loadData = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/foodData", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();
      if (Array.isArray(data) && data.length >= 2) {
        // Set the received data in state
        setFoodItem(data[0]);
        setFoodCat(data[1]);
      } else {
        console.error("Invalid data format received from server");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Load data when the component mounts
  useEffect(() => { loadData(); }, []); // Dependency is given in this square bracket. If it doesn't depend on any other element,
  // it loads as soon as the page starts.
  
  //--------------------------RETURN---------------------------
  return (
    <div>
      <Navbar />
      {/*activeTab is passed as a prop*/}
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} /> 
      {getCorrectScreen(activeTab)}
      <Body />
      <div className='homecontainer'>
        {/* Render food categories */}
        {foodCat.length > 0 ? (
          foodCat.map((data) => {
            return (
              <div className='row mb-3'>{/* to adjust rows */}
                <div key={data._id} className='cards'>
                  {/* If there are food categories available, it maps through the array and renders a <div> element for each category */}
                  {data.CategoryName}
                  <hr />
                  {foodItem.length > 0 ?
                    foodItem.filter((item) => item.CategoryName === data.CategoryName)
                      .map(filterItems => {
                        return (
                          <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                            {/*---------Add CARD here-------------- */}
                            {/*
                              <Card foodName = {filterItems.name}
                                       description={filterItems.description}
                                       imgSrc = {filterItems.image}> 
                              </Card>
                              */}
                          </div>
                        );
                      })
                    :
                    <div>"No such data found"</div>
                  }
                </div>
              </div>
            );
          })
        ) : (
          <div>No food categories found</div>
        )}
          
      </div>
      {/* Render Footer */}
      <Footer />
    </div>
  );
          
};

const getCorrectScreen = (tab) => {
  switch (tab)
  {                   //return the body component that is selected below
    case "Delivery":
      return <Delivery/>
    case "Pick up":
      return <Pickup/>
    case "Contribute to Cause":
      return <Contribute/>
    default:
      return <div>Delivery</div>
  }
};

export default Home;
