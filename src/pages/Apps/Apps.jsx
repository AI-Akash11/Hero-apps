import React, { useState } from 'react';
import useApps from '../../hooks/useApps';
import AppCard from '../../components/AppCard/AppCard';
import { DotLoader } from 'react-spinners';
import Spinner from '../../components/Spinner/Spinner';
import { FaSearch } from 'react-icons/fa';
import AppNotFound from '../../components/ErrorPage/AppNotFound';

const Apps = () => {
    const { apps, loading } = useApps();
    const [search, setSearch] = useState('');

    const term = search.trim().toLocaleLowerCase()

    const searchedApps = term ?
        apps.filter(app => app.title.toLocaleLowerCase().includes(term)) :
        apps;

    return (
        <div className='bg-gray-200 p-4 md:p-8 lg:p-15'>
            <div className='mb-8 text-center'>
                <h3 className='font-bold text-3xl md:text-5xl'>Our All Applications</h3>
                <p className='text-gray-500 mt-3 text-xs md:text-base'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex flex-col md:flex-row gap-5 justify-between items-center mx-5 mb-6'>
                <p className='text-2xl font-semibold'>({searchedApps.length})apps found</p>
                <label className='input relative'>
                    <div className='text-gray-500'>
                        <FaSearch></FaSearch>
                    </div>
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        type='search'
                        placeholder='Search Apps'
                    />
                </label>
            </div>
            {
                loading ?
                    <Spinner></Spinner> :
                    searchedApps.length === 0 ?
                    <AppNotFound setSearch={setSearch}></AppNotFound>:
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6'>
                        {
                            searchedApps.map((app) => <AppCard app={app} key={app.id}></AppCard>)
                        }
                    </div>
            }
        </div>
    );
};

export default Apps;