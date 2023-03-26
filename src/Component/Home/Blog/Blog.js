import React from 'react';
import image from '../../Assets/blog image.png'
import { FaRegComment} from 'react-icons/fa';

const Blog = () => {
    return (
        <div className='bg-gray-100 text-center bg-gray-100'>
          <p className='bg-gray-100 text-center'>MAAHRU</p>
            <h2 className='bg-gray-100 text-black text-4xl'>OUR BLOG</h2>
            <p  className='bg-gray-100 mb-8'>UPDATES ON MAAHRU FASHION TRENDS</p>
          <div className="hero-content flex-col lg:flex-row bg-gray-100 lg:ml-8">
          <div className=''>
    <figure><img className=''  src={image} alt="" /></figure>
  <div className="card-body ">
    <h2 className="card-title text-black text-left">First Look at Maahru Rangon Mein Vol.02: the Epitome of Grace & Style!</h2>
    <hr />
    <div className='lg:flex'>
    <p className='text-left '>Jun 30, 2021 | </p>
    <div className='flex blogWidth'>
   <FaRegComment className='m-1 '></FaRegComment>
    <p>0</p>
    </div>
    </div>
    <p className='text-black text-left'>Waiting for the new Maahru collection to come out? Well, no more! The all new unstitched lawn collection by Maahru is soon...</p>
    
  </div>
  </div>
  <div>
    <figure><img  src={image} alt="" /></figure>
  <div className="card-body ">
    <h2 className="card-title text-black text-left">First Look at Maahru Rangon Mein Vol.02: the Epitome of Grace & Style!</h2>
    <hr />
    <div className='lg:flex'>
    <p className='text-left '>Jun 30, 2021 | </p>
    <div className='flex blogWidth'>
   <FaRegComment className='m-1 '></FaRegComment>
    <p>0</p>
    </div>
    </div>
    <p className='text-black text-left'>Waiting for the new Maahru collection to come out? Well, no more! The all new unstitched lawn collection by Maahru is soon...</p>
    
  </div>
  </div>
  <div>
    <figure><img  src={image} alt="" /></figure>
  <div className="card-body ">
    <h2 className="card-title text-black text-left">First Look at Maahru Rangon Mein Vol.02: the Epitome of Grace & Style!</h2>
    <hr />
    <div className='lg:flex'>
    <p className='text-left '>Jun 30, 2021 | </p>
    <div className='flex blogWidth'>
   <FaRegComment className='m-1 '></FaRegComment>
    <p>0</p>
    </div>
    </div>
    <p className='text-black text-left'>Waiting for the new Maahru collection to come out? Well, no more! The all new unstitched lawn collection by Maahru is soon...</p>
    
  </div>
  </div>

</div>
<div className='text-center bg-gray-100'>
<button className="btn btn-active rounded-none text-white mb-20 h-10 mt-8">VIEW ALL BLOG</button>
</div>
        </div>
    );
};

export default Blog;