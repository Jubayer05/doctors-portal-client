import React from 'react';
import HeaderCart from '../HeaderCart/HeaderCart';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import "./Header.css";

const Header = () => {
    return (
        <div className="header-container">
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <HeaderCart></HeaderCart>
        </div>
    );
};

export default Header;