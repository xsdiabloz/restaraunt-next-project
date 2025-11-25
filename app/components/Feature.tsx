import Image from "next/image";
import React from "react";
import { featuredProducts } from "../data";

const Feature = () => {
  return (
    <div className="w-screen overflow-x-scroll text-red-500">
      <div className="w-max flex">
        {featuredProducts.map((pr) => (
          <div
            key={pr.id}
            className="w-screen h-[60vh] hover:bg-fuchsia-50 transition-all duration-300 flex flex-col items-center md:w-[50vw] xl:w-[33vw] justify-around p-4"
          >
            {pr.img && (
              <div className="relative flex-1 w-full hover:rotate-[60deg] cursor-pointer transition-all duration-500">
                <Image src={pr.img} alt="" fill className="object-contain" />
              </div>
            )}
            <div className="flex-1 flex flex-col gap-4 text-center items-center justify-center">
              <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">
                {pr.title}
              </h1>
              <p className="p-4 2xl:p-8">{pr.desc}</p>
              <span className="text-xl font-bold">${pr.price}</span>
              <button className="bg-red-500 cursor-pointer hover:bg-red-400 duration-300 transition-all text-white p-2 rounded-md">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
