import React from 'react';
import useApps from '../../hooks/useApps';
import AppCard from '../AppCard/AppCard';
import { Link } from 'react-router';

const Trending = () => {
    const {apps} = useApps();
    const trendingApps = apps.slice(0,8);
    
    return (
        <div className='p-5 md:p-10 lg:p-20 bg-gray-100'>
            <div className='mb-5 md:mb-10 text-center'>
                <h3 className='text-3xl md:text-5xl font-bold mb-4'>Trending Apps</h3>
                <p className='text-gray-500 text-xs md:text-base'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6'>
            {
                trendingApps.map(app => <AppCard key={app.id} app={app}></AppCard>)
            }
        </div>
        <div className='flex justify-center'>
            <Link to={"/apps"} className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white mt-5 md:mt-10">Show All</Link>
        </div>
        </div>
    );
};

export default Trending;