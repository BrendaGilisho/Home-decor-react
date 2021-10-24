import React from 'react';
import './home.css'
import Banner from '../components/Banner';
import HotDeals from '../components/HotDeals';
import Offer from '../components/Offer';
import SignUp from './sign-up';
import ShopTheLook from '../components/ShopTheLook';
import Footer from '../components/Footer';

const Home = () => {
    return(
        <div className='home'>
             <Banner /> 
             <HotDeals />
             <Offer />
            {/* <ShopTheLook />  */}
             <h1>Shop the look...</h1>
             {/* < SignUp /> */}
             < Footer />

        </div>
    );
}

export default Home;