import React from 'react';
import { NavLink } from 'react-router-dom';

const SignIn = () => {
    return (
        <div className='SignIn'>
            <section className='container-signin'>
                <i className="fas fa-user-circle"></i>
                <h1>Sign In</h1>
                <form action="" className='form'>
                    <div className='input'>
                        <label className='label-input' htmlFor="username">Username</label>
                        <input type="text" id='username' />
                    </div>
                    <div className='input'>
                        <label className='label-input' htmlFor="password">Password</label>
                        <input type="text" id='password' />
                    </div>
                    <div className='input-remember'>
                        <input type="checkbox" id='remember-me' />
                        <label className='label-remember-me' htmlFor="remember-me">Remember me</label>
                    </div>
                    <NavLink to="/user" className="button-signin">Sign In</NavLink>
                </form>
            </section>
        </div>
    );
};

export default SignIn;