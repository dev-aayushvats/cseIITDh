// src/components/Topbar.jsx
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import logo from '../../assets/institute-logo.png'
import { useRef } from 'react'

export const slugMap = {
  'peoples': 'people',
  'research': 'research',
  'publications': 'publications',
  'events': 'events',
  'news': 'news',
  'about-pages': 'about',
  'admission': 'admission',
  'faculty': 'faculty',
  'students': 'students',
  'alumni': 'alumni',
  'contact': 'contact',
  'join-as-faculty': 'join-as-faculty',
}

function Topbar({ toggleMobileMenu, isMobileMenuOpen }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState(null)
  const [showResults, setShowResults] = useState(false)
  const navigate = useNavigate()
  const resultsRef = useRef(null)

  const handleSearchChange = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === '') {
      setSearchResults(null);
      setShowResults(false);
      return;
    }

    try {
      const endpoint = `https://cse.iitdh.ac.in/strapi/api/fuzzy-search/search?query=${encodeURIComponent(query)}`;
      const response = await fetch(endpoint);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setSearchResults(data);
      setShowResults(true);

    } catch (error) {
      console.error('Error fetching search results:', error);
      setSearchResults(null);
      setShowResults(false);
    }
  }

  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setSearchQuery('')
    }
  }

  const handleCloseSearch = () => {
    setSearchQuery('');
    setSearchResults(null);
    setShowResults(false);
  };

  const handleInputFocus = () => {
    if (searchQuery.trim() !== '' && searchResults && Object.keys(searchResults).length > 0) {
      setShowResults(true);
    }
  };

  const handleInputBlur = () => {
    setTimeout(() => {
      if (!resultsRef.current || !resultsRef.current.contains(document.activeElement)) {
        setShowResults(false);
      }
    }, 100);
  };

  const handleResultClick = (slug) => {
    navigate(`/${slug}`);
    handleCloseSearch();
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-[#fafaff] backdrop-blur-sm py-2 px-4 sm:px-6 flex items-center justify-between shadow-sm z-50 h-[70px] transition-all duration-300">
        {/* Mobile menu button and Logo */}
        <div className="flex items-center">
          <button 
            className="sm:hidden flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none mr-2"
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
          {/* Default Logo (hidden on small screens) */}
          <img 
            src={logo} 
            alt="IIT DH" 
            onClick={()=> window.open('https://www.iitdh.ac.in/', '_blank')}
            className="hidden sm:block cursor-pointer h-[40px] sm:h-[45px] md:h-[55px] w-auto transition-transform duration-200 hover:scale-[1.02]" 
          />
          {/* Mobile Logo (visible only on small screens) */}
          <img 
            src="/institute_favicon.png" 
            alt="IIT DH" 
            onClick={()=> window.open('https://www.iitdh.ac.in/', '_blank')}
            className="block sm:hidden cursor-pointer h-[50px] w-auto transition-transform duration-200 hover:scale-[1.02]" 
          />
        </div>
        
        {/* Department name - centered on laptop+ screens */}
        <div className="flex-1 hidden sm:flex justify-center items-center">
          <h1 onClick={()=> navigate('/')} className="cursor-pointer text-[0.9rem] md:text-[1.1rem] lg:text-[1.2rem] font-semibold text-[#1a1a1a] tracking-wide text-center">
            DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING
          </h1>
        </div>
        
        {/* Department name - mobile only - abbreviated */}
        <div className="flex sm:hidden max-w-[300px]">
          <h1
            onClick={()=> navigate('/')}
            className="cursor-pointer text-[0.65rem] font-semibold text-[#1a1a1a] tracking-wide text-center">
           Department of Computer Science & Engineering
          </h1>
        </div>

        {/* Search bar and results container */}
        <div className="hidden sm:block relative">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyDown={handleSearchKeyDown}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            aria-label="Search"
            className="py-[0.4rem] px-[0.8rem] border border-[#e0e0ff] rounded-full text-[0.85rem] bg-white/70 w-[150px] md:w-[180px] transition-all duration-200 focus:outline-none focus:border-[#d0d0ff] focus:shadow focus:shadow-[#d0d0ff]/40 focus:w-[200px]"
          />

          {/* Minimal search results dropdown */}
          {showResults && searchResults && Object.keys(searchResults).length > 0 && (
            <div 
              ref={resultsRef} 
              className="absolute top-[calc(100%+4px)] right-0 bg-white border border-gray-100 rounded-lg shadow-lg z-50 w-[320px] max-h-[400px] overflow-hidden"
            >
              {/* Clean header */}
              <div className="px-4 py-2 border-b border-gray-50 bg-gray-50/50">
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                  Search Results
                </span>
              </div>
              
              {/* Results container with scroll */}
              <div className="max-h-[340px] overflow-y-auto">
                {Object.entries(searchResults).map(([category, items]) => (
                  <div key={category} className="border-b border-gray-50 last:border-b-0">
                    {/* Category header */}
                    <div className="px-4 py-2 bg-gray-25">
                      <h4 className="text-xs font-medium text-gray-600 uppercase tracking-wide">
                        {category.replace(/_/g, ' ')}
                      </h4>
                    </div>
                    
                    {/* Results list */}
                    <div className="py-1">
                      {items.slice(0, 4).map((item, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            const targetSlug = slugMap[category] || item.slug;
                            handleResultClick(targetSlug);
                          }}
                          className="w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors duration-150 group"
                        >
                          <div className="text-sm text-gray-800 group-hover:text-gray-900 truncate">
                            {category === 'peoples' ? 
                              <>
                                <span className="font-medium">{item.Name}</span>
                                {item.Designation && <span className="text-gray-600"> - {item.Designation}</span>}
                                {item.Role && <span className="text-gray-500 text-xs"> ({item.Role})</span>}
                              </>
                              : category === 'about-pages' ?
                              item.title
                              : 
                              item.title
                            }
                          </div>
                        </button>
                      ))}
                      
                      {/* Show more indicator if there are more items */}
                      {items.length > 4 && (
                        <div className="px-4 py-1">
                          <span className="text-xs text-gray-400">
                            +{items.length - 4} more in {category.replace(/_/g, ' ')}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* View all results footer */}
              <div className="px-4 py-2 border-t border-gray-100 bg-gray-50/30">
                <button
                  onClick={() => {
                    navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
                    handleCloseSearch();
                  }}
                  className="w-full text-xs text-gray-600 hover:text-gray-800 transition-colors duration-150 text-center py-1"
                >
                  View all results for "{searchQuery.trim()}"
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  )
}

export default Topbar