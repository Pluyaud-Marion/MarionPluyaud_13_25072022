import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from "../feature/user.slice"

const User = () => {
    const dispatch = useDispatch();

    const urlApi = "http://localhost:3001/api/v1/user"

    const token = useSelector((state) => state.log.log)

    const email = useSelector((state) => state.user.user.email)
    const firstname = useSelector((state) => state.user.user.firstName)
    const lastname = useSelector((state) => state.user.user.lastName)

    //const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZGFkM2M4NTRiMmFiNjJhMjlmNTY0ZCIsImlhdCI6MTY1OTU0MjcyNCwiZXhwIjoxNjU5NjI5MTI0fQ.yN7bNMhXgFIYm1uZKD9K27A1OKfdnYI8nse1LswtaKg"

    useEffect(() => {
        axios({
            method: 'post',
            url: urlApi + "/profile",
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(res => {
                dispatch(setUser(res.data.body))
            })
    }, [token])

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