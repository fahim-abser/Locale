import React from 'react';
import Banner from './Banner/Banner';
import Blog from './Blog/Blog';
import BottomLogo from './BottomLogo/BottomLogo';
import Card from './Card/Card';
import Footer from './Footer/Footer';
import HappyCustomer from './HappyCustomer/HappyCustomer';
import Navbar from './Navbar/Navbar';
import Subscription from './Subscription/Subscription';
import TopSelling from './TopSelling/TopSelling';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Card></Card>
            <TopSelling></TopSelling>
            <Blog></Blog>
            <HappyCustomer></HappyCustomer>
            <Subscription></Subscription>
            <BottomLogo></BottomLogo>
            <Footer></Footer>
        </div>
    );
};

export default Home;