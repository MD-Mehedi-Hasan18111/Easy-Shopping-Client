import Image from "next/image";
import ProductImg from "@/global/assets/images/products/product2.jpg";
import { FaStar } from "react-icons/fa";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { RxMagnifyingGlass } from "react-icons/rx";

const ProductCard = () => {
  return (
    <div className="bg-white shadow rounded overflow-hidden group">
      <div className="relative">
        <Image src={ProductImg} alt="product image" className="w-full" />
        <div
          className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                    justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
        >
          <a
            href="#"
            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
            title="view product"
          >
            <RxMagnifyingGlass />
          </a>
          <a
            href="#"
            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
            title="add to wishlist"
          >
            <CiHeart />
          </a>
        </div>
      </div>
      <div className="pt-4 pb-3 px-4">
        <a href="#">
          <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
            Couple Sofa
          </h4>
        </a>
        <div className="flex items-baseline mb-1 space-x-2">
          <p className="text-xl text-primary font-semibold">$45.00</p>
          <p className="text-sm text-gray-400 line-through">$55.90</p>
        </div>
        <div className="flex items-center">
          <div className="flex gap-1 text-sm text-yellow-400">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className="text-xs text-gray-500 ml-3">(150)</div>
        </div>
      </div>
      <a
        href="#"
        className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
      >
        Add to cart
      </a>
    </div>
  );
};

export default ProductCard;
