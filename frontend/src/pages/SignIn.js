
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { setLog } from "../feature/log.slice"
import { setUser } from "../feature/user.slice"
import { getToken, logUser } from '../utils/services/services';


const SignIn = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch();

    const login = {
        email,
        password
    }

    const log = useSelector((state) => state?.log?.log)

    const submitLogin = async (e) => {
        e.preventDefault()
        const token = await getToken(login)

        localStorage.setItem("token", JSON.stringify(token))

        const user = await logUser(token)

        if (user.status === 200) {
            dispatch(setLog(true))
        }
        dispatch(setUser(user.body))

    }

    if (log === true) {
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