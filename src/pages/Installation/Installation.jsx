import React, { useEffect, useState } from 'react';
import Spinner from '../../components/Spinner/Spinner';
import AppNotFound from '../../components/ErrorPage/AppNotFound';
import InstalledAppCard from '../../components/AppCard/InstalledAppCard';
import NoAppInstalled from '../../components/ErrorPage/NoAppInstalled';

const Installation = () => {
    const [installation, setInstallation] = useState([]);
    const [sortApps, setSortApps] = useState('none')
    useEffect(() => {
        const installedApps = JSON.parse(localStorage.getItem('installed'));
        if (installedApps) setInstallation(installedApps)
    }, []);

    const sortedApps = (()=>{
        if(sortApps === 'asc') {
            return [...installation].sort((a,b)=> a.downloads - b.downloads)
        } else if(sortApps === 'desc'){
            return [...installation].sort((a,b)=> b.downloads - a.downloads)
        } else{
            return installation
        }
    }) ()

    return (
        <>
            {
                installation.length !== 0 ?
                    <div className='bg-gray-100 p-10 md:p-20'>
                        <div className='text-center mb-10'>
                            <h2 className='font-bold text-4xl md:text-5xl lg:text-6xl mb-2'>Your Installed Apps</h2>
                            <p className='text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
                        </div>
                        <div className='flex justify-between items-center mb-4'>
                            <h3 className='font-semibold text-2xl'>Installed apps: ({sortedApps.length})</h3>
                            <label className='form-control w-full max-w-xs'>
                                <select
                                className='select select-bordered'
                                value={sortApps}
                                onChange={e => setSortApps(e.target.value)}
                            >
                                <option value="none">Sort by Download</option>
                                <option value="asc">Low - High</option>
                                <option value="desc">High - Low</option>
                            </select>
                            </label>
                        </div>
                        <div className='flex flex-col gap-5'>
                            {
                                sortedApps.map(app => <InstalledAppCard setInstallation={setInstallation} key={app.id} app={app}></InstalledAppCard>)
                            }
                        </div>
                    </div> :
                    <NoAppInstalled></NoAppInstalled>
            }
        </>
    );
};

export default Installation;