import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import logo from "../assets/argentBankLogo.png"
import { setLog } from "../feature/log.slice"
import { setStatus } from '../feature/status.slice';
import { setUser } from '../feature/user.slice';

const Header = () => {
    const log = useSelector((state) => state?.log?.log)
    const firstname = useSelector((state) => state?.user?.user?.firstName)

    const dispatch = useDispatch();

    const logout = () => {
        dispatch(setLog(null))
        dispatch(setUser({}))
        dispatch(setStatus(null))

    }
    return (
        <div className='Header'>
            <NavLink to="/" >
                <img className='logo' src={logo} alt="argent bank logo" />
            </NavLink>

            {
                log ? <div className='signout'>
                    <i className="fas fa-user-circle"></i>
                    <span>{firstname}</span>
                    <NavLink to="/" className='container-icon-signout' onClick={logout} >
                        <i className='fa fa-sign-out'></i>
                        <span>Sign Out</span>
                    </NavLink>
                </div> :
                    <div className='container-icon-signin'>
                        <NavLink to="/sign-in" className="link">
                            <i className="fas fa-user-circle"></i>
                            <span className='signin'>Sign In</span>
                        </NavLink>
                    </div>
            }
        </div >
    );
};

export default Header;