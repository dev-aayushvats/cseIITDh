// App.jsx
import Topbar from './components/Topbar/Topbar';
import Navbar from './components/Navbar/Navbar';
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
      <div style={{ display: 'flex' }}>
        <div className="w-50">
          <Navbar />
        </div>
        <main style={{ flexGrow: 1, padding: '1rem' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/academics" element={<Academics />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/research" element={<Research />} /> */}
            {/* Add more routes here */}
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
