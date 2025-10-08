import React from 'react';
import useApps from '../../hooks/useApps';
import AppCard from '../../components/AppCard/AppCard';

const Apps = () => {
    const { apps } = useApps();

    return (
        <div className='bg-gray-200 p-4 md:p-8 lg:p-12'>
            <div className='mb-8 text-center'>
                <h3 className='font-bold text-5xl'>Our All Applications</h3>
                <p className='text-gray-500 mt-3'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex justify-between items-center mx-5 mb-6'>
                <p className='text-xl font-semibold'>({apps.length})apps found</p>
                <label className='input'>
                    <input
                        type='search'
                        placeholder='Search Apps'
                    />
                </label>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'>
                {
                    apps.map((app) => <AppCard app={app} key={app.id}></AppCard>)
                }
            </div>
        </div>
    );
};

export default Apps;