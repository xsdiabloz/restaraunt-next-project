import { pizzas } from "@/app/data";
import Image from "next/image";
import Link from "next/link";

const CategoryPage = () => {
  return (
    <div className="flex flex-wrap text-red-500">
      {pizzas.map((pizza) => (
        <Link
          className="w-full  h-[60vh] flex flex-col justify-between even:bg-fuchsia-50 border-r-2 sm:w-1/2 lg:w-1/3 border-b-2 p-4 border-red-500 group"
          href={`/product/${pizza.id}`}
          key={pizza.id}
        >
          {pizza.img && (
            <div className="relative h-[80%]">
              <Image src={pizza.img} alt="" fill className="object-contain" />
            </div>
          )}
          <div className="flex items-center justify-between font-bold ">
            <h1 className="text-2xl uppercase">{pizza.title}</h1>
            <h2 className="group-hover:hidden text-xl">${pizza.price}</h2>
            <button className="hidden group-hover:block uppercase bg-red-500 cursor-pointer text-white rounded-md p-2">
              Add to Cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
