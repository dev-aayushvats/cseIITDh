// src/App.jsx
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Topbar from './components/Topbar'; 
import Carousel from './components/Carousel';
import FacultyList from './components/FacultyList';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      <Topbar />
      <Navbar />
      <div className="content pt-[60px] px-4">
        <FacultyList />
        <div className="content-wrapper">
          <h2 className="department-title">Department of Computer Science, IIT Dharwad</h2>
          <Carousel />
        </div>
      </div>
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </div>
  );
}

export default App;