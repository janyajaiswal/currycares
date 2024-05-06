import React from 'react';
import "./collection.css";
import Slider from 'react-slick/lib/slider';
import NextArrow from './carousel/nextArrow';
import PrevArrow from './carousel/prevArrow';

const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
};


const Collection = ({ list }) => {//destructure
    return (
        <div className='collection-wrapper'>
            <div className='max-width collection'>
                <div className='collection-title'>Collections</div>
                <div className='collection-subtitle-row'>
                    <div className='collection-subtitle-text'>
                        Curated Lists of Top Restaurants
                    </div>
                    <div className='collection-location'>
                        <div>All collections in Bengaluru</div>
                        <i className="fa-solid fa-caret-right absolute-center"></i>
                    </div>
                </div>
                <Slider {...settings}>
                    {list.map((item) => (
                        <div>{/*for each item a div*/}
                            <div className='collection-cover'>
                                <img src={item.cover} className='collection-image' alt={item.title} />
                                <div className='gradient-bg'></div>
                                <div className='collection-card-title'>{item.title}</div>
                                <div className='collection-card-subtitle'>
                                    <div>{item.places}</div>
                                    <i className="fa-solid fa-caret-right absolute-center"></i>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
          
        </div>
    );
};

export default Collection