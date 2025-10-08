

import { Github } from 'lucide-react';
import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-[#f5f5f5] flex justify-between items-center shadow-sm">
            <div className='flex'>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>Home</li>
                        <li>Apps</li>
                        <li>Installation</li>
                    </ul>
                </div>
                <a className="text-xl flex items-center gap-2 ml-2">
                    <img className='w-10 h-10' src="https://i.ibb.co.com/zHsd0cH4/logo.png" />
                    Hero-Apps</a>
            </div>
            <div className="hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-5 text-lg font-semibold">
                    <li>Home</li>
                    <li>Apps</li>
                    <li>Installation</li>
                </ul>
            </div>
            <div className="btn">
                <Github></Github>
                <span> Contribute</span>
            </div>
        </div>
    );
};

export default Navbar;