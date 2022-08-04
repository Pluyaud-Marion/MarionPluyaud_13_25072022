import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { setLog } from "../feature/log.slice"
import { setStatus } from '../feature/status.slice';


const SignIn = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const status = useSelector((state) => state.status.status)

    const dispatch = useDispatch();

    const login = {
        email,
        password
    }


    const submitLogin = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3001/api/v1/user/login", login)
            .then(res => {
                dispatch(setLog(res.data.body.token))
                dispatch(setStatus(res.data.status))
            })
    }



    if (status === 200) {
        return <Navigate to="/user" />
    }

    return (
        <div className='SignIn'>
            <section className='container-signin'>
                <i className="fas fa-user-circle"></i>
                <h1>Sign In</h1>
                <form action="" className='form'>
                    <div className='input'>
                        <label className='label-input' htmlFor="username">Username</label>
                        <input onChange={(e) => setEmail(e.target.value)} type="text" id='username' />
                        {/* <p className='noEmail'></p> */}
                    </div>
                    <div className='input'>
                        <label className='label-input' htmlFor="password">Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} type="text" id='password' />
                        {/* <p className='noPassword'></p> */}
                    </div>
                    <div className='input-remember'>
                        <input type="checkbox" id='remember-me' />
                        <label className='label-remember-me' htmlFor="remember-me">Remember me</label>
                    </div>
                    {/* <NavLink to="/user" className="button-signin">Sign In</NavLink> */}
                    {/* <p className='userNotFound'></p> */}

                    <div className='button-signin'>
                        <button onClick={submitLogin} type="sumbit">Sign In</button>
                    </div>

                </form>
            </section>
        </div>
    );

};

export default SignIn;