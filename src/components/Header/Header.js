import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='flex justify-around items-center bg-slate-600 p-5 shadow-lg shadow-slate-300'>
            <div>
                <h1 className='text-2xl font-bold text-orange-600'>Quiz Challenger</h1>
            </div>
            <div className='flex gap-5 font-semibold text-stone-300'>
                <NavLink className='links' to='/'>Home</NavLink>
                <NavLink className='links' to='/statistics'>Statistics</NavLink>
                <NavLink className='links' to='/blog'>Blog</NavLink>
            </div>
        </div>
    );
};

export default Header;