import Image from "next/image";
import React from "react";

const Feature = () => {
  return (
    <div className="w-screen overflow-x-scroll text-red-500">
      <div className="w-max flex">
        <div className="w-screen h-[60vh] flex flex-col items-center justify-around p-4">
          <div className="relative flex-1 w-full">
            <Image
              src="/temporary/p1.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <h1 className="text-xl font-bold uppercase"></h1>
            <p></p>
            <span className="text-xl font-bold"></span>
            <button className="bg-red-500 text-white p-2 rounded-md">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
