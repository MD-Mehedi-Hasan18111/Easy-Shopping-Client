import React from "react";
import Sofa from "@/global/assets/images/icons/sofa.svg";
import Terarce from "@/global/assets/images/icons/terrace.svg";
import Bed from "@/global/assets/images/icons/bed.svg";
import Office from "@/global/assets/images/icons/office.svg";
import Outdoor from "@/global/assets/images/icons/outdoor-cafe.svg";
import Mattress from "@/global/assets/images/icons/bed-2.svg";
import Image from "next/image";
import { IoIosMenu  } from "react-icons/io";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="container flex">
        <div className="px-8 py-4 bg-primary flex items-center cursor-pointer relative group">
          <span className="text-white">
            <IoIosMenu className="text-[24px]" />
          </span>
          <span className="capitalize ml-2 text-white">All Categories</span>

          {/* <!-- dropdown --> */}
          <div className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
            <a
              href="#"
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <Image
                src={Sofa}
                alt="sofa"
                height={5}
                width={5}
                className="w-5 h-5 object-contain"
              />
              <span className="ml-6 text-gray-600 text-sm">Sofa</span>
            </a>
            <a
              href="#"
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <Image
                src={Terarce}
                alt="terrace"
                height={5}
                width={5}
                className="w-5 h-5 object-contain"
              />
              <span className="ml-6 text-gray-600 text-sm">Terarce</span>
            </a>
            <a
              href="#"
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <Image
                src={Bed}
                alt="bed"
                height={5}
                width={5}
                className="w-5 h-5 object-contain"
              />
              <span className="ml-6 text-gray-600 text-sm">Bed</span>
            </a>
            <a
              href="#"
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <Image
                src={Office}
                alt="office"
                height={5}
                width={5}
                className="w-5 h-5 object-contain"
              />
              <span className="ml-6 text-gray-600 text-sm">office</span>
            </a>
            <a
              href="#"
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <Image
                src={Outdoor}
                alt="outdoor"
                height={5}
                width={5}
                className="w-5 h-5 object-contain"
              />
              <span className="ml-6 text-gray-600 text-sm">Outdoor</span>
            </a>
            <a
              href="#"
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <Image
                src={Mattress}
                alt="Mattress"
                height={5}
                width={5}
                className="w-5 h-5 object-contain"
              />
              <span className="ml-6 text-gray-600 text-sm">Mattress</span>
            </a>
          </div>
        </div>

        <div className="flex items-center justify-between flex-grow pl-12">
          <div className="flex items-center space-x-6 capitalize">
            <Link
              href="/"
              className="text-gray-200 hover:text-white transition"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="text-gray-200 hover:text-white transition"
            >
              Shop
            </Link>
            <a href="#" className="text-gray-200 hover:text-white transition">
              About us
            </a>
            <a href="#" className="text-gray-200 hover:text-white transition">
              Contact us
            </a>
          </div>
          <a href="#" className="text-gray-200 hover:text-white transition">
            Login/Register
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
