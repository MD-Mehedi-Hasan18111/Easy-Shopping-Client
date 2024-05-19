import Image from "next/image";
import Methods from "@/global/assets/images/methods.png";
import React from "react";

const CopyrightFooter = () => {
  return (
    <div className="bg-gray-800 py-4">
      <div className="container flex items-center justify-between">
        <p className="text-white">&copy; TailCommerce - All Right Reserved</p>
        <div>
          <Image
            src={Methods}
            alt="methods"
            priority
            height={24}
            width={300}
            className="h-[24px] w-[300px]"
          />
        </div>
      </div>
    </div>
  );
};

export default CopyrightFooter;
