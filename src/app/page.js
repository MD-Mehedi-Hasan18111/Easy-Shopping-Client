import Ad from "@/components/Home/Ad";
import Banner from "@/components/Home/Banner";
import FeatureServices from "@/components/Home/Feature-Services";
import ShopByCategory from "@/components/Home/Shop-By-Category";
import TopNewArrival from "@/components/Home/Top-New-Arrival";
import TrendingProducts from "@/components/Home/Trending-Products";
import React from "react";

const Home = () => {
  return (
    <div>
      <Banner />
      <FeatureServices />
      <ShopByCategory />
      <TopNewArrival />
      <Ad />
      <TrendingProducts />
    </div>
  );
};

export default Home;
