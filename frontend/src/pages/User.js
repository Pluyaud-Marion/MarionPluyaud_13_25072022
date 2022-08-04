import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from "../feature/user.slice"
import Account from '../components/Account';
import dataAccount from '../data';

const User = () => {
    const dispatch = useDispatch();

    const urlApi = "http://localhost:3001/api/v1/user"

    const token = useSelector((state) => state.log.log)

    console.log(token);


    useEffect(() => {
        axios({
            method: 'post',
            url: urlApi + "/profile",
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(res => {
                console.log(res.data);
                dispatch(setUser(res.data.body))
            })
    }, [dispatch, token])

    const firstname = useSelector((state) => state?.user?.user?.firstName)
    const lastname = useSelector((state) => state?.user?.user?.lastName)

    return (
        <div className='User'>
            <div className='header'>
                <h1>Welcome back</h1>
                <h2>{firstname + " " + lastname + "!"}</h2>
                <button className='edit-button'>Edit Name</button>
            </div>
            {
                dataAccount?.map((account, index) => (
                    <Account key={index} accountTitle={account['account-title']} accountAmount={account['account-amount']} accountDescription={account['account-description']} />
                ))
            }

        </div>
    );
};

export default User;