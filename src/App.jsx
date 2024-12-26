import React, { useEffect } from "react";
import AOS from "aos";
import "./App.css";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 500, // Animation duration in ms
      easing: "ease-in-out", // Default easing for animations
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <>
      <section>
        <div className="container">
          <h1 align="center" data-aos="fade-up">
            This is a demo for Animate-on-Scroll
          </h1>
          <div className="box">
            <h2>Heading</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              similique adipisci tempora eligendi quidem recusandae aliquid
              voluptates quasi odio quibusdam ad enim doloribus quisquam alias
              numquam, qui sed officia repellat.
            </p>
          </div>

          <div className="box">
            <h2>Heading</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              similique adipisci tempora eligendi quidem recusandae aliquid
              voluptates quasi odio quibusdam ad enim doloribus quisquam alias
              numquam, qui sed officia repellat.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h1 align="center" data-aos="fade-up">
            This is a demo for Animate-on-Scroll
          </h1>
          <div className="box" data-aos="fade-left">
            <h2>Heading</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              similique adipisci tempora eligendi quidem recusandae aliquid
              voluptates quasi odio quibusdam ad enim doloribus quisquam alias
              numquam, qui sed officia repellat.
            </p>
          </div>

          <div className="box" data-aos="fade-right">
            <h2>Heading</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              similique adipisci tempora eligendi quidem recusandae aliquid
              voluptates quasi odio quibusdam ad enim doloribus quisquam alias
              numquam, qui sed officia repellat.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h1 align="center" data-aos="fade-up">
            This is a demo for Animate-on-Scroll
          </h1>
          <div className="box" data-aos="zoom-out">
            <h2>Heading</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              similique adipisci tempora eligendi quidem recusandae aliquid
              voluptates quasi odio quibusdam ad enim doloribus quisquam alias
              numquam, qui sed officia repellat.
            </p>
          </div>

          <div className="box" data-aos="fade-down-right">
            <h2>Heading</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              similique adipisci tempora eligendi quidem recusandae aliquid
              voluptates quasi odio quibusdam ad enim doloribus quisquam alias
              numquam, qui sed officia repellat.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h1 align="center" data-aos="fade-up">
            This is a demo for Animate-on-Scroll
          </h1>
          <div className="box" data-aos="flip-down">
            <h2>Heading</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              similique adipisci tempora eligendi quidem recusandae aliquid
              voluptates quasi odio quibusdam ad enim doloribus quisquam alias
              numquam, qui sed officia repellat.
            </p>
          </div>

          <div className="box" data-aos="zoom-out-left">
            <h2>Heading</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              similique adipisci tempora eligendi quidem recusandae aliquid
              voluptates quasi odio quibusdam ad enim doloribus quisquam alias
              numquam, qui sed officia repellat.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
