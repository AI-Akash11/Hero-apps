import React from 'react';
import appError from '../../assets/App-Error.png'
import { Link } from 'react-router';

const AppNotFound = ({setSearch}) => {
    return (
        <div className='flex flex-col justify-center items-center p-10 md:p-15'>
            <div className='max-w-[300px] md:max-w-[600px] mb-6 md:mb-10'>
                <img src={appError} alt="" />
            </div>
            <p className='font-semibold text-5xl mb-2'>OPPS!! APP NOT FOUND</p>
            <p className='font-light text-sm text-gray-600 mb-6'>The App you are requesting is not found on our system.  please try another apps</p>
            <button onClick={()=> setSearch('')} className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">Go Back!</button>
        </div>
    );
};

export default AppNotFound;