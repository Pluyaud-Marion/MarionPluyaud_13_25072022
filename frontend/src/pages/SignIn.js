
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { setLog } from "../feature/log.slice"
import { setUser } from "../feature/user.slice"
import { getToken, logUser } from '../utils/services';

/**
 * 
 * @returns {JSX} - React Page
 */
const SignIn = () => {
    const dispatch = useDispatch();

    // Define state email and password
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // Take in log reducer the state of log
    const log = useSelector((state) => state?.log?.log)

    /**
     * Object with email and password (value of input in form : onChange)
     */
    const login = {
        email,
        password
    }

    //Function called onClick in button submit
    const submitLogin = async (e) => {
        e.preventDefault()

        /**
         * conditions for display errors in form
         * username empty / password empty / failure log
         */
        if (!email) {
            document.querySelector(".noEmail").innerHTML = "Vous devez compléter ce champ"

        } else {
            document.querySelector(".noEmail").innerHTML = ""
        }
        if (!password) {
            document.querySelector(".noPassword").innerHTML = "Vous devez compléter ce champ"
        } else {
            document.querySelector(".noPassword").innerHTML = ""
        }

        if (email && password) {
            //call function getToken in services and add result in constante token
            const token = await getToken(login)

            //add token in LS
            localStorage.setItem("token", JSON.stringify(token))

            //call function logUser in services and add result in constante user
            const user = await logUser(token)

            //if user log ok => change in reducer log the statut : true
            if (user.status === 200) {
                dispatch(setLog(true))
            }
            //add in reducer user => all infos of user (firstname, lastname etc)
            dispatch(setUser(user.body))
        }

        if (!log) {
            document.querySelector(".userNotFound").innerHTML = "Username et/ou Password erroné"
        } else {
            document.querySelector(".userNotFound").innerHTML = ""
        }
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
                        <input onChange={(e) => setEmail(e.target.value)} type="email" id='username' />
                        <p className='noEmail'></p>
                    </div>
                    <div className='input'>
                        <label className='label-input' htmlFor="password">Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" id='password' />
                        <p className='noPassword'></p>
                    </div>
                    <div className='input-remember'>
                        <input type="checkbox" id='remember-me' />
                        <label className='label-remember-me' htmlFor="remember-me">Remember me</label>
                    </div>
                    <p className='userNotFound'></p>

                    <div className='button-signin'>
                        <button onClick={submitLogin} type="sumbit">Sign In</button>
                    </div>

                </form>
            </section>
        </div>
    );

};

export default SignIn;