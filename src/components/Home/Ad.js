import React from "react";
import Offer from "@/global/assets/images/offer.jpg";
import Image from "next/image";

const Ad = () => {
  return (
    <div className="container pb-16">
      <a href="#">
        <Image src={Offer} alt="ads" className="w-full" />
      </a>
    </div>
  );
};

export default Ad;
