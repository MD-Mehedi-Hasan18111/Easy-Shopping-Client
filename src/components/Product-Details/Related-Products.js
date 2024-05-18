import React from "react";
import ProductCard from "../Shared/Product-Card";

const RelatedProducts = () => {
  return (
    <div class="container pb-16">
      <h2 class="text-2xl font-[600] text-gray-800 uppercase mb-6">
        Related products
      </h2>
      <div class="grid grid-cols-4 gap-6">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default RelatedProducts;
