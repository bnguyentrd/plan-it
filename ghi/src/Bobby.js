import React from "react";
import logo from "./logo/logo.png";
import Nav from "./Nav";
import Slideshow from "./Slideshow";
import "./css/Slideshow.css";

function MainPage(props) {
  const pad2 = (num) => String(num).padStart(2, "0");

  return (
    <>
      <div className="App">
        <div className="top-right">
          <Nav />
        </div>
        <header className="App-header">
          <h1>
            <img className="logo-radius" src={logo} width="500" alt="logo" />
          </h1>
        </header>
        <div>
          <br></br>
        </div>

        <div className="container">
          <Slideshow
          images={[
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg/1200px-Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg",
            "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGlraW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
            "https://dep.nj.gov/wp-content/uploads/njfw/fishing_freshwater_thumb.jpg",
            "https://drugpolicy.org/sites/default/files/crowd-at-concert_0.png",
          ]}
          size={500}
          duration={10000}
        />

          {/* <section id="testimonials">
            <div
              id="testimonial-carousel"
              class="carousel slide"
              data-ride="false"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <h2>Tame Impala at the Greek Theater</h2>
                  <img
                    class="testimonial-image1"
                    src="https://drugpolicy.org/sites/default/files/crowd-at-concert_0.png"
                    alt="concert"
                  />
                  <em>Steven is attending</em>
                </div>

                <div class="carousel-item">
                  <h2 class="testimonial-text">
                    Ice Lakes at San Juan National Forest
                  </h2>
                  <img
                    class="testimonial-image1"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg/1200px-Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg"
                    alt="ice-lakes"
                  />
                  <em>Brian is attending</em>
                </div>
              </div>

              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#testimonial-carousel"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#testimonial-carousel"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </section> */}
        </div>
        <br></br>
        <div>
          <h1>EVENT FORM HERE</h1>
        </div>
      </div>
    </>
  );
}

export default MainPage;