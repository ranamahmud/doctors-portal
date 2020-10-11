import React from 'react';
import { Navbar } from 'react-bootstrap';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import './Header.css'
const Header = () => {
    return (
        <div className="header-container">
            <Navbar />
            <HeaderMain />
            <BusinessInfo />
        </div>
    );
};

export default Header;