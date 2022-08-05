import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Account from '../components/Account';
import dataAccount from '../data';
import { setUser } from '../feature/user.slice';
import { editUser } from '../utils/services/services';

const User = () => {
    const dispatch = useDispatch();

    const [show, setShow] = useState(true)

    const firstname = useSelector((state) => state?.user?.user?.firstName)
    const lastname = useSelector((state) => state?.user?.user?.lastName)

    const [firstName, setOriginFirstname] = useState(firstname)
    const [lastName, setOriginLastname] = useState(lastname)

    const showEditUser = () => {
        show === true ? setShow(false) : setShow(true)
    }

    const newData = {
        firstName,
        lastName
    }

    const submitEdit = async (e) => {
        const newUser = await editUser(newData)
        console.log(newUser);
        dispatch(setUser(newUser.data.body))

    }

    return (
        <div className='User'>
            <div className='header'>
                <h1>Welcome back</h1>
                <div className={show ? 'no-edit' : 'edit'}>
                    <h2>{firstname + " " + lastname + "!"}</h2>
                    <button onClick={showEditUser} className='button'>Edit Name</button>
                </div>
                <div className={show ? 'edit' : 'no-edit'}>
                    <div className='container-input'>
                        <input onChange={(e) => setOriginFirstname(e.target.value)} className='edit-firstname' type="text" placeholder={firstname} />
                        <input onChange={(e) => setOriginLastname(e.target.value)} className='edit-lastname' type="text" placeholder={lastname} />
                    </div>
                    <div className='container-button'>
                        <button onClick={() => [submitEdit(), showEditUser()]} className='button'>Save</button>
                        <button onClick={showEditUser} className='button'>Cancel</button>
                    </div>
                </div>
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