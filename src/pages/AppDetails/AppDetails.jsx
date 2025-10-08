import React from 'react';
import { useParams } from 'react-router';
import useApps from '../../hooks/useApps';
import Spinner from '../../components/Spinner/Spinner';
import iconDownloads from '../../assets/icon-downloads.png'
import iconRatings from '../../assets/icon-ratings.png'
import iconReviews from '../../assets/icon-review.png'
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts';


const AppDetails = () => {
    const { id } = useParams();
    const { apps, loading } = useApps();
    const appD = apps.find(a => String(a.id) === id)
    if (loading) return <Spinner></Spinner>
    const { image, title, companyName, description, downloads, ratingAvg, size, reviews, ratings } = appD;
    return (
        <div className='p-5 md:p-10 lg:p-15'>
            <div className='flex flex-col lg:flex-row gap-10 border-b-1 pb-5 md:pb-10 items-center'>
                <div>
                    <img className='w-[350px]' src={image} />
                </div>
                <div className='flex flex-col justify-between'>
                    <div className='mb-4 md:mb-8'>
                        <h3 className='font-bold text-4xl'>{title} <sup className='font-medium text-sm text-indigo-600 bg-cyan-200 p-[5px] rounded-lg'>app</sup></h3>
                        <h3 className='text-xl font-semibold'>Developed by <span className='text-[#632EE3]'>{companyName}</span></h3>
                    </div>
                    <div className='flex flex-col md:flex-row gap-10 mb-4 md:mb-8'>
                        <div className='bg-green-200 p-4 rounded-2xl min-w-[150px]'>
                            <img src={iconDownloads} />
                            <p className='text-sm my-1'>Downloads</p>
                            <p className='font-bold text-5xl'>{downloads / 1000}K</p>
                        </div>
                        <div className='bg-amber-200 p-4 rounded-2xl min-w-[150px]'>
                            <img src={iconRatings} />
                            <p className='text-sm my-1'>Average Ratings</p>
                            <p className='font-bold text-5xl'>{ratingAvg}</p>
                        </div>
                        <div className='bg-purple-200 p-4 rounded-2xl min-w-[150px]'>
                            <img src={iconReviews} />
                            <p className='text-sm my-1'>Total Reviews</p>
                            <p className='font-bold text-5xl'>{reviews}</p>
                        </div>
                    </div>
                    <button className="btn bg-[#00D390] text-white">Install Now ({size} MB)</button>
                </div>
            </div>
            <div className='border-b-1 py-5 md:py-10 w-full'>
                <div className="w-full h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={ratings}
                            layout="vertical"
                        >
                            <Tooltip />
                            <Legend />
                            <XAxis type="number" />
                            <YAxis type="category" dataKey="name" />
                            <Bar dataKey="count" fill="#FF8811" barSize={30} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className='pt-5 md:pt-10'>
                <p className='font-semibold text-2xl md:text-3xl mb-2 md:mb-4'>Description</p>
                <p className='text-gray-500 text-sm md:text-base'>{description}</p>
            </div>
        </div>
    );
};

export default AppDetails;