import React, { useState } from "react";
import "./Slider.css";

const Slider = () => {
  const [sliderIndex, setSliderIndex] = useState(1);

  const imgArr = [
    {
      id: 1,
      alt: "slider-1",
      src: process.env.PUBLIC_URL + "Images/img-1.jpg",
    },
    {
      id: 2,
      alt: "slider-2",
      src: process.env.PUBLIC_URL + "Images/img-2.jpg",
    },
    {
      id: 3,
      alt: "slider-3",
      src: process.env.PUBLIC_URL + "Images/img-3.jpg",
    },
  ];

  const previousHandler = () => {
    if (sliderIndex !== 1) {
      setSliderIndex(sliderIndex - 1);
    }
    if (sliderIndex === 1) {
      setSliderIndex(imgArr.length);
    }
  };

  const nextHandler = () => {
    if (sliderIndex !== imgArr.length) {
      setSliderIndex(sliderIndex + 1);
    }
    if (sliderIndex === imgArr.length) {
      setSliderIndex(1);
    }
  };

  const sliderElement = (
    <>
      <div className="container-slider">
        {imgArr.map((imgItem, index) => {
          return (
            <div
              key={imgItem.id}
              className={
                sliderIndex === index + 1
                  ? "image-container image-animation"
                  : "image-container"
              }
            >
              <img src={imgItem.src} alt={imgItem.alt} />
            </div>
          );
        })}
      </div>
      <div className="button-container">
        <button type="button" onClick={previousHandler}>
          Previous
        </button>
        <button type="button" onClick={nextHandler}>
          Next
        </button>
      </div>
    </>
  );

  return <>{sliderElement}</>;
};

export default Slider;
