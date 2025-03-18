// src/App.jsx
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <div className="content-wrapper">
          <h2 className="department-title">Department of Computer Science, IIT Dharwad</h2>
          <Carousel />
        </div>
      </div>
    </div>
  );
}

export default App;