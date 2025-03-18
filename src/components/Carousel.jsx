// src/components/Carousel.jsx
import React, { useState, useEffect } from 'react';
import './Carousel.css';

// Dynamically import all images from the carousel-images folder
const importImages = import.meta.glob('../assets/carousel-images/*.{png,jpg,jpeg,gif}', {
  eager: true,
});

const images = Object.values(importImages).map((module) => module.default);

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // Change image every 3 seconds
      return () => clearInterval(interval);
    }
  }, []);

  if (images.length === 0) {
    return <div>No images found in carousel folder</div>;
  }

  return (
    <div className="carousel">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
    </div>
  );
}

export default Carousel;