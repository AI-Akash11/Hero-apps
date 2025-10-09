import React from 'react';
import iconDownload from '../../assets/icon-downloads.png'
import iconRatings from '../../assets/icon-ratings.png'

const InstalledAppCard = ({app, setInstallation}) => {
    const {title,image,ratingAvg,downloads,size,id} = app;

    const handleUninstall = () => {
        const existingApps = JSON.parse(localStorage.getItem('installed'))
        let updatedApps = existingApps.filter(a=> a.id !== id)
        setInstallation(updatedApps)
        
        localStorage.setItem('installed', JSON.stringify(updatedApps));
    }
    return (
        <div className='flex justify-between items-center bg-white p-5 rounded-xl'>
            <div className='flex items-center gap-4'>
                <img className='h-20 w-20 rounded-2xl' src={image}/>
                <div>
                    <h1 className='font-semibold text-2xl mb-2'>{title}</h1>
                    <div className='flex items-center gap-5'>
                        <div className='flex items-center gap-1'>
                            <img className='w-4 h-4' src={iconDownload}/>
                            <p className='text-green-500'>{downloads/1000}K</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <img className='w-4 h-4' src={iconRatings}/>
                            <p className='text-amber-600'>{ratingAvg}</p>
                        </div>
                        <p>{size} MB</p>
                    </div>
                </div>
            </div>
            <button onClick={handleUninstall} className='btn btn-info'>Uninstall</button>
        </div>
    );
};

export default InstalledAppCard;