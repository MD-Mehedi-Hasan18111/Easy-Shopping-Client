import React from "react";

const Banner = () => {
  return (
    <div className="bg-[url('/images/banner-bg.jpg')] bg-cover bg-no-repeat bg-center py-36">
      <div className="container">
        <h1 className="text-6xl text-gray-800 font-[600] mb-4 capitalize">
          best collection for <br /> home decoration
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam{" "}
          <br />
          accusantium perspiciatis, sapiente magni eos dolorum ex quos dolores
          odio
        </p>
        <div className="mt-12">
          <a
            href="#"
            className="bg-primary border border-primary text-white px-8 py-3 font-[600] 
                    rounded-md hover:bg-transparent hover:text-primary"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
