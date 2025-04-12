import Topbar from './components/Topbar/Topbar';
import Navbar from './components/Navbar/Navbar';
import Carousel from './components/Carousel/Carousel';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Academics from './pages/Academics';
// import Admissions from './pages/Admissions';
// import Research from './pages/Research';
// ...other page imports

function App() {
  return (
    <>
      <Topbar />
      
      {/* Use Flexbox for layout */}
      <div className="flex">
        {/* Navbar Section */}
        <div className="w-1/4">
          <Navbar />
        </div>

        {/* Main content and Carousel Section */}
        <div className="flex-1 p-4">
          {/* Carousel will be at the top, next to Navbar */}
          <div className="mb-8 pt-[80px]">
            <Carousel />
          </div>

          {/* Main content area with routing */}
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/academics" element={<Academics />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/research" element={<Research />} /> */}
              {/* Add more routes here */}
            </Routes>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
