import React from 'react';
import logo from '../../Assets/locale 1.png';
import './Navbar.css';
import { BsSearch } from "react-icons/bs";

const Navbar = () => {
    return (
        <div>
            <div className='hero-content flex-col lg:flex-row'>
                <p className='navbar-start lg:pl-28'>Call us: +92 309 2039251</p>
                <img className='navbar-center lg:ml-28 image' src={logo} alt="" />
                
                <button className="navbar-end lg:ml-28"> <BsSearch className='inline'></BsSearch> SEARCH</button>
            </div>
            <div>
                <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
      <li><a>SALE</a></li>
      <li><a>Footwear</a></li>
      <li><a>Fragrances</a></li>
      <li><a>Unstitched</a></li>
      <li><a>Western Wear</a></li>
      <li><a>PERT</a></li>
      <li><a>Shawls</a></li>
      <li><a>Our Vision</a></li>
      <li><a>Maahru World</a></li>
      </ul>
    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 ">
    <li><a>SALE</a></li>
      <li><a>Footwear</a></li>
      <li><a>Fragrances</a></li>
      <li><a>Unstitched</a></li>
      <li><a>Western Wear</a></li>
      <li><a>PERT</a></li>
      <li><a>Shawls</a></li>
      <li><a>Our Vision</a></li>
      <li><a>Maahru World</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    
  </div>
</div>
            </div>
        </div>
    );
};

export default Navbar;