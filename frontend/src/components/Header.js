import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import logo from "../assets/argentBankLogo.png"
import logReducer from "../feature/log.slice"

const Header = () => {
    const log = useSelector((state) => state?.log?.log)
    const firstname = useSelector((state) => state?.user?.user?.firstName)

    return (
        <div className='Header'>
            <NavLink to="/" >
                <img className='logo' src={logo} alt="argent bank logo" />
            </NavLink>
            <NavLink to="/sign-in" className='icon-signup' >
                <i className="fas fa-user-circle"></i>
                <div className='connexion'>
                    {
                        log ? <div className='signout'>
                            <span>{firstname}</span>
                            <i className='fa fa-sign-out'></i>
                            <span>Sign Out</span>
                        </div> : <span className='signin'>Sign In</span>
                    }
                </div>
            </NavLink>
        </div >
    );
};

export default Header;