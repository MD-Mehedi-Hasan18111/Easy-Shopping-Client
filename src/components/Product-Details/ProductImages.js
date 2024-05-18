import Image from "next/image";
import product1 from "@/global/assets/images/products/product1.jpg";
import product2 from "@/global/assets/images/products/product2.jpg";
import product3 from "@/global/assets/images/products/product3.jpg";
import product4 from "@/global/assets/images/products/product4.jpg";
import product5 from "@/global/assets/images/products/product5.jpg";
import product6 from "@/global/assets/images/products/product6.jpg";
import React from "react";

const ProductImages = () => {
  return (
    <div>
      <Image src={product1} alt="product" className="w-full" />
      <div className="grid grid-cols-5 gap-4 mt-4">
        <Image
          src={product2}
          alt="product2"
          className="w-full cursor-pointer border border-primary"
        />
        <Image
          src={product3}
          alt="product3"
          className="w-full cursor-pointer border"
        />
        <Image
          src={product4}
          alt="product4"
          className="w-full cursor-pointer border"
        />
        <Image
          src={product5}
          alt="product5"
          className="w-full cursor-pointer border"
        />
        <Image
          src={product6}
          alt="product6"
          className="w-full cursor-pointer border"
        />
      </div>
    </div>
  );
};

export default ProductImages;
