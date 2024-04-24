import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Featured = () => {
  const sliders = [
    {
      url: "https://res-console.cloudinary.com/dsmm4pvjs/thumbnails/v1/image/upload/v1711198820/anB5cXRoMjg3bm50aDllendnZ3c=/drilldown",
    },
    {
      url: "https://res-console.cloudinary.com/dsmm4pvjs/thumbnails/v1/image/upload/v1711174785/bWZtdDhvbXdudXJ0aWhxcG4wNm4=/drilldown",
    },
    {
      url: "https://res-console.cloudinary.com/dsmm4pvjs/thumbnails/v1/image/upload/v1711030725/c2FtcGxlcy9kZXNzZXJ0LW9uLWEtcGxhdGU=/drilldown",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlider = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? sliders.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlider = () => {
    const isLastSlide = currentIndex === sliders.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const moveToNextSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1520px] h-[500px] w-full py-4 px-4 relative group">
      <div
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500 "
        style={{ backgroundImage: `url(${sliders[currentIndex].url})` }}
      ></div>
      <div className="hidden group-hover:block absolute text-white top-[50%] cursor-pointer -translate-x-0 -translate-y-[50%] left-10 rounded-full p-2 bg-orange-700 hover:bg-orange-400 duration-700">
        <BsChevronCompactLeft size={50} onClick={prevSlider} />
      </div>
      <div className="hidden group-hover:block absolute text-white top-[50%] right-10 duration-700 rounded-full bg-orange-700 hover:bg-orange-500 p-2 -translate-x-0 -translate-y-[50%] cursor-pointer">
        <BsChevronCompactRight size={50} onClick={nextSlider} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {sliders.map((sliderItems, slideIndex) => (
          <div 
          key={slideIndex}
          onClick={()=>moveToNextSlide(slideIndex)}
           className="text-3xl cursor-pointer">
            <RxDotFilled size={25}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
