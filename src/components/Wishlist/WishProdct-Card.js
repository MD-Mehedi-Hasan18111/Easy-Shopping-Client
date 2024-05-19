import Image from "next/image";
import React from "react";
import Product5 from "@/global/assets/images/products/product5.jpg";
import { FaRegTrashAlt } from "react-icons/fa";

const WishProdctCard = () => {
  return (
    <div className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
      <div className="w-28">
        <Image src={Product5} alt="product 5" className="w-full" />
      </div>
      <div className="w-1/3">
        <h2 className="text-gray-800 text-xl font-medium uppercase">
          Dining Table
        </h2>
        <p className="text-gray-500 text-sm">
          Availability: <span className="text-green-600">In Stock</span>
        </p>
      </div>
      <div className="text-primary text-lg font-semibold">$320.00</div>
      <div className="flex items-center space-x-10">
        <a
          href="#"
          className="px-6 py-2 text-center text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
        >
          add to cart
        </a>

        <div className="text-gray-600 cursor-pointer hover:text-primary">
          <FaRegTrashAlt className="text-[24px]" />
        </div>
      </div>
    </div>
  );
};

export default WishProdctCard;
