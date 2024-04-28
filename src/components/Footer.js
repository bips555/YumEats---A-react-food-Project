import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaInstagram,
  FaGithubSquare,
  FaTwitterSquare,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="max-w-[1520px] m-auto px-4 py-2 bg-[#24262b]">
        <div className="py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">   
        <div>
        <h1 className="w-full text-3xl font-bold text-orange-500">YumEats</h1>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          maiores.
        </p>
        <div className="flex justify-between mid:w-[75%] my-6 text-white">
          <FaInstagram size={30} />
          <FaDribbbleSquare size={30} />
          <FaGithubSquare size={30} />
          <FaTwitterSquare size={30} />
          <FaFacebookSquare size={30} />
        </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6">
            <div className="text-center mx-auto">
            <h6 className="font-medium text-[#9b9b9b] text-center">Location  </h6>
                <ul className="text-center">
                    <li className="py-2 text-sm">New York</li>
                    <li className="py-2 text-sm">USA</li>
                    <li className="py-2 text-sm">India</li>
                    <li className="py-2 text-sm">Canada</li>
                </ul>
          
            </div>
            <div className="mx-auto">
            <h6 className="font-medium text-[#9b9b9b] text-center">Location  </h6>
                <ul className="text-center">
                    <li className="py-2 text-sm">New York</li>
                    <li className="py-2 text-sm">USA</li>
                    <li className="py-2 text-sm">India</li>
                    <li className="py-2 text-sm">Canada</li>
                </ul>
           
            </div>
            <div className="mx-auto">
            <h6 className="font-medium text-[#9b9b9b] text-center">Location  </h6>
                <ul className="text-center">
                    <li className="py-2 text-sm">New York</li>
                    <li className="py-2 text-sm">USA</li>
                    <li className="py-2 text-sm">India</li>
                    <li className="py-2 text-sm">Canada</li>
                </ul>
          
            </div>
            <div className="mx-auto">
            <h6 className="font-medium text-[#9b9b9b] text-center">Location  </h6>
                <ul className="text-center">
                    <li className="py-2 text-sm">New York</li>
                    <li className="py-2 text-sm">USA</li>
                    <li className="py-2 text-sm">India</li>
                    <li className="py-2 text-sm">Canada</li>
                </ul>
          
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
