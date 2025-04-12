// frontend/src/App.jsx
import Topbar from './components/Topbar/Topbar.jsx';
import './App.css';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className='w-50'>
        <Navbar />
      </div>
      <div className="content pt-[60px] px-4">
        <h2 className="text-2xl font-bold text-center mt-8">Hello from Frontend!</h2>
      </div>
    </div>
  );
      
}

export default App;
