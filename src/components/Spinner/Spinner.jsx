import React from 'react';
import { HashLoader } from 'react-spinners';

const Spinner = () => {
    return (
        <div className='flex justify-center items-center min-h-80'>
            <HashLoader
                color="#632EE3"
                size={100}
                speedMultiplier={0.9}
            ></HashLoader>
        </div>
    );
};

export default Spinner;