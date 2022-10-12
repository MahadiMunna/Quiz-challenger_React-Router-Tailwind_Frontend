import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-around items-center bg-slate-600 p-5 shadow-lg shadow-slate-300'>
            <div>
                <h1 className='text-2xl font-bold text-orange-600'>Quiz Challenger</h1>
            </div>

            <nav className='flex gap-5 font-semibold text-stone-300'>
                <NavLink className={({ isActive }) =>isActive ? 'active text-red-500' : 'hover:text-orange-500'} to='/'>Home</NavLink>
                <NavLink className={({ isActive }) =>isActive ? 'active text-red-500' : 'hover:text-orange-500'} to='/statistics'>Statistics</NavLink>
                <NavLink className={({ isActive }) =>isActive ? 'active text-red-500' : 'hover:text-orange-500'} to='/blog'>Blog</NavLink>
                <NavLink className={({ isActive }) =>isActive ? 'active text-red-500' : 'hover:text-orange-500'} to='/error'>Error Route</NavLink>
            </nav>

        </div>
    );
};

export default Header;