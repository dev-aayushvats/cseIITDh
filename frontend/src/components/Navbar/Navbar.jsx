import React from 'react';

const Navbar = () => {
    return (
        <div className="flex flex-col text-gray-700 h-screen shadow-md shadow-gray-300 pt-20 w-full">
            <ul className="space-y-4 p-3">
                <li className='pt-3 pb-3 rounded-md hover:bg-slate-300 transition duration-300'>
                    <a href="#home" className="pl-5 font-medium ">Home</a>
                </li>
                <li className='pt-3 pb-3 rounded-md hover:bg-slate-300 transition duration-300'>
                    <a href="#about" className="pl-5 font-medium ">Academics</a>
                </li>
                <li className='pt-3 pb-3 rounded-md hover:bg-slate-300 transition duration-300'>
                    <a href="#services" className="pl-5 font-medium ">Admissions</a>
                </li>
                <li className='pt-3 pb-3 rounded-md hover:bg-slate-300 transition duration-300'>
                    <a href="#contact" className="pl-5 font-medium ">People</a>
                </li>
                <li className='pt-3 pb-3 rounded-md hover:bg-slate-300 transition duration-300'>
                    <a href="#contact" className="pl-5 font-medium ">Research</a>
                </li>
                <li className='pt-3 pb-3 rounded-md hover:bg-slate-300 transition duration-300'>
                    <a href="#contact" className="pl-5 font-medium ">Join As Faculty</a>
                </li>
                <li className='pt-3 pb-3 rounded-md hover:bg-slate-300 transition duration-300'>
                    <a href="#contact" className="pl-5 font-medium ">Contact Us</a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;