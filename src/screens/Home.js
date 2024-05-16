import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Body from '../Components/Body';
import Footer from '../Components/Footer';
import TabOptions from '../Components/TabOptions';
import Pickup from '../Components/Pickup';
import Delivery from '../Components/Delivery'; 
import Contribute from '../Components/Contribute';

const Home = () => {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <div>
      <Navbar />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} /> 
      {getCorrectScreen(activeTab)}
      <Body />
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
