import React, { useState } from "react";
import Container from "../../components/Container";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import { Link } from "react-router-dom";
import { FaSkyatlas } from "react-icons/fa6";
import { GiBurningTree } from "react-icons/gi";

const SmallMenu = () => {
  let [productList, setProductList] = useState(false);
  let [designList, setDesignLab] = useState(false);
  let [tamplates, setTamplates] = useState(false);
  let [productclose, setProductClose] = useState(0);
  let [designlabClose, setDesignLabClose] = useState(0);
  let [tmpletClose, setTamplateClose] = useState(0);

  let handelClose = (index) => {
    setProductClose(index);
    setProductList(false);
  };
  
  let handelWomenClose = (index) => {
    setDesignLabClose(index);
    setDesignLab(false);
  };

  let handelTamplateClose = (index) => {
    setTamplateClose(index);
  };

  return (
    <>
      <div className="py-[10px] shadow-2xl bg-[black] z-[600] sticky w-full top-0  ">
        <Container>
          <div className="">
            <ul className="flex items-center justify-evenly">
              <ClickAwayListener onClickAway={() => setProductList(false)}>
                <div className="relative">
                  <Link to="/shop">
                    <li
                      onClick={() => setProductList(!productList)}
                      className="capitalize text-[14px] lg:text-[18px] text-[#FFF] cursor-pointer ">
                      shop
                    </li>
                  </Link>
                </div>
              </ClickAwayListener>
              <ClickAwayListener>
                <div className="relative">
                  <Link to="/about">
                    <li className="capitalize text-[14px] lg:text-[18px] text-[#FFF] cursor-pointer ">
                      about us
                    </li>
                  </Link>
                </div>
              </ClickAwayListener>

              <ClickAwayListener onClickAway={() => setDesignLab(false)}>
                <div className="relative  ">
                  <div
                    onClick={() => setDesignLab(!designList)}
                    className="capitalize text-[14px] lg:text-[18px] text-[#FFF] cursor-pointer "
                  >
                    design lab
                  </div>

                  {designList == true ?  (
                    <div className="flex  items-center justify-between xl:w-[1300px] lg:w-[1000px] w-[350px] pt-[120px] pb-0  lg:pt-[80px]  h-auto p-[30px] border shadow-2xl absolute top-[35px] lg:left-[-715px] xl:left-[-750px] right-[-50px] bg-[#FFF] z-[999] ">
                      <div className="w-[40%] lg:static absolute top-1  ">
                        <img
                          src="https://www.abantemarketing.com/wp-content/uploads/2020/07/Laptop-using-t-shirt-designer.png"
                          alt=""
                        />
                      </div>
                      <div className="lg:w-[55%] w-[100%]">
                        <h2 className="lg:text-[28px] text-[12px] capitalize font-bold">
                          The Design Lab Makes It Fun and Easy to Design Online
                        </h2>
                        <p className="lg:text-[16px] text-[11px] font-normal lg:pt-[20px] pt-[8px]">
                          With the best collection of fonts and artwork online,
                          the Design Lab makes it easy to create custom t-shirts
                          and promotional products your group will love.
                        </p>
                        <div className="flex items-center justify-between lg:pt-[20px] pt-[8px] ">
                          <div className="w-[20%]">
                            <FaSkyatlas className="lg:text-[70px] text-[28px] text-red-600" />
                            <h4 className="lg:text-[12px] text-[10px] font-semibold pt-[10px]">Upload Your Own
                            Logo or Artwork</h4>
                          </div>
                          <div className="w-[20%]">
                            <h4 className="lg:text-[45px] text-[11px] uppercase text-red-600 font-bold">font</h4>
                            <h4 className="lg:text-[12px] text-[11px] font-semibold pt-[10px]">Hundreds of
                            Cool Fonts</h4>
                          </div>
                          <div className="w-[20%]">
                            <GiBurningTree className="lg:text-[70px] text-[20px] text-red-600" />
                            <h4 className="text-[12px] font-semibold pt-[10px]">Incredible
                            Artwork</h4>
                          </div>
                          <div className="w-[20%]">
                            <h4 className="lg:text-[23px] text-[11px] text-red-600 font-bold uppercase">jones 19</h4>
                            <h4 className="lg:text-[12px] text-[11px] font-semibold pt-[10px]">Your Names &
                            Numbers</h4>
                          </div>
                        </div>
                        <div className="lg:py-[45px] py-[15px] flex items-center justify-center">
                          <button className="bg-red-500 text-white capitalize text-[12px] lg:text-[20px] font-semibold lg:px-[17px] lg:py-[7px] px-7 py-2  rounded-[8px]  ">start designing</button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  </div>
              </ClickAwayListener>

              {/* <ClickAwayListener onClickAway={() => setTamplates(false)}>
                <div className="relative">
                  <li
                    onClick={() => setTamplates(!tamplates)}
                    className="capitalize text-[14px] lg:text-[18px] text-[#FFF] cursor-pointer "
                  >
                    tamplates
                  </li>
                  {tamplates == true ? (
                    <div className="flex items-center justify-between w-[1000px] h-auto p-[30px] border shadow-2xl absolute top-[35px] left-[-500px] bg-[#FFF] z-[999] ">
                      <ul className="w-[20%] ">
                        <h2 className="capitalize text-[20px] text-red-500 pb-2 px-2">
                          t-shart
                        </h2>
                        <li
                          onClick={() => handelTamplateClose(0)}
                          className={`py-[6px] hover:bg-red-300 px-2 my-[6] ${
                            tmpletClose == 0 ? "active" : ""
                          }`}
                        >
                          men Sleeve T-shirts
                        </li>
                        <li
                          onClick={() => handelTamplateClose(1)}
                          className={`py-[6px] hover:bg-red-300 px-2 my-[6] ${
                            tmpletClose == 1 ? "active" : ""
                          }`}
                        >
                          men Sleeve T-shirts
                        </li>
                      </ul>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </ClickAwayListener> */}
            </ul>
          </div>
        </Container>
      </div>
    </>
  );
};

export default SmallMenu;
