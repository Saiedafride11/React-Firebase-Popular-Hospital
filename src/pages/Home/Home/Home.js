import React from 'react';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import Doctors from '../Doctors/Doctors';
import Blog from '../Blog/Blog';
import Newsletter from '../Newsletter/Newsletter';

const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <Doctors></Doctors>
            <Blog></Blog>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;