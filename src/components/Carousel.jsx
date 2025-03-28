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
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play effect
  useEffect(() => {
    if (images.length > 0 && isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // Change image every 3 seconds
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, images.length]);

  // Navigation handlers
  const goToPrevious = () => {
    setIsAutoPlaying(false); // Stop auto-play on manual navigation
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setIsAutoPlaying(false); // Stop auto-play on manual navigation
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  if (images.length === 0) {
    return <div>No images found in carousel folder</div>;
  }

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={goToPrevious}>
        &#9664; {/* Left arrow */}
      </button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <button className="carousel-button next" onClick={goToNext}>
        &#9654; {/* Right arrow */}
      </button>
    </div>
  );
}

export default Carousel;