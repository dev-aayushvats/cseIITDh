// src/components/Topbar.jsx
import React, { useState } from 'react'
import logo from '../../assets/institute-logo.png'

function Topbar({ toggleMobileMenu, isMobileMenuOpen }) {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
    // Add real search logic if needed
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#fafaff] backdrop-blur-sm py-2 px-4 sm:px-6 flex items-center justify-between shadow-sm z-50 h-[70px] transition-all duration-300">
      {/* Mobile menu button */}
      <button 
        className="sm:hidden flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? (
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>
      
      <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
        <img 
          src={logo} 
          alt="IIT DH" 
          className="h-[40px] sm:h-[45px] md:h-[55px] w-auto transition-transform duration-200 hover:scale-[1.02]" 
        />
        <div className="flex flex-col justify-center">
          <h1 className="text-[0.65rem] sm:text-[0.8rem] md:text-[0.9rem] font-semibold m-0 text-[#1a1a1a] tracking-wide">
            <span className="md:inline hidden">DEPARTMENT OF</span> CS & ENGINEERING
          </h1>
          <p className="text-[0.55rem] sm:text-[0.7rem] md:text-[0.8rem] text-[#555] m-0 font-medium truncate max-w-[150px] sm:max-w-full">
            <span className="hidden sm:inline">INDIAN INSTITUTE OF TECHNOLOGY,</span>
            <span className="sm:hidden">IIT</span> DHARWAD
          </p>
        </div>
      </div>

      <div className="hidden sm:block">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          aria-label="Search"
          className="py-[0.4rem] px-[0.8rem] border border-[#e0e0ff] rounded-full text-[0.85rem] bg-white/70 w-[150px] md:w-[180px] transition-all duration-200 focus:outline-none focus:border-[#d0d0ff] focus:shadow focus:shadow-[#d0d0ff]/40 focus:w-[200px]"
        />
      </div>
    </header>
  )
}

export default Topbar
