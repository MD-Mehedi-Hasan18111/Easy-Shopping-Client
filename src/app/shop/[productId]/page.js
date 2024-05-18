import Breadcrumb from "@/components/Shared/Breadcrumb";
import React from "react";
import ProductImages from "@/components/Product-Details/productImages";
import ProductInfo from "@/components/Product-Details/ProductInfo";
import ProductAction from "@/components/Product-Details/ProductAction";
import SocialMedia from "@/components/Product-Details/Social-Media";
import Description from "@/components/Product-Details/Description";
import RelatedProducts from "@/components/Product-Details/Related-Products";

const ProductDetails = () => {
  return (
    <>
      <Breadcrumb menuName="Product Details" />

      {/* <!-- product-detail --> */}
      <div className="container grid grid-cols-2 gap-6">
        <ProductImages />

        <div>
          <ProductInfo />

          <ProductAction />

          <SocialMedia />
        </div>
      </div>
      {/* <!-- ./product-detail --> */}

      <Description />

      <RelatedProducts />
    </>
  );
};

export default ProductDetails;
