import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/argentBankLogo.png"

const Header = () => {
    return (
        <div className='Header'>
            <NavLink to="/" >
                <img className='logo' src={logo} alt="argent bank logo" />
            </NavLink>
            <NavLink to="/sign-in" className='icon-signup' >
                <i className="fas fa-user-circle"></i>
                <span className='signin'>Sign In</span>
            </NavLink>
        </div >
    );
};

export default Header;