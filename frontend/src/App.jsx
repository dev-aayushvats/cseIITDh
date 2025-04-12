import React from 'react';
import Topbar from './components/Topbar/Topbar';
import Navbar from './components/Navbar/Navbar';
import Carousel from './components/Carousel/Carousel';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Topbar />

      {/* Push content below fixed Topbar */}
      <div className="pt-[90px] flex">
        {/* Sidebar/Navbar */}
        <div className="w-1/4">
          <Navbar />
        </div>

        {/* Main content */}
        <div className="flex-1 p-4">
          {/* Carousel at the top */}
          <div className="mb-80">
            <Carousel />
          </div>

          {/* Routing area */}
          <main>
          

            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
