import React from "react";

const Delivery = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <h3 className="text-orange-500 font-bold text-2xl text-center">
        Quick delivery App
      </h3>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[550px] mx-auto my-4"
          src="https://res-console.cloudinary.com/dsmm4pvjs/thumbnails/v1/image/upload/v1713972082/ZmFzdC1mb29kLWRlbGl2ZXJ5LW1vdG9yYmlrZV9odGlzbWU=/drilldown"
        />
        <div className="flex flex-col justify-center ">
          <p className="text-[#00d94a] font-bold">Get the App</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Limitless Convenience on demand
          </h1>
          <p className="font-bold sm:text-xl md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, odio harum temporibus nobis ad accusamus rerum quidem
            neque at maxime sed unde ex deleniti recusandae culpa autem dolores
            earum dolorem eveniet, officia tenetur ipsam dolorum dicta? Eaque,
            vero ipsam quod ex, aliquam libero, laudantium quibusdam ipsa
            doloremque at tenetur provident.
          </p>
          <button className="bg-black text-[#00d94a] w-[200px] rounded.md font-medium my-6 mx-auto md:mx-0 py-3 hover:bg-white duration-1000 hover:scale-105">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
