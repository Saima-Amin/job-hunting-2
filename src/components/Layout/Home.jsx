// import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
// import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Categories></Categories>
            <FeaturedJobs></FeaturedJobs>
            <Footer></Footer>
            {/* <Outlet></Outlet> */}
        </div>
    );
};

export default Home;