import React from 'react';
import pageError from '../../assets/error-404.png'
import { Link } from 'react-router';

const PageNotFound = () => {
    return (
        <div className='flex flex-col justify-center items-center p-10 md:p-15'>
                    <div className='max-w-[300px] md:max-w-[600px] mb-6 md:mb-10'>
                        <img src={pageError} alt="" />
                    </div>
                    <p className='font-semibold text-5xl mb-2'>Oops, page not found!</p>
                    <p className='font-light text-sm text-gray-600 mb-6'>The page you are looking for is not available.</p>
                    <Link to={'/'} className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">Go To HomePage!</Link>
                </div>
    );
};

export default PageNotFound;