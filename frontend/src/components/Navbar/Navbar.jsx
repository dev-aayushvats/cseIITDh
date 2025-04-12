import React from 'react';

const Navbar = () => {
    return (
        <div className="flex flex-col text-gray-700 h-screen shadow-md shadow-gray-300 pt-15 w-full">
            <ul className="space-y-4 p-3">
                <li className='pt-3 pb-3 rounded-md hover:border-purple-300 hover:border-1 hover:bg-white transition duration-300'>
                    <a href="#home" className="pl-5 font-medium ">Home</a>
                </li>
                <li className='pt-3 pb-3 rounded-md hover:border-purple-300 hover:border-1 hover:bg-white transition duration-300'>
                    <a href="#about" className="pl-5 font-medium ">About</a>
                </li>
                <li className='pt-3 pb-3 rounded-md hover:border-purple-300 hover:border-1 hover:bg-white transition duration-300'>
                    <a href="#services" className="pl-5 font-medium ">Services</a>
                </li>
                <li className='pt-3 pb-3 rounded-md hover:border-purple-300 hover:border-1 hover:bg-white transition duration-300'>
                    <a href="#contact" className="pl-5 font-medium ">Contact</a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;