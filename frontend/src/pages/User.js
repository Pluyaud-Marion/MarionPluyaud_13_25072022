import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from "../feature/user.slice"

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

    const email = useSelector((state) => state?.user?.user?.email)
    const firstname = useSelector((state) => state?.user?.user?.firstName)
    const lastname = useSelector((state) => state?.user?.user?.lastName)

    return (
        <div>
            <h1>Page user</h1>
            <h2>{email}</h2>
            <h2>{firstname}</h2>
            <h2>{lastname}</h2>
        </div>
    );
};

export default User;