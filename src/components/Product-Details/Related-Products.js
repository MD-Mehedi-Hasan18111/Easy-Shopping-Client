import React from "react";
import ProductCard from "../Shared/Product-Card";

const RelatedProducts = () => {
  return (
    <div className="container pb-16">
      <h2 className="text-2xl font-[600] text-gray-800 uppercase mb-6">
        Related products
      </h2>
      <div className="grid grid-cols-4 gap-6">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default RelatedProducts;
