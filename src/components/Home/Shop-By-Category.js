import Image from "next/image";
import Category1 from "@/global/assets/images/category/category-1.jpg";
import Category2 from "@/global/assets/images/category/category-2.jpg";
import Category3 from "@/global/assets/images/category/category-3.jpg";
import Category4 from "@/global/assets/images/category/category-4.jpg";
import Category5 from "@/global/assets/images/category/category-5.jpg";
import Category6 from "@/global/assets/images/category/category-6.jpg";
import React from "react";

const ShopByCategory = () => {
  return (
    <div className="container py-16">
      <h2 className="text-2xl font-[600] text-gray-800 uppercase mb-6">
        shop by category
      </h2>
      <div className="grid grid-cols-3 gap-3">
        <div className="relative rounded-sm overflow-hidden group">
          <Image src={Category1} alt="category 1" className="w-full" />
          <a
            href="#"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-[600] group-hover:bg-opacity-60 transition"
          >
            Bedroom
          </a>
        </div>
        <div className="relative rounded-sm overflow-hidden group">
          <Image src={Category2} alt="category 2" className="w-full" />
          <a
            href="#"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-[600] group-hover:bg-opacity-60 transition"
          >
            Mattrass
          </a>
        </div>
        <div className="relative rounded-sm overflow-hidden group">
          <Image src={Category3} alt="category 3" className="w-full" />
          <a
            href="#"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-[600] group-hover:bg-opacity-60 transition"
          >
            Outdoor
          </a>
        </div>
        <div className="relative rounded-sm overflow-hidden group">
          <Image src={Category4} alt="category 4" className="w-full" />
          <a
            href="#"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-[600] group-hover:bg-opacity-60 transition"
          >
            Sofa
          </a>
        </div>
        <div className="relative rounded-sm overflow-hidden group">
          <Image src={Category5} alt="category 5" className="w-full" />
          <a
            href="#"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-[600] group-hover:bg-opacity-60 transition"
          >
            Living Room
          </a>
        </div>
        <div className="relative rounded-sm overflow-hidden group">
          <Image src={Category6} alt="category 6" className="w-full" />
          <a
            href="#"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-[600] group-hover:bg-opacity-60 transition"
          >
            Kitchen
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
