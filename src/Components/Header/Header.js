import React from 'react';
import './Header.css'

import logo from '../../images/exercise-logo.png'
const Header = () => {
    return (
        <nav className='nav'>
            <img src={logo} alt="" />
            <h1>Daily Work Routine</h1>

        </nav>
    );
};

export default Header;