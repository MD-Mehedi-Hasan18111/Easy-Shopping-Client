import React from "react";
import ProductCard from "../Shared/Product-Card";

const TopNewArrival = () => {
  return (
    <div className="container pb-16">
      <h2 className="text-2xl font-[600] text-gray-800 uppercase mb-6">
        top new arrival
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default TopNewArrival;
