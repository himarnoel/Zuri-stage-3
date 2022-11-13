import React from "react";
import logo from "../assets/Vector.png";
import name from "../assets/name.png";
const Nav = () => {
  return (
    <div>
      <div className="hidden lg:block">
        <div
          className=" 
     mx-auto  p-5 flex justify-between items-center w-full "
        >
          <div className="flex">
            <img src={logo} alt="" className="object-contain mr-3" />
            <img src={name} alt="" className="object-contain" />
          </div>
          <div className="flex text-xl p-5  w-1/2 justify-center ">
            <a className="lg:mr-10 xl:mr-20" href="/">
              Home
            </a>
            <a className="lg:mr-10 xl:mr-20" href="/">
              Place to Stay
            </a>
            <a className="lg:mr-10 xl:mr-20" href="/">
              NFTS
            </a>
            <a className="" href="/">
              Community
            </a>
            <a></a>
          </div>
          <button className="p-3 bg-[#A02279] rounded-md text-white">
            Connect Wallet
          </button>
        </div>
      </div> 
      <div className="lg:hidden  bg-fuchsia-400 w-screen p-5"></div>
      
    </div>
  );
};

export default Nav;
