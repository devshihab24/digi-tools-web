import React from 'react';

const DigitalTools = () => {
    return (
        <div className='h-screen flex flex-col justify-center items-center'>
            <h2>Premium Digital Tools</h2>
            <p>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
            <div className='flex gap-10'>
                <button className='common-btn'>Products</button>
                <button>Cart (2)</button>
            </div>
        </div>
    );
};

export default DigitalTools;