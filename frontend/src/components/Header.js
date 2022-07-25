import React from 'react';
import logo from "../assets/argentBankLogo.png"

const Header = () => {
    return (
        <div className='Header'>
            <img className='logo' src={logo} alt="argent bank logo" />
            <div className='icon-signup'>
                <i className="fas fa-user-circle"></i>
                <span className='signin'>Sign In</span>
            </div>
        </div >
    );
};

export default Header;