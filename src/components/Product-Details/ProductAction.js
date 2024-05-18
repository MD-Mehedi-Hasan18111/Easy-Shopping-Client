import React from "react";
import { CiHeart, CiShoppingCart } from "react-icons/ci";

const ProductAction = () => {
  return (
    <div className="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
      <a
        href="#"
        className="bg-primary border border-primary text-white px-8 py-2 font-[600] rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition"
      >
        <CiShoppingCart className="text-[28px]" /> Add to cart
      </a>
      <a
        href="#"
        className="border border-gray-300 text-gray-600 px-8 py-2 font-[600] rounded uppercase flex items-center gap-2 hover:text-primary transition"
      >
        <CiHeart className="text-[28px]" /> Add to Wishlist
      </a>
    </div>
  );
};

export default ProductAction;
