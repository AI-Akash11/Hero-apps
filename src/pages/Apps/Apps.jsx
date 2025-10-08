import React from 'react';
import useApps from '../../hooks/useApps';
import AppCard from '../../components/AppCard/AppCard';
import { DotLoader } from 'react-spinners';

const Apps = () => {
    const { apps, loading} = useApps();

    return (
        <div className='bg-gray-200 p-4 md:p-8 lg:p-15'>
            <div className='mb-8 text-center'>
                <h3 className='font-bold text-3xl md:text-5xl'>Our All Applications</h3>
                <p className='text-gray-500 mt-3 text-xs md:text-base'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex flex-col md:flex-row gap-5 justify-between items-center mx-5 mb-6'>
                <p className='text-2xl font-semibold'>({apps.length})apps found</p>
                <label className='input'>
                    <input
                        type='search'
                        placeholder='Search Apps'
                    />
                </label>
            </div>
            {
                loading ?
                <DotLoader></DotLoader> :
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6'>
                {
                    apps.map((app) => <AppCard app={app} key={app.id}></AppCard>)
                }
            </div>
            }
        </div>
    );
};

export default Apps;