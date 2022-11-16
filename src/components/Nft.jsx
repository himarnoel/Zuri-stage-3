import React from "react";
import img1 from "../assets/purple/image 7.png";
import img2 from "../assets/purple/image 8.png";
import img3 from "../assets/purple/image 9.png";
const Nft = () => {
  return (
    <div className="lg:p-32 lg:py-48 pb-[10rem]  md:pb-[20rem] bg-[#A02279] grid lg:grid-cols-2 mt-8 gap-x-[20rem] ">
      <div className="text-white  flex flex-col lg:items-start items-center">
        <p className="text-3xl mt-5">Metabnb NFTs</p>
        <p className="text-base mt-5 text-center">
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our cutomer
          access to loads of our exclusive services.
        </p>
        <button className="p-2 text-[#A02279] bg-white rounded-xl mt-5">
          Learn More
        </button>
      </div>
      <div className="relative flex  items-center justify-center mt-20  md:mt-20 ">
        <img
          src={img1}
          className=" md:w-64 absolute object-contain lg:w-64 lg:top-10 lg:right-[24rem] md:right-[23rem] md:top-0 w-32 top-[1.2rem] right-[12rem] "
        />
        <img
          src={img3}
          className=" md:w-64 absolute object-contain lg:w-64 lg:bottom-[5rem] w-32 md:top-0 "
        />
        <img
          src={img2}
          className=" md:w-64 absolute lg:left-20 lg:top-20 object-contain lg:w-64 w-32 top-[1.5rem] right-[5rem] md:top-[5rem] md:right-[12rem]"
        />
      </div>
    </div>
  );
};

export default Nft;
