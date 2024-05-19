import Breadcrumb from "@/components/Shared/Breadcrumb";
import Image from "next/image";
import React from "react";
import Product10 from "@/global/assets/images/products/product10.jpg";
import WishProdctCard from "@/components/Wishlist/WishProdct-Card";
import { FaRegTrashAlt } from "react-icons/fa";

const Wishlist = () => {
  return (
    <div>
      <Breadcrumb menuName="Wishlist" />

      <div className="container gap-6 pt-4 pb-16">
        {/* <!-- wishlist --> */}
        <div className="mx-auto space-y-4 max-w-6xl">
          <WishProdctCard />
          <div className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
            <div className="w-28">
              <Image src={Product10} alt="product 10" className="w-full" />
            </div>
            <div className="w-1/3">
              <h2 className="text-gray-800 text-xl font-medium uppercase">Sofa</h2>
              <p className="text-gray-500 text-sm">
                Availability: <span className="text-red-600">Out of Stock</span>
              </p>
            </div>
            <div className="text-primary text-lg font-semibold">$320.00</div>
            <div className="flex items-center space-x-10">
              <a
                href="#"
                className="cursor-not-allowed px-6 py-2 text-center text-sm text-white bg-red-400 border border-red-400 rounded transition uppercase font-roboto font-medium"
              >
                add to cart
              </a>

              <div className="text-gray-600 cursor-pointer hover:text-primary">
                <FaRegTrashAlt className="text-[24px]" />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ./wishlist --> */}
      </div>
    </div>
  );
};

export default Wishlist;
