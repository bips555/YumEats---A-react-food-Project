import React from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsPerson } from "react-icons/bs";
const TopNav = () => {
  return (
    <div className="max-w-[1520] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div className="cursor-pointer">
          <AiOutlineMenu size={25} />
        </div>
        <h1 className="text-2xl sm:text-4xl lg:text-3xl px-2">
          Yum
          <span>Eats</span>
        </h1>
        <div className=" lg:flex hidden items-center bg-gray-200 rounded-3xl p-1 text-[14px]">
          <p className="bg-orange-700 text-white rounded-full p-2 text-bold">
            Free{" "}
          </p>
          <p className=" p-2 text-bold">Delivery</p>
        </div>
      </div>
      <div className="bg-gray-200 rounded-full flex align-center p-2 w-[200px] sm:w=[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} className="mx-1" />
        <input
          className="w-full bg-transparent focus:outline-none"
          type="text"
          placeholder="search meals ..."
        />
      </div>
      <button className="bg-orange-700 text-white hidden md:flex lg:flex items-center py-2 rounded-full border-0">
        <BsFillCartFill size={15} className="mx-1" />
        Cart
      </button>
    </div>
  );
};

export default TopNav;
