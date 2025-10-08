import React from 'react';
import heroImage from "../../assets/hero.png"
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className='bg-gray-100 pt-5 md:pt-10 lg:pt-20'>
            <div className='text-center'>
                <h2 className='text-4xl md:text-6xl lg:text-7xl font-bold'>We Build <br />
                    <span className='text-[#6f39e6]'>Productive</span> Apps</h2>
                <p className='mt-4 mb-4 text-xs md:text-sm lg:text-base text-gray-500 px-15'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br className='hidden md:block' /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className='flex flex-col md:flex-row justify-center items-center gap-5 mb-10 md:mb-12 lg:mb-15'>
                    <Link to={'https://play.google.com/store/games?hl=en'} className='flex items-center gap-2 btn px-4 py-6'>
                        <img className='h-8' src={"https://i.ibb.co.com/LqX1F1T/play-Store.webp"}/>
                        <p>Google Play</p>
                    </Link>
                    <Link to={"https://www.apple.com/app-store/"} className='flex items-center gap-2 btn px-4 py-6'>
                        <img className='h-8' src={"https://i.ibb.co.com/MDWkC7mz/apple-Store.png"}/>
                        <p>App Store</p>
                    </Link>
                </div>
            </div>
            <div className='max-w-[400px] md:max-w-[800px] mx-auto'>
                <img className='w-full' src={heroImage}/>
            </div>
            <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white p-5 md:p-10 lg:p-20'>
                <h4 className='text-3xl md:text-4xl lg:text-5xl font-semibold text-center'>Trusted by Millions, <br className='md:hidden' /> Built for You</h4>
                <div className='flex flex-col md:flex-row justify-around mt-5 md:mt-8 lg:mt-12'>
                    <div className='text-center text-xs md:text-sm font-light mb-2 border-b-2 md:border-0 pb-2 md:pb-0'>
                        <p>Total Downloads</p>
                        <p className='text-6xl font-bold my-1 md:my-4'>29.6M</p>
                        <p>21% more than last month</p>
                    </div>
                    <div className='text-center text-xs md:text-sm font-light mb-2 border-b-2 md:border-0 pb-2 md:pb-0'>
                        <p>Total Reviews</p>
                        <p className='text-6xl font-bold my-1 md:my-4'>906K</p>
                        <p>46% more than last month</p>
                    </div>
                    <div className='text-center text-xs md:text-sm font-light mb-2'>
                        <p>Active Apps</p>
                        <p className='text-6xl font-bold my-1 md:my-4'>132+</p>
                        <p>31 more will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;