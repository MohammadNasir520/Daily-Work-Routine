import React from 'react';
import Activites from '../Activities/Activites';

import './Home.css'

const Home = () => {
    return (
        <div className='home-container'>
            <div className='header-with-activities'>
                
                <Activites></Activites>
            </div>
            
            
        </div>
    );
};

export default Home;