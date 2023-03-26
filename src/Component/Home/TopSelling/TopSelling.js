import React from 'react';
import image from '../../Assets/topSelling.png'
import './Topselling.css';

const TopSelling = () => {
    return (
        <div className='text-center bg-gray-100'>
            <div className='bg-gray-100'>
            <h2 className='bg-gray-100 mb-6'>TOP SELLING</h2>
            <button className="btn btn-sm rounded-none mr-2">UNSTITCHED</button>
            <button className="btn btn-sm btn-outline mr-2 rounded-none">PRET</button>
            <button className="btn btn-sm btn-outline rounded-none">ON Sale</button>
            </div>
            <div className="hero min-h-screen bg-gray-100">
  <div className="hero-content bg-gray-100 flex-col lg:flex-row">
  <div className='pb-10'>
    <p ><span className='absolute mt-6 position  text-black underline font-bold'>SALE</span></p>
  <img className='ml-7 mt-0 sellingImage h-60 w-60  ' src={image} alt="" />
 
  <p className='text-xs mt-4 mb-1.5'>UNSTITCHED</p>
    <p className='font-bold text-black '>Maahru Ivory Bloom - Women's Unstitched 2PC Summer Printed Lawn With Dupatta</p>
    <p><span className='line-through'>Rs.3,130.00</span> <span className='text-black'>Rs.1,399.00</span></p>
    <p className='text-xs ml-16 pl-8'>No Reviews</p>
  </div>
  <div className='pb-10'>
    <p className=''><span className='absolute mt-6 position text-black underline font-bold'>SALE</span></p>
  <img className='ml-7 mt-0 sellingImage h-60 w-60  ' src={image} alt="" />
 
  <p className='text-xs mt-4 mb-1.5'>UNSTITCHED</p>
    <p className='font-bold text-black '>Maahru Ivory Bloom - Women's Unstitched 2PC Summer Printed Lawn With Dupatta</p>
    <p><span className='line-through'>Rs.3,130.00</span> <span className='text-black'>Rs.1,399.00</span></p>
    <p className='text-xs ml-16 pl-8'>No Reviews</p>
  </div>
  <div className='pb-10'>
    <p className=''><span className='absolute mt-6 position text-black underline font-bold'>SALE</span></p>
  <img className='ml-7 mt-0 sellingImage h-60 w-60  ' src={image} alt="" />
 
  <p className='text-xs mt-4 mb-1.5'>UNSTITCHED</p>
    <p className='font-bold text-black '>Maahru Ivory Bloom - Women's Unstitched 2PC Summer Printed Lawn With Dupatta</p>
    <p><span className='line-through'>Rs.3,130.00</span> <span className='text-black'>Rs.1,399.00</span></p>
    <p className='text-xs ml-16 pl-8'>No Reviews</p>
  </div>
  <div className='pb-10'>
    <p className=''><span className='absolute mt-6 position text-black underline font-bold'>SALE</span></p>
  <img className='ml-7 mt-0 sellingImage h-60 w-60  ' src={image} alt="" />
 
  <p className='text-xs mt-4 mb-1.5'>UNSTITCHED</p>
    <p className='font-bold text-black '>Maahru Ivory Bloom - Women's Unstitched 2PC Summer Printed Lawn With Dupatta</p>
    <p><span className='line-through'>Rs.3,130.00</span> <span className='text-black'>Rs.1,399.00</span></p>
    <p className='text-xs ml-16 pl-8'>No Reviews</p>
  </div>
  </div>
</div>

        </div>
    );
};

export default TopSelling;



