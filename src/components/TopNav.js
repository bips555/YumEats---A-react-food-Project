import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import {TbTruckReturn } from "react-icons/tb"
import { BsFillCartFill, BsPerson } from "react-icons/bs";
import {FaUserFriends,FaGoogleWallet} from "react-icons/fa"
import {MdHelp,MdOutlineFavorite} from "react-icons/md"
const TopNav = () => {
  const [sideNav, setSideNav] = useState(false);
  console.log(sideNav);
  return (
    <div className="max-w-[1520] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div className="cursor-pointer" onClick={() => setSideNav(!sideNav)}>
          <AiOutlineMenu size={25} />
        </div>
        <h1 className="text-2xl sm:text-4xl lg:text-3xl px-2">
          Yum
          <span className="font-bold">Eats</span>
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
      <button className="bg-orange-700 text-white hidden md:flex  items-center py-2 rounded-full border-0">
        <BsFillCartFill size={20} className="mx-1" />
        Cart
      </button>

      {sideNav ? (
        <div 
        onClick={() => setSideNav(!sideNav)} 
        className="bg-black/60 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}
      <div
        className={
          sideNav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300" 
        }
      >
        <AiOutlineClose
          className="absolute top-4 right-4 cursor-pointer"
          onClick={() => setSideNav(!sideNav)}
          size={25}
        />
        <h2 className="text-2xl p-4">
          Yum <span className="text-orange-700 font-bold ">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-900">
            <li className="text-xl py-4 flex">
              <BsPerson
                size={25}
                className="mr-4 text-black bg-wgite rounded-full"
              />
              My Account
            </li>
            <li className="text-xl py-4 flex">
              <TbTruckReturn
                size={25}
                className="mr-4 text-black bg-wgite rounded-full"
              />
             Delivery
            </li>
            <li className="text-xl py-4 flex">
              <MdOutlineFavorite
                size={25}
                className="mr-4 text-black bg-wgite rounded-full"
              />
           My Favourite
            </li>
            <li className="text-xl py-4 flex">
              <FaGoogleWallet
                size={25}
                className="mr-4 text-black bg-wgite rounded-full"
              />
              My Wallet 
            </li>
            <li className="text-xl py-4 flex">
              <MdHelp
                size={25}
                className="mr-4 text-black bg-wgite rounded-full"
              />
              Help
            </li>
          
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default TopNav;
