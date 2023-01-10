import React, { useState, useEffect } from 'react';
import './css/Slideshow.css';

function Slideshow({ images, size, duration }) {
  const [middleIndex, setMiddleIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setMiddleIndex((middleIndex + 1) % images.length);
    }, duration);
    return () => clearInterval(interval);
  }, [middleIndex, images.length, duration]);

  const goToPrevSlide = () => {
    setMiddleIndex((middleIndex - 1 + images.length) % images.length);
  }

  const goToNextSlide = () => {
    setMiddleIndex((middleIndex + 1) % images.length);
  }

  const leftIndex = (middleIndex - 1 + images.length) % images.length;
  const rightIndex = (middleIndex + 1) % images.length;

  return (
    <div className="slideshow">
      <img className="slideshow" src={images[leftIndex]} alt="slideshow" style={{ width: size, height: size }} />
      <img className="slideshow" src={images[middleIndex]} alt="slideshow" style={{ width: size, height: size }} />
      <img className="slideshow" src={images[rightIndex]} alt="slideshow" style={{ width: size, height: size }} />
      {/* <button onClick={goToPrevSlide}>Prev</button>
      <button onClick={goToNextSlide}>Next</button> */}
    </div>
  );
}

export default Slideshow;