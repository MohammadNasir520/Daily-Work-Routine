import React from 'react';
import Activites from '../Activities/Activites';
import Header from '../Header/Header';
import SideCart from '../SideCart/SideCart';
import './Home.css'

const Home = () => {
    return (
        <div className='home-container'>
            <div className='header-with-activities'>
                <Header></Header>
                <Activites></Activites>
            </div>
            <div>
                <SideCart></SideCart>
            </div>
            
        </div>
    );
};

export default Home;