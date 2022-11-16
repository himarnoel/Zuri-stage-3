import React from "react";
import img1 from "../assets/footer/Vectorn.png";
import img2 from "../assets/footer/Vector.png";
import { GrFacebookOption } from "react-icons/gr";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineCopyrightCircle,
} from "react-icons/ai";
const Footer = () => {
  return (
    <div>
      <div className="bg-black grid md:grid-cols-2 lg:grid-cols-4 w-full py-[8rem]  lg:py-8rem  content-center text-center mx-auto">
        <div className="df">
          <div className="mt-2 flex">
            <img src={img1} alt="" className="object-contain" />
            <img src={img2} alt="" className="object-contain " />
          </div>
          <div className="text-white flex mt-10 ">
            <GrFacebookOption size={30} />
            <AiOutlineInstagram size={30} />
            <AiOutlineTwitter size={30} />
          </div>
          <div className="text-white flex flex-col text-start mt-10">
            <AiOutlineCopyrightCircle size={20} />
            <p> 2022 Metabnb</p>
          </div>
        </div>
        <div className="flex flex-col text-white">
          <p>Commmunity</p>
          <p>NFT</p>
          <p>Token</p>
          <p>Landlord</p>
          <p> Discord</p>
        </div>
        <div className="flex flex-col text-white">
          <p>Places</p>
          <p>Castle</p>
          <p>Forms</p>
          <p>Beach</p>
          <p>Learn more</p>
        </div>
        <div className="flex flex-col text-white">
          <p>About us</p>
          <p>Road Map</p>
          <p>Creators</p>
          <p>Carrers</p>
          <p> Contact us</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
