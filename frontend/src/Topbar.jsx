// src/components/Topbar.jsx
import React, { useState } from 'react'
import logo from './institute-logo.png'
import './Topbar.css'

function Topbar() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
    // Add real search logic if needed
  }

  return (
    <header className="topbar">
      <div className="topbar-left">
       <img src={logo} alt="Institute Logo" className="topbar-logo" />
        <div className="topbar-text">
          <h1 className="institute-name">DEPARTMENT OF COMPUTER SCIENCE ENGINEERING</h1>
          <p className="department-name">IIT DH</p>
        </div>
      </div>

      {/* Right: Search */}
      <div className="topbar-search">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
    </header>
  )
}

export default Topbar
