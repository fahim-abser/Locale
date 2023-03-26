import React from 'react';
import './HappyCustomer.css'
import image from '../../Assets/img.png'
const HappyCustomer = () => {
    return (
        <div className='bg-gray-100'>
            <div className='text-center '>
            <h2 className='bg-gray-100 text-4xl text-black'>HAPPY CUSTOMERS</h2>
            <p className='bg-gray-100 text-black'>We feel the joy in Serving you the Best</p>
            </div>
            <div className="hero-content flex-col lg:flex-row bg-gray-100 text-black lg:ml-28 pl-12 w-5/6">
            <div className='bg-gray-100 text-black '>
                <p className='p-11  mt-12 italic'>Love the chic, minimalist designs - the best part is that all are available at a very affordable price point! The quality of the fabric is also fabulous! Excited for the upcoming collections! Best of luck Team Maahru!</p>
                
                <div className='hero-content bg-gray-100 flex-col lg:flex-row mr-60 '>
                <img className='mt-6 left' src={image} alt="" />
                <div className='left lg:mt-5'>
                <p className='bg-gray-100'>Sumbul Iqbalb</p>
                <p className='bg-gray-100 text-gray-400'>Celebrity/Actress</p>
                </div>
                </div>
            </div>
            <div className='bg-gray-100 text-black '>
                <p className='p-11 mt-12  italic'>Love the chic, minimalist designs - the best part is that all are available at a very affordable price point! The quality of the fabric is also fabulous! Excited for the upcoming collections! Best of luck Team Maahru!</p>
                
                <div className='hero-content bg-gray-100 flex-col lg:flex-row mr-60'>
                <img className='mt-6 left' src={image} alt="" />
                <div className='left mt-5'>
                <p className='bg-gray-100'>Sumbul Iqbal1</p>
                <p className='bg-gray-100 text-gray-400'>Celebrity/Actress</p>
                </div>
                </div>
            </div>
            </div>
            <div className="hero-content flex-col lg:flex-row bg-gray-100 text-black lg:ml-28 pl-12 w-5/6">
            <div className='bg-gray-100 text-black '>
                <p className='p-11 italic'>Love the chic, minimalist designs - the best part is that all are available at a very affordable price point! The quality of the fabric is also fabulous! Excited for the upcoming collections! Best of luck Team Maahru!</p>
                
                <div className='hero-content bg-gray-100 flex-col lg:flex-row mr-60'>
                <img className='mt-6 left h-24 w-24' src={image} alt="" />
                <div className='left mt-5'>
                <p className='bg-gray-100'>Sumbul Iqbal1</p>
                <p className='bg-gray-100 text-gray-400'>Celebrity/Actress</p>
                </div>
                </div>
            </div>
            <div className='bg-gray-100 text-black '>
                <p className='p-11 italic'>Love the chic, minimalist designs - the best part is that all are available at a very affordable price point! The quality of the fabric is also fabulous! Excited for the upcoming collections! Best of luck Team Maahru!</p>
                
                <div className='hero-content bg-gray-100 flex-col lg:flex-row mr-60'>
                <img className='mt-6 left' src={image} alt="" />
                <div className='left mt-5'>
                <p className='bg-gray-100'>Sumbul Iqbal1</p>
                <p className='bg-gray-100 text-gray-400'>Celebrity/Actress</p>
                </div>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default HappyCustomer;