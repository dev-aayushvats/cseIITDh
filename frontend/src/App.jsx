// App.jsx 
import React, { useState, lazy, Suspense, useEffect } from 'react';
import Topbar from './components/Topbar/Topbar';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import PageSkeleton from './components/LoadingSkeleton/PageSkeleton';
import Home from './pages/Home';  // Import Home eagerly

// Lazy load all other page components
const Academics = lazy(() => import('./pages/Academics'));
const Admissions = lazy(() => import('./pages/Admissions'));
const JoinAsFaculty = lazy(() => import('./pages/JoinAsFaculty'));
const Contact = lazy(() => import('./pages/Contact'));
const People = lazy(() => import('./pages/People'));
const Research = lazy(() => import('./pages/Research'));
const About = lazy(() => import('./pages/About'));
const SearchResults = lazy(() => import('./pages/SearchResults'));

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const newsData = await fetch("https://cse.iitdh.ac.in/strapi/api/newss");
        if (!newsData.ok) {
          throw new Error('Failed to fetch news data');
        }
        const newsJson = await newsData.json();
        setNews(newsJson.data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching news:', err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchNews();
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden flex flex-col">
      {/* Fixed top bar */}
      <Topbar toggleMobileMenu={toggleMobileMenu} isMobileMenuOpen={isMobileMenuOpen} />
      
      {/* Mobile menu overlay */}
      <div 
        className={`sm:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`} 
        onClick={() => setIsMobileMenuOpen(false)}
      />
      
      <div className="flex flex-grow relative" style={{ paddingTop: '70px' }}>
        {/* Sidebar navigation */}
        <div 
          className={`fixed top-[70px] left-0 bottom-0 w-[280px] sm:w-[220px] lg:w-[250px] z-40 
            bg-white shadow-md transition-transform duration-300 ease-in-out
            ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'}`}
        >
          <Navbar closeMenu={() => setIsMobileMenuOpen(false)} />
        </div>
        
        {/* Main content - explicit margin to avoid sidebar overlap */}
        <div className="w-full sm:pl-[220px] lg:pl-[250px] flex flex-col min-h-full">
          <div className="max-w-full overflow-x-hidden flex-grow">
            <Routes>
              {/* Home page loaded eagerly */}
              <Route path="/" element={<Home props={news} isLoading={isLoading} error={error} />} />
              
              {/* Each lazy-loaded page wrapped in its own Suspense */}
              <Route path="/academics" element={
                <Suspense fallback={<PageSkeleton />}>
                  <Academics />
                </Suspense>
              } />
              <Route path="/admissions" element={
                <Suspense fallback={<PageSkeleton />}>
                  <Admissions />
                </Suspense>
              } />
              <Route path="/people" element={
                <Suspense fallback={<PageSkeleton />}>
                  <People />
                </Suspense>
              } />
              <Route path="/join-as-faculty" element={
                <Suspense fallback={<PageSkeleton />}>
                  <JoinAsFaculty />
                </Suspense>
              } />
              <Route path="/contact" element={
                <Suspense fallback={<PageSkeleton />}>
                  <Contact />
                </Suspense>
              } />
              <Route path="/research" element={
                <Suspense fallback={<PageSkeleton />}>
                  <Research />
                </Suspense>
              } />
              <Route path="/about" element={
                <Suspense fallback={<PageSkeleton />}>
                  <About />
                </Suspense>
              } />
              <Route path="/search" element={
                <Suspense fallback={<PageSkeleton />}>
                  <SearchResults />
                </Suspense>
              } />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
