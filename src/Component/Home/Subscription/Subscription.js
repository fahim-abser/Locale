import React from 'react';
import { FaInstagram, FaFacebook} from 'react-icons/fa';

const Subscription = () => {
    return (
        <div className="lg:navbar bg-black ">
  
  <div className="flex-1 bg-black mt-12">
    <div className="bg-black">
   <div className="mt-8 mb-6 bg-black">
  
             <div className='bg-black px-14'>
            <p className='bg-black text-white'>SIGNUP FOR OUR NEWS LETTER TO RECEIVED UPDATE</p>
             <input type="text" placeholder="Enter your email" className="input rounded-none input-bordered input-sm w-30 max-w-xs" />
             <button className="btn btn-sm rounded-none bg-white">Subscribe</button>
             </div> 
    </div>
    </div>
  </div>
  <div className="flex-none bg-black mr-24 block mt-8">
  <div className='ml-14'>
     <p className='bg-black text-white'>CONNECT</p>
             <div className='bg-black'>
             <button className='btn btn-square rounded-none bg-white'><FaFacebook/></button>
             <button className='btn btn-square rounded-none bg-white '><FaInstagram/></button>
             </div>
     </div>
  </div>
</div>

    );
};

export default Subscription;