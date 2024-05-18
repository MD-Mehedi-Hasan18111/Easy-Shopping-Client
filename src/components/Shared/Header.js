import Image from "next/image";
import React from "react";
import Logo from "@/global/assets/images/logo.svg";
import { CiHeart, CiShoppingCart } from "react-icons/ci";

const Header = () => {
  return (
    <header className="py-4 shadow-sm bg-white">
      <div className="container flex items-center justify-between">
        <a href="index.html">
          <Image
            src={Logo}
            priority
            alt="Logo"
            className="w-32"
            height={32}
            width={32}
          />
        </a>

        <div className="w-full max-w-xl relative flex">
          <span className="absolute left-4 top-3 text-lg text-gray-400">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <input
            type="text"
            name="search"
            id="search"
            className="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none"
            placeholder="search"
          />
          <button className="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition">
            Search
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="text-center text-gray-700 hover:text-primary transition relative"
          >
            <div>
              <CiHeart className="text-primary text-[28px]" />
            </div>
            <div className="absolute -right-2 -top-1.5 w-4 h-4 rounded-full flex items-center justify-center bg-primary text-white text-[10px]">
              8
            </div>
          </a>
          <a
            href="#"
            className="text-center text-gray-700 hover:text-primary transition relative"
          >
            <div>
              <CiShoppingCart className="text-primary text-[28px]" />
            </div>
            <div className="absolute -right-2 -top-1.5 w-4 h-4 rounded-full flex items-center justify-center bg-primary text-white text-[10px]">
              2
            </div>
          </a>
          <a
            href="#"
            className="text-center text-gray-700 hover:text-primary transition relative"
          >
            <div className="text-2xl">
              <i className="fa-regular fa-user"></i>
            </div>
            <div className="text-xs leading-3">Account</div>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
