import Link from "next/link";
import React from "react";
import { HiOutlineHome  } from "react-icons/hi";
import { MdArrowForwardIos } from "react-icons/md";

const Breadcrumb = ({ menuName }) => {
  return (
    <div className="container py-4 flex items-center gap-x-1">
      <Link href="/">
        <HiOutlineHome className="text-primary text-[22px]" />
      </Link>
      <MdArrowForwardIos className="text-[20px] text-gray-400" />
      <p className="text-gray-600 font-[600]">{menuName}</p>
    </div>
  );
};

export default Breadcrumb;
