import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="flex flex-col text-gray-700 h-screen shadow-md shadow-gray-300 pt-20 w-full">
            <ul className="space-y-4 p-3">
                <li className='rounded-md hover:bg-slate-300 transition duration-300'>
                    <NavLink to="/" className={({isActive})=>`pt-3 pb-3 rounded-md pl-5 font-medium block w-full h-full ${isActive? 'bg-slate-300' : ''}`}>
                        Home
                    </NavLink>
                </li>
                <li className='rounded-md hover:bg-slate-300 transition duration-300'>
                    <NavLink to="/academics" className={({isActive})=>`pt-3 pb-3 rounded-md pl-5 font-medium block w-full h-full ${isActive? 'bg-slate-300' : ''}`}>
                        Academics
                    </NavLink>
                </li>
                <li className='rounded-md hover:bg-slate-300 transition duration-300'>
                    <NavLink to="/admissions" className={({isActive})=>`pt-3 pb-3 rounded-md pl-5 font-medium block w-full h-full ${isActive? 'bg-slate-300' : ''}`}>
                        Admissions
                    </NavLink>
                </li>
                <li className='rounded-md hover:bg-slate-300 transition duration-300'>
                    <NavLink to="/people" className={({isActive})=>`pt-3 pb-3 rounded-md pl-5 font-medium block w-full h-full ${isActive? 'bg-slate-300' : ''}`}>
                        People
                    </NavLink>
                </li>
                <li className='rounded-md hover:bg-slate-300 transition duration-300'>
                <NavLink to="/research" className={({isActive})=>`pt-3 pb-3 rounded-md pl-5 font-medium block w-full h-full ${isActive? 'bg-slate-300' : ''}`}>
                        Research
                    </NavLink>
                </li>
                <li className='rounded-md hover:bg-slate-300 transition duration-300'>
                <NavLink to="/join" className={({isActive})=>`pt-3 pb-3 rounded-md pl-5 font-medium block w-full h-full ${isActive? 'bg-slate-300' : ''}`}>
                        Join As Faculty
                    </NavLink>
                </li>
                <li className='rounded-md hover:bg-slate-300 transition duration-300'>
                <NavLink to="/contact" className={({isActive})=>`pt-3 pb-3 rounded-md pl-5 font-medium block w-full h-full ${isActive? 'bg-slate-300' : ''}`}>
                        Contact Us
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;