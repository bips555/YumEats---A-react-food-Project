import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Featured = () => {
  const sliders = [
    {
      url: "https://assets-global.website-files.com/5acc07fc6634d231ac4bcca6/6320a0603151dde41d816976_one2_best_food_delivery_service.jpeg",
    },
    {
      url: "https://hometaste.my/wp-content/uploads/2020/11/thekitchen-healthy-4.jpg",
    },
    {
      url: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chanwalrus-958545.jpg&fm=jpg",
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
