// App.jsx
import React, { useState } from 'react';
import Topbar from './components/Topbar/Topbar';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Academics from './pages/Academics';
// import Admissions from './pages/Admissions';
// import Research from './pages/Research';
// ...other page imports

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      {/* Fixed top bar */}
      <Topbar toggleMobileMenu={toggleMobileMenu} isMobileMenuOpen={isMobileMenuOpen} />
      
      {/* Mobile menu overlay */}
      <div 
        className={`sm:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`} 
        onClick={() => setIsMobileMenuOpen(false)}
      />
      
      <div className="flex relative" style={{ paddingTop: '70px' }}>
        {/* Sidebar navigation */}
        <div 
          className={`fixed top-[70px] left-0 bottom-0 w-[280px] sm:w-[220px] lg:w-[250px] z-40 
            bg-white shadow-md transition-transform duration-300 ease-in-out
            ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'}`}
        >
          <Navbar closeMenu={() => setIsMobileMenuOpen(false)} />
        </div>
        
        {/* Main content - explicit margin to avoid sidebar overlap */}
        <div className="w-full sm:pl-[220px] lg:pl-[250px]">
          <div className="max-w-full overflow-x-hidden">
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/academics" element={<Academics />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/research" element={<Research />} /> */}
              {/* Add more routes here */}
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
