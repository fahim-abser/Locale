import React from 'react';
import image from '../../Assets/unstiched.png';
import image2 from '../../Assets/card2.png';
import './Card.css'
const Card = () => {
    return (
        <div  className='p-0'>
            <div className="hero min-h-screen bg-gray-100 lg:mt-32">
  <div className="hero-content flex-col lg:flex-row bg-gray-100">
    <img src={image} alt='' className=" lg:size" />
    <img src={image2} alt=''className="lg:size " />
  </div>
</div>
        </div>
    );
};

export default Card;