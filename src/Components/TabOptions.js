import React from 'react';
import contribute from '../images/contribute.png';
import delivery from '../images/delivery.jpeg';
import pickup from '../images/pickup.png';
import contributeblack from '../images/contributeblack.png';
import deliveryblack from '../images/deliveryblack.jpeg';
import pickupblack from '../images/pickupblack.png';
import "./taboptions.css";
const tabs = [
  {
    id: 1,
    name: "Delivery",
    active_img: delivery,
    backdrop: "FCEEC0",
    inactive_img: deliveryblack,
  },
  {
    id: 2,
    name: "Pickup",
    active_img: pickup,
    backdrop: "FCEEC0",
    inactive_img: pickupblack,
  },
  {
    id: 3,
    name: "Contribute",
    active_img: contribute,
    backdrop: "FCEEC0",
    inactive_img: contributeblack,
  }
]
export default function TabOptions({activeTab, setActiveTab}) {//destructuring javascript
  return (
    <div className='tab-options'>
      <div className='max-width options-wrapper'>
        {tabs.map((tab) => {
          return (
            <div className={`tab-item absolute-center cur-po ${activeTab===tab.name && "active-tab"}`}//conditional classes
                 onClick={() => setActiveTab(tab.name)}>
                  
              <div className='tab-image-container absolute-center'
                style={{
                  backgroundColor: `${activeTab === tab.name ? tab.backdrop : ""
                    }`
                }}>
                <img className='tab-image' alt={tab.name} src={activeTab===tab.name ? tab.active_img:tab.inactive_img}></img>
              </div>
              <div className='tab'>{tab.name}</div>
            </div>
          )
        })}
      </div>
    </div>
  );
}
