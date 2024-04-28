import React from "react";
import { categories } from "../data/data.js";
const Categories = () => {
  return (
    <div className="max-w-[1520px] m-auto px-4 py-12">
      <div className="text-orange-500 font-bold text-center py-2 text-2xl">
        <h1>Trending Categories</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 py-5 px-2">
          {categories.map((item) => {
            return <div key={item.id} className="py-6 px-4 flex justify-center items-center hover:scale-105 duration-300">
              <img className="object-cover rounded-xl w-40 h-10 cursor-pointer shadow-xl" src={item.image} 
              alt={item.name}/>
            </div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
