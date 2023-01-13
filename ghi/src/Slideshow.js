import React, { useState, useEffect } from "react";
import "./css/Slideshow.css";

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
  };

  const goToNextSlide = () => {
    setMiddleIndex((middleIndex + 1) % images.length);
  };

  const leftIndex = (middleIndex - 1 + images.length) % images.length;
  const rightIndex = (middleIndex + 1) % images.length;

  return (
    <div className="slideshow">
      <img
        className="slideshow"
        src={images[leftIndex]}
        alt="slideshow"
        style={{ width: size, height: size }}
      />
      <img
        className="slideshow"
        src={images[middleIndex]}
        alt="slideshow"
        style={{ width: size, height: size }}
      />
      <img
        className="slideshow"
        src={images[rightIndex]}
        alt="slideshow"
        style={{ width: size, height: size }}
      />
      <button
        class="carousel-control-prev"
        onClick={goToPrevSlide}
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        onClick={goToNextSlide}
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
      <div class="carousel-indicators">
        <button
          onClick={leftIndex}
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          onClick={middleIndex}
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          onClick={rightIndex}
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
    </div>
  );
}

export default Slideshow;
