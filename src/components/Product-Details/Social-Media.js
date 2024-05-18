import React from "react";
import { FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";

const SocialMedia = () => {
  return (
    <div className="flex gap-3 mt-4">
      <a
        href="#"
        className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
      >
        <ImFacebook2 />
      </a>
      <a
        href="#"
        className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
      >
        <FaTwitterSquare />
      </a>
      <a
        href="#"
        className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
      >
        <FaInstagramSquare />
      </a>
    </div>
  );
};

export default SocialMedia;
