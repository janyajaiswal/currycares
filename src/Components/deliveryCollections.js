import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import '../Components/deliveryCollections.css';
import NextArrow from './common/carousel/nextArrow';
import PrevArrow from './common/carousel/prevArrow';
import DeliveryItem from './deliveryItem';


const DeliveryCollections = () => {
    const [deliveryItems, setDeliveryItems] = useState([]);

    useEffect(() => {
        const fetchDeliveryItems = async () => {
            try {
                const response = await fetch("http://localhost:4000/api/getItems", {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                const data = await response.json();
                setDeliveryItems(data.data); // Update to set the actual data array
            } catch (error) {
                console.error('Error fetching delivery items:', error);
            }
        };

        fetchDeliveryItems();
    }, []);

    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <div className='delivery-collection'>
            <div className='max-width'>
                <div className='collection-title'>Eat what makes you happy</div>
                <Slider {...settings}>
                    {deliveryItems.map(item => (
                        <DeliveryItem key={item.id} item={item} />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default DeliveryCollections;
