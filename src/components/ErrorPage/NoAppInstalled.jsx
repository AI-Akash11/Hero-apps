import React from 'react';
import appError from '../../assets/App-Error.png'

const NoAppInstalled = () => {
    return (
        <div className='flex flex-col justify-center items-center p-10 md:p-15'>
                    <div className='max-w-[300px] md:max-w-[600px] mb-6 md:mb-10'>
                        <img src={appError} alt="" />
                    </div>
                    <p className='font-semibold text-5xl mb-2'>OPPS!! NO APP INSTALLED YET!</p>
                    <p className='font-light text-sm text-gray-600 mb-6'>You have yet to install any app from our system.  please install a app first to see them here</p>
                </div>
    );
};

export default NoAppInstalled;