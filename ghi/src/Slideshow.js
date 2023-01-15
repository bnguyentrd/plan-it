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
    <div className="slidebg slideshow-container">
      <img className="slidepic fixed-size" src={images[leftIndex]} alt="slideshow" style={{ width: size, height: size }} />
      <img className="slidepic fixed-size" src={images[middleIndex]} alt="slideshow" style={{ width: size, height: size }} />
      <img className="slidepic fixed-size" src={images[rightIndex]} alt="slideshow" style={{ width: size, height: size }} />
      <button className="carousel-control-prev" onClick={goToPrevSlide}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        {/* <span className="visually-hidden">Previous</span> */}
      </button>
      <div>
        <div>
      <button className="carousel-control-next" onClick={goToNextSlide}>
        <span className="carousel-control-next-icon" ></span>
        {/* <span className="visually-hidden">Next</span> */}
      </button>
      </div>
      </div>
        <br></br>
    </div>
  );
}

export default Slideshow;

      // <div className="carousel-indicators">
      //   <button data-bs-target="#carouselExampleIndicators" onClick={() => setMiddleIndex(0)} ></button>
      //   <button data-bs-target="#carouselExampleIndicators" onClick={() => setMiddleIndex(1)} ></button>
      //   <button data-bs-target="#carouselExampleIndicators" onClick={() => setMiddleIndex(2)} ></button>
      // </div>