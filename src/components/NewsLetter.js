import React from "react";

const NewsLetter = () => {
  return (
    <div className="max-w-[1520px] px-4 py-4 m-auto text-white bg-[#24262b] ">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="border-none hover:scale-105 duration-300 flex justify-center items-center">
          <img
            className="text-center  object-cover rounded-xl w-[400px] h-[200px] cursor-pointer shadow-xl"
            src="https://chsculture.org/wp-content/uploads/2021/12/Newsletter.png"
            alt="image"
          ></img>
        </div>
        <div>
          <div className="mx-auto my-auto">
            <div className="my-4 mx-4 text-center">
              <h1>Need advice on how to impress your flow?</h1>
              <p>Sign up to join our news NewsLetter ans stay up to date</p>
            </div>
            <div className="my-4">
              <div className="flex flex-row items-center justify-center w-[100%] text-center">
                <input
                  type="email"
                  placeholder="email"
                  className="p-3 w-[25%] rounded-md text-black"
                />
                <button className="bg-[#00df9a] text-white text-[15px] rounded-md font-medium  ml-4 my-4 p-2 flex items-center justify-center">
                  Notify me
                </button>
              </div>
              <div className="text-center">
                <p>
                  We are concerned about the security of your data. Read{" "}
                  <span className="text-[#00df9a]">Privacy Policy</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-8 bg-gray-700 border-1 gark:bg-gray-700" />
    </div>
  );
};

export default NewsLetter;
