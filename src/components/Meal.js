import React, { useState } from "react";
import { mealData } from "../data/data.js";
import { ArrowSmRightIcon } from "@heroicons/react/solid";
const Meal = () => {
  const [foods, setFoods] = useState(mealData);
  const filterCategories = (category) => {
    setFoods(
      mealData.filter((item) => {
        return item.category === category;
      })
    );
  };
  return (
    <div className="max-w-[1520px] m-auto px-4 py-1">
      <h1 className="text-orange-500 font-bold text-2xl text-center pb-7">
        Our Meal
      </h1>
      <div className="flex flex-col lg:flex-row justify-center">
        <div className="flex justify-center md:justify-center pb-8">
          <button
            onClick={() => {
              setFoods(mealData);
            }}
            className="m-1 border-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-orange-700 bg-orange-700 "
          >
            All
          </button>
          <button
            onClick={() => filterCategories("pizza")}
            className="m-1 border-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-orange-700 bg-orange-700"
          >
            Pizza
          </button>
          <button
            onClick={() => filterCategories("chicken")}
            className="m-1 border-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-orange-700 bg-orange-700"
          >
            Chicken
          </button>
          <button
            onClick={() => filterCategories("salad")}
            className="m-1 border-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-orange-700 bg-orange-700"
          >
            Salad
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {foods.map((item) => {
          return (
            <div key={item.id} className="border-none hover:scale-105 duration-300">
              <img
                alt={item.name}
                className="w-full h-[200px] object-cover rounded-lg"
                src={item.image}
              />
              <div className="flex justify-between px-4">
                <p className="font-bold text-[15px] -ml-4 pt-3">{item.name}</p>
                <p className="bg-orange-700 rounded-full text-white h-12 w-12 flex justify-center items-center -mt-8 text-[13px] font-bold border-4">
                  {item.price}
                </p>
              </div>
              <div className="flex flex-row items-center ">
                <p className="text-indigo-600 font-bold text-[13px] -mt-1">View More </p>
                <ArrowSmRightIcon
                  className="
                text-indigo-600 size-4
                "
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Meal;
