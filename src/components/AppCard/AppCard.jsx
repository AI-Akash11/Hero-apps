import { Star } from 'lucide-react';
import React from 'react';
import { FaDownload, FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const AppCard = ({app}) => {
    const {image, title,companyName,ratingAvg,downloads,id} = app;
    return (
        <Link to={`/apps/${id}`} className='bg-white p-5 rounded-lg hover:scale-103 transition'>
            <div className='w-full'>
                <img className='w-full object-cover rounded-2xl' src={image}/>
            </div>
            <h3 className='text-2xl mt-4 font-semibold text-center'>{title} <br className='lg:hidden' /> <small className='font-medium text-xs'>by</small> <br className='lg:hidden'/> <span className='text-lg text-blue-800'>{companyName}</span></h3>
            <div className='flex justify-between items-center mt-2 md:mt-4'>
                <div className='flex items-center gap-1 text-green-700 bg-green-100 p-1 rounded-lg text-xs md:text-sm lg:text-base'><p><FaDownload /></p> <p>{downloads/1000}K</p></div>
                <div className='flex items-center gap-1 text-amber-400 bg-amber-100 p-1 rounded-lg text-xs md:text-sm lg:text-base'><p><FaStar /></p> <p>{ratingAvg}</p></div>
            </div>
        </Link>
    );
};

export default AppCard;