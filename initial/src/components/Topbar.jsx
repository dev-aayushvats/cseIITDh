// src/components/Topbar/Topbar.jsx
import React, { useState } from 'react'
import logo from '../../assets/institute-logo.png'
import './Topbar.css'

function Topbar() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
    // Add real search logic if needed
  }

  return (
    <header className="topbar">
      {/* Left: Logo + Text */}
      <div className="topbar-left">
        <img src={logo} alt="Institute Logo" className="topbar-logo" />
        <div className="topbar-text">
          <h1 className="institute-name">Indian Institute of Technology Dharwad</h1>
          <p className="department-name">Department of CSE</p>
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
