import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const sectionLinks = {
    academics: [
        { id: 'timetable', label: 'Time Table' },
        { id: 'courses', label: 'Courses' },
        { id: 'curriculum', label: 'Curriculum' },
        { id: 'rules', label: 'Academic Rules' },
        { id: 'placements', label: 'Placements' },
        { id: 'faq', label: 'FAQs' },
    ],
    people: [
        { id: 'faculty', label: 'Faculty' },
        { id: 'former-faculty', label: 'Former Faculty' },
        { id: 'staff', label: 'Staff' },
        { id: 'former-members', label: 'Former Staff' },
        { id: 'phd-scholars', label: 'PhD Scholars' },
        { id: 'graduated-scholars', label: 'Graduated Scholars' },
        { id: 'students', label: 'Students' },
    ],
    research: [
        { id: 'labs', label: 'Research Labs' },
        { id: 'research-projects', label: 'Research Projects' },
    ],
};

const Chevron = ({ open }) => (
    <svg
        className={`h-4 w-4 shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);

const NavGroup = ({ to, label, sections, isOpen, onToggle, handleLinkClick }) => (
    <li className="rounded-lg transition-all duration-200">
        <div className="flex items-center justify-between rounded-lg hover:bg-slate-100">
            <NavLink
                to={to}
                className={({ isActive }) => `py-2 rounded-lg pl-3 font-medium flex-grow ${isActive ? 'text-indigo-600' : 'text-gray-700'}`}
                onClick={handleLinkClick}
            >
                {label}
            </NavLink>
            <button
                type="button"
                onClick={onToggle}
                aria-expanded={isOpen}
                aria-label={`Toggle ${label} sections`}
                className="p-2 mr-1 text-gray-500 hover:text-indigo-600"
            >
                <Chevron open={isOpen} />
            </button>
        </div>
        {isOpen && (
            <ul className="ml-3 pl-3 border-l border-gray-200 space-y-1 mt-1 mb-2">
                {sections.map((section) => (
                    <li key={section.id}>
                        <NavLink
                            to={`${to}#${section.id}`}
                            className="py-1.5 rounded-lg pl-2 text-sm block w-full text-gray-600 hover:text-indigo-600 hover:bg-slate-100"
                            onClick={handleLinkClick}
                        >
                            {section.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        )}
    </li>
);

const Navbar = ({ closeMenu }) => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const handleLinkClick = () => {
        if (closeMenu) closeMenu();
    };

    const toggleDropdown = (key) => (e) => {
        e.preventDefault();
        e.stopPropagation();
        setOpenDropdown((prev) => (prev === key ? null : key));
    };

    return (
        <nav className="h-full w-full bg-white overflow-y-auto pb-20">
            <div className="flex justify-between items-center p-4 sm:hidden">
                <h2 className="font-bold text-gray-800">Menu</h2>
                <button
                    onClick={closeMenu}
                    className="p-2 rounded-full hover:bg-gray-100"
                >
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <ul className="space-y-1 p-3">
                <li className='rounded-lg hover:bg-slate-100 transition-all duration-200'>
                    <NavLink
                        to="/"
                        className={({ isActive }) => `py-2 rounded-lg pl-3 font-medium block w-full ${isActive ? 'bg-slate-100 text-indigo-600' : 'text-gray-700'}`}
                        onClick={handleLinkClick}
                    >
                        Home
                    </NavLink>
                </li>
                <li className='rounded-lg hover:bg-slate-100 transition-all duration-200'>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => `py-2 rounded-lg pl-3 font-medium block w-full ${isActive ? 'bg-slate-100 text-indigo-600' : 'text-gray-700'}`}
                        onClick={handleLinkClick}
                    >
                        About
                    </NavLink>
                </li>

                <NavGroup
                    to="/academics"
                    label="Academics"
                    sections={sectionLinks.academics}
                    isOpen={openDropdown === 'academics'}
                    onToggle={toggleDropdown('academics')}
                    handleLinkClick={handleLinkClick}
                />

                <NavGroup
                    to="/people"
                    label="People"
                    sections={sectionLinks.people}
                    isOpen={openDropdown === 'people'}
                    onToggle={toggleDropdown('people')}
                    handleLinkClick={handleLinkClick}
                />

                <li className='rounded-lg hover:bg-slate-100 transition-all duration-200'>
                    <a
                        href="https://rnd.iitdh.ac.in/"
                        className="py-2 rounded-lg pl-3 font-medium block w-full text-gray-700 hover:text-indigo-600 hover:bg-slate-100"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleLinkClick}
                    >
                        Research
                    </a>
                </li>

                <li className='rounded-lg hover:bg-slate-100 transition-all duration-200'>
                    <a
                        href="https://iitdh.ac.in/admissions"
                        className="py-2 rounded-lg pl-3 font-medium block w-full text-gray-700 hover:text-indigo-600 hover:bg-slate-100"
                        target="_blank" // optional: opens in new tab
                        rel="noopener noreferrer" // security best practice
                    >
                        Admissions
                    </a>
                </li>
                <li className='rounded-lg hover:bg-slate-100 transition-all duration-200'>
                    <NavLink
                        to="/join-as-faculty"
                        className={({ isActive }) => `py-2 rounded-lg pl-3 font-medium block w-full ${isActive ? 'bg-slate-100 text-indigo-600' : 'text-gray-700'}`}
                        onClick={handleLinkClick}
                    >
                        Join As Faculty
                    </NavLink>
                </li>
                <li className='rounded-lg hover:bg-slate-100 transition-all duration-200'>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => `py-2 rounded-lg pl-3 font-medium block w-full ${isActive ? 'bg-slate-100 text-indigo-600' : 'text-gray-700'}`}
                        onClick={handleLinkClick}
                    >
                        Contact Us
                    </NavLink>
                </li>
                <li className='rounded-lg hover:bg-slate-100 transition-all duration-200'>
                    <NavLink
                        to="https://sites.google.com/iitdh.ac.in/cse/home"
                        className={({ isActive }) => `py-2 rounded-lg pl-3 font-medium block w-full ${isActive ? 'bg-slate-100 text-indigo-600' : 'text-gray-700'}`}
                        onClick={handleLinkClick}
                    >
                        Internal
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
