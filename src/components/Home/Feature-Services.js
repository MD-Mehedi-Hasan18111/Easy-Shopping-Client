import Image from "next/image";
import DeliveryVan from "@/global/assets/images/icons/delivery-van.svg";
import MoneyBack from "@/global/assets/images/icons/money-back.svg";
import ServiceHours from "@/global/assets/images/icons/service-hours.svg";
import React from "react";

const FeatureServices = () => {
  return (
    <div className="container py-16">
      <div className="w-10/12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto justify-center">
        <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
          <Image
            src={DeliveryVan}
            alt="Delivery"
            height={12}
            width={12}
            className="w-12 h-12 object-contain"
          />
          <div>
            <h4 className="font-[600] capitalize text-lg">Free Shipping</h4>
            <p className="text-gray-500 text-sm">Order over $200</p>
          </div>
        </div>
        <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
          <Image
            src={MoneyBack}
            alt="Money_Back"
            height={12}
            width={12}
            className="w-12 h-12 object-contain"
          />
          <div>
            <h4 className="font-[600] capitalize text-lg">Money Rturns</h4>
            <p className="text-gray-500 text-sm">30 days money returs</p>
          </div>
        </div>
        <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
          <Image
            src={ServiceHours}
            alt="Service_Hours"
            height={12}
            width={12}
            className="w-12 h-12 object-contain"
          />
          <div>
            <h4 className="font-[600] capitalize text-lg">24/7 Support</h4>
            <p className="text-gray-500 text-sm">Customer support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureServices;
