import React from 'react';
import logo from '../../Assets/locale 1.png';
import './BottomLogo.css'

const BottomLogo = () => {
    return (
        <div className='bg-black  '>
            <hr className='hr lg:mx-20 sm: ml-9' />
            <img className='bg-black padding-logo lg:m-8' src={logo} alt="logo" />
            <hr className='hr lg:mx-20 sm: ml-9'  />
        </div>
    );
};

export default BottomLogo;