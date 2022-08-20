import React from 'react';
import Banner from './Banner';
import Review from './Review';
import ServicesHome from './ServicesHome';
import Stat from './Stat';

const Home = () => {
    return (
        <>
        <Banner></Banner>
        <ServicesHome></ServicesHome>     
        <Stat></Stat>
        <Review></Review>
        </>
    );
};

export default Home;