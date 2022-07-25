import React from 'react';
import Banner from "../assets/bank-tree.jpeg"


const Home = () => {
    return (
        <div className='container-image-text'>
            <img src={Banner} alt="bank-tree" />
            <div className='container-text'>
                <h2 className='text-h2'>No fees.</h2>
                <h2 className='text-h2'>No minimum deposit.</h2>
                <h2 className='text-h2'>High interest rates.</h2>
                <p>Open a savings account with Argent Bank today!</p>
            </div>
        </div>
    );
};

export default Home;