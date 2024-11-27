import React from "react";
import logo from "../../assets/logo.png";
import Container from "../../components/Container";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="lg:py-[100px] py-[50px] bg-[#eceaea]">
      <Container>
        <div className="lg:flex flex flex-wrap  justify-between">
          <div className="lg:w-[30%] w-full flex lg:block items-center justify-evenly text-center">
            <div className="">
              <Link to="/">
                <img
                  className="lg:w-[155px] w-[90px] mx-auto  "
                  src={logo}
                  alt=""
                />
              </Link>
              <h6 className="font-bold uppercase ">brolox</h6>
            </div>
            <div className="lg:pt-[100px] pt-[40px]">
              <h3 className="capitalize lg:text-[20px] font-[400] ">
                visit our site
              </h3>
              <div className="flex items-center justify-center lg:gap-x-[20px] gap-[2px] pt-[20px]">
                <div className="h-[30px] w-[30px] rounded-[50%] hover:bg-red-400 flex items-center justify-center border hover:border-transparent">
                  <FaFacebookF className="text-[20px]   " />
                </div>
                <div className="h-[30px] w-[30px] rounded-[50%] hover:bg-red-400 flex items-center justify-center border hover:border-transparent">
                  <FaInstagram className="text-[15px] " />
                </div>
                <div className="h-[30px] w-[30px] rounded-[50%] hover:bg-red-400 flex items-center justify-center border hover:border-transparent">
                  <FaLinkedinIn className="text-[15px]   " />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[30%] w-[45%] pt-[50px] lg:pt-0 text-center">
            <h2 className="lg:text-[25px] text-[18px] font-[600] capitalize ">
              about us
            </h2>
            <ul className="pt-[20px] ">
              <li className="lg:mt-[12px] mt-[3px] capitalize font-normal hover:underline decoration-red-700 cursor-pointer ">
                Our Story
              </li>
              <li className="lg:mt-[12px] mt-[3px] capitalize font-normal hover:underline decoration-red-700 cursor-pointer ">
                Careers
              </li>
              <li className="lg:mt-[12px] mt-[3px] capitalize font-normal hover:underline decoration-red-700 cursor-pointer ">
                Partnerships
              </li>
              <li className="lg:mt-[12px] mt-[3px] capitalize font-normal hover:underline decoration-red-700 cursor-pointer ">
                Store Locations
              </li>
              <li className="lg:mt-[12px] mt-[3px] capitalize font-normal hover:underline decoration-red-700 cursor-pointer ">
                Customer Reviews
              </li>
            </ul>
          </div>
          <div className="lg:w-[30%] w-[45%] pt-[50px] lg:pt-0 ">
            <div className="">
              <h4 className="lg:text-[18px] text-[12px] font-[600] uppercase ">
                7 days a week
              </h4>
              <h6 className="capitalize lg:text-[16px] text-[12px] font-normal ">
                Monday-Friday: 8am - Midnight ET
              </h6>
            </div>
            <h4 className="text-[16px] font-semibold capitalize lg:pt-[25px] pt-[10px]">
              talk to woner
            </h4>
            <div className="flex items-center gap-x-4 pt-[10px]">
              <FaHeadset className="lg:text-[25px] text-[14px] text-red-500 " />
              <span className="lg:text-[18px] text-[14px] ">
                +8801789-244517
              </span>
            </div>
            <div className="flex items-center gap-x-4 pt-[10px]">
              <FaHeadset className="lg:text-[25px] text-[14px] text-red-500 " />
              <span className="lg:text-[18px] text-[14px] ">+88013</span>
            </div>
            <div className="flex items-center gap-x-4 pt-[10px]">
              <BiMessageRoundedDetail className="lg:text-[25px] text-[14px] text-red-500 " />
              <span className="lg:text-[18px] text-[14px] ">
                +8801789-244517
              </span>
            </div>
            <h4 className="lg:text-[18px] text-[16px]  font-semibold capitalize lg:py-[20px] py-[12px]">
              Service Center
            </h4>
            <ul>
              <Link to="/how to order">
                <li className="lg:text-[18px] text-[14px] font-normal capitalize text-red-500">
                  how to order
                </li>
              </Link>
              <Link to="/helpcenter">
                <li className="lg:text-[16px] text-[14px] font-normal capitalize text-red-500">
                  help center
                </li>
              </Link>
              <li className="lg:text-[16px] text-[14px] font-normal capitalize text-red-500">
                complain center
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
