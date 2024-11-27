import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Container from "../../components/Container";
import { FaList } from "react-icons/fa";
import { SiWindows } from "react-icons/si";
import { FiPlus } from "react-icons/fi";
import ShopProductReuse from "./ShopProductReuse";
import { patch } from "@mui/material";
import { GiCrossMark } from "react-icons/gi";
import { LuListMinus } from "react-icons/lu";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";


const ShopProduct = () => {
  let [catagoryShop, setCatagoryShop] = useState(false);
  let [shopSize, setShopSize] = useState(false);
  let [shopColor, setShopColor] = useState(false);
  let [shopPrice, setShopPrice] = useState(false);
  let [shopRating, setshopRating] = useState(false);
  let [menu, setMenu] = useState(false)
  let [listproduct, setListProduct] = useState("")
  let [data, setData] = useState([])
  let [catagoryitem, setCatagoryItem] = useState([]);
  let [categoryfilter, setCategotyfilter] = useState([])

  useEffect(()=>{
    fetch('fakeData.json').then(res => res.json()).then(data => setData(data));  
  }, [])
  
  useEffect(() => {
    setCatagoryItem([...new Set(data.map((item)=>item.category))])
    
  },[data])
  

  let handelCatgoryFound = (citem) => {
    let foundcatagory = data.filter((item) => item.category == citem)
    setCategotyfilter(foundcatagory);
    
  }
  
  
  
  let handelMenuList = () => {
    setListProduct("active")
    
  }

  return (
    <div className="lg:py-[100px] py-[30px] relative">
      <Container>
        <div className="flex items-center px-2 gap-x-4 mb-[10px]">
          <Link to='/'>
          <h6 className="lg:text-[16px] text-[13px] font-normal uppercase hover:text-red-500 ">home</h6>
          </Link>
          &#11178;
          <h6 className="lg:text-[16px] text-[13px] font-normal uppercase ">shop</h6>
        </div>

        <div className="flex items-center justify-between border-t border-b border-gray-400 py-[5px] px-[20px]">
          <div className="lg:w-[20%] lg:static absolute top-3 right-2 ">
            <h3 className="lg:text-[25px] text-[20px] font-[700] uppercase ">brolox</h3>
          </div>
          <div className="lg:w-[75%] flex justify-end  gap-x-7 ">
            <div className="flex items-center gap-x-3  ">
              <h5 className="lg:text-[18px] text-[13px] font-semibold capitalize">
                short by :
              </h5>
              <select
                className="border rounded-[4px] text-[11px] lg:text-[20px] capitalize "
                name=""
                id=""
              >
                <option className="text-center capitalize" value="best match">
                  best match
                </option>
                <option className="text-center capitalize" value="low - medium">
                  low - medium
                </option>
                <option
                  className="text-center capitalize"
                  value="medium to high"
                >
                  medium to high
                </option>
                <option className="text-center capitalize" value=" high">
                  high
                </option>
              </select>
            </div>
            <div className="flex items-center gap-x-4   ">
              <h5 className="lg:text-[18px] text-[14px] font-semibold capitalize">view :</h5>
              <div className="flex items-center gap-x-[30px] ">
                <SiWindows  className=" text-[16px] lg:text-[25px]" />
                <FaList onClick={handelMenuList} className=" text-[16px] lg:text-[25px]" />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:py-[100px] pt-[30px] flex justify-between relative">
            <div className={`lg:w-[20%] lg:static ${menu == true ? " bg-[#ede6e6]  absolute top-10 left-1 p-2  h-[300px] overflow-scroll overflow-x-hidden w-[150px] z-100 duration-150  transition-all " : "  absolute top-10 left-[-700px]  p-2 h-auto w-[150px] z-100 duration-150  transition-all  "}`}>
              <div className="">
                <div
                  onClick={() => setCatagoryShop(!catagoryShop)}
                className="flex items-center justify-between cursor-pointer ">
                  <h3 className="lg:text-[25px] text-[16px] font-bold capitalize  ">catagory</h3>
                  <FiPlus className="lg:text-[25px]" />
                </div>
                {catagoryShop == true ? (
                  <ul className="lg:text-[18px] text-[12px] font-normal capitalize">
                    
                  {catagoryitem?.map((item) => (
                  <div className="flex items-center border-b justify-between cursor-pointer py-[10px] px-[10px] hover:bg-[#fde9e9] ">
                      <li onClick={()=>handelCatgoryFound(item)}  className="">{item}</li>
                      <FiPlus className="text-[16px]" />
                    </div>
                    ))}
                  </ul>
                ) : (
                  ""
                )}
              </div>
              <div className="pt-[20px]">
                <div
                  onClick={() => setShopSize(!shopSize)}
                  className="flex items-center justify-between "
                >
                  <h3 className="lg:text-[25px] text-[16px] font-bold capitalize  ">size</h3>
                  <FiPlus className="lg:text-[25px]" />
                </div>
                {shopSize == true ? (
                  <ul className="lg:text-[18px] text-[12px] font-normal capitalize">
                    <div className="flex items-center border-b gap-x-4  py-[10px] px-[10px] hover:bg-[#fde9e9] ">
                      <input type="checkbox" name="chekbox" id="" />
                      <li className="">xs</li>
                    </div>
                    <div className="flex items-center border-b py-[10px]  px-[10px] gap-x-4  hover:bg-[#fde9e9] ">
                      <input type="checkbox" name="checkbox" id="" />

                      <li className="">xl</li>
                    </div>
                    <div className="flex items-center border-b  py-[10px] px-[10px] gap-x-4  hover:bg-[#fde9e9] ">
                      <input type="checkbox" name="chekbox" id="" />

                      <li className="">2xl</li>
                    </div>
                    <div className="flex items-center border-b  py-[10px] px-[10px] gap-x-4  hover:bg-[#fde9e9] ">
                      <input type="checkbox" name="chekbox" id="" />

                      <li className="">l</li>
                    </div>
                    <div className="flex items-center border-b  py-[10px] px-[10px] gap-x-4  hover:bg-[#fde9e9] ">
                      <input type="checkbox" name="chekbox" id="" />

                      <li className="">m</li>
                    </div>
                    <div className="flex items-center border-b  py-[10px] px-[10px] gap-x-4  hover:bg-[#fde9e9] ">
                      <input type="checkbox" name="chekbox" id="" />

                      <li className="">s</li>
                    </div>
                  </ul>
                ) : (
                  ""
                )}
              </div>
              <div className="pt-[20px]">
                <div
                  onClick={() => setShopColor(!shopColor)}
                  className="flex items-center justify-between "
                >
                  <h3 className="lg:text-[25px] text-[16px] font-bold capitalize  ">color</h3>
                  <FiPlus className="lg:text-[25px]" />
                </div>
                {shopColor == true ? (
                  <ul className="lg:text-[18px] text-[12px] font-normal capitalize">
                    <div className="flex items-center border-b justify-between py-[10px] px-[10px] hover:bg-[#fde9e9] ">
                      <li className="">mens</li>
                      <FiPlus className="text-[16px]" />
                    </div>
                    <div className="flex items-center border-b justify-between py-[10px] px-[10px] hover:bg-[#fde9e9] ">
                      <li className="">kids</li>
                      <FiPlus className="text-[16px]" />
                    </div>
                    <div className="flex items-center border-b justify-between py-[10px] px-[10px] hover:bg-[#fde9e9] ">
                      <li className="">womens</li>
                      <FiPlus className="text-[16px]" />
                    </div>
                    <div className="flex items-center border-b justify-between py-[10px] px-[10px] hover:bg-[#fde9e9] ">
                      <li className="">womens kids</li>
                      <FiPlus className="text-[16px]" />
                    </div>
                  </ul>
                ) : (
                  ""
                )}
              </div>
              <div className="pt-[20px]">
                <div
                  onClick={() => setShopPrice(!shopPrice)}
                  className="flex items-center justify-between "
                >
                  <h3 className="lg:text-[25px] text-[16px] font-bold capitalize  ">price</h3>
                  <FiPlus className="lg:text-[25px]" />
                </div>
                {shopPrice == true ? (
                  <ul className="lg:text-[18px] text-[12px] font-normal capitalize">
                    <div className="flex items-center border-b justify-between py-[10px] px-[10px] hover:bg-[#fde9e9] ">
                      <li className="">mens</li>
                      <FiPlus className="text-[16px]" />
                    </div>
                    <div className="flex items-center border-b justify-between py-[10px] px-[10px] hover:bg-[#fde9e9] ">
                      <li className="">kids</li>
                      <FiPlus className="text-[16px]" />
                    </div>
                    <div className="flex items-center border-b justify-between py-[10px] px-[10px] hover:bg-[#fde9e9] ">
                      <li className="">womens</li>
                      <FiPlus className="text-[16px]" />
                    </div>
                    <div className="flex items-center border-b justify-between py-[10px] px-[10px] hover:bg-[#fde9e9] ">
                      <li className="">womens kids</li>
                      <FiPlus className="text-[16px]" />
                    </div>
                  </ul>
                ) : (
                  ""
                )}
              </div>
              <div className="pt-[20px]">
                <div
                  onClick={() => setshopRating(!shopRating)}
                  className="flex items-center justify-between"
                >
                  <h3 className="lg:text-[25px] text-[16px] font-bold capitalize ">rating</h3>
                  <FiPlus className="lg:text-[25px]" />
                </div>
                {shopRating == true ? (
                  <ul className="lg:text-[18px] text-[12px] font-normal capitalize">
                    <div className="flex items-center border-b justify-between py-[10px] px-[10px] hover:bg-[#fde9e9] ">
                      <li className="">mens</li>
                      <FiPlus className="text-[16px]" />
                    </div>
                    <div className="flex items-center border-b justify-between py-[10px] px-[10px] hover:bg-[#fde9e9] ">
                      <li className="">kids</li>
                      <FiPlus className="text-[16px]" />
                    </div>
                    <div className="flex items-center border-b justify-between py-[10px] px-[10px] hover:bg-[#fde9e9] ">
                      <li className="">womens</li>
                      <FiPlus className="text-[16px]" />
                    </div>
                    <div className="flex items-center border-b justify-between py-[10px] px-[10px] hover:bg-[#fde9e9] ">
                      <li className="">womens kids</li>
                      <FiPlus className="text-[16px]" />
                    </div>
                  </ul>
                ) : (
                  ""
                )}
              </div>
            </div>
          <div onClick={()=>setMenu(!menu)} className="absolute top-3 left-3 text-[20px] lg:hidden " >
            {menu==true?<GiCrossMark/>:<LuListMinus/>}
          </div>

          <div className="lg:w-[75%] px-1 lg:px-0">
            <ShopProductReuse listproduct={listproduct } categoryfilter={categoryfilter} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ShopProduct;
