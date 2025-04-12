import React, { useState } from 'react';
import logo1 from '../../assets/carousel-images/Academic-About.e6a203bff9b9d7dd0d81.jpg'
import logo2 from '../../assets/carousel-images/banner-01.jpg'
import logo3 from '../../assets/carousel-images/campus.jpg'

const Carousel = () => {
  // Create a state to track the active slide
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [logo1, logo2, logo3]; // Store the images in an array

  const handleNext = () => {
    // Set next slide index, reset to 0 if at the last slide
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const handlePrev = () => {
    // Set previous slide index, wrap around to last if at the first slide
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  return (
    <div id="carouselExample" className="relative" data-carousel="slide">
      {/* Carousel indicators */}
      <div className="absolute top-0 left-0 z-30 flex space-x-3 justify-center p-4">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 bg-white rounded-full dark:bg-gray-800 ${currentSlide === index ? 'bg-blue-500' : ''}`}
            onClick={() => setCurrentSlide(index)} // Go to specific slide when clicked
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Carousel items */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div className="duration-700 ease-in-out">
          <img
            src={images[currentSlide]} // Display the current active image
            className="block w-full h-full object-cover"
            alt={`Image ${currentSlide + 1}`}
          />
        </div>
      </div>

      {/* Carousel controls */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handlePrev} // Previous button functionality
      >
        <span className="inline-flex items-center justify-center w-10 h-10 text-white rounded-full bg-black/30 group-hover:bg-black/50 group-focus:ring-4 group-focus:ring-black/50">
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            x="0"
            y="0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handleNext} // Next button functionality
      >
        <span className="inline-flex items-center justify-center w-10 h-10 text-white rounded-full bg-black/30 group-hover:bg-black/50 group-focus:ring-4 group-focus:ring-black/50">
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            x="0"
            y="0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
