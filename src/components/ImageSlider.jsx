import React, { useState, useEffect } from "react";

import img1 from "../assets/aba6177147b31cfc14c21f186978a10b233c5237.jpg";
import img2 from "../assets/leather.png";
import img3 from "../assets/7e2f109d4c882845018df95da0bdbdfc6a7c934a.jpg";
const images = [img1, img2, img3];


// const images = [
//   ".",
//   "/images/slider2.jpg",
//   "/images/slider3.jpg",
// ]; 

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000); // 4s per slide
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen relative overflow-hidden">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={img}
            alt={`slide-${index}`}
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}
      {/* Optional dot navigation */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full ${
              current === index ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
