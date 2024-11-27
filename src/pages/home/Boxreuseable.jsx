import React from "react";
import dress from '../../assets/dress.jpg'

const Boxreuseable = (props) => {
  return (
    <div>
      <div className=" w-[170px]  relative group lg:w-[300px] xl:w-[350px] mt-[60px]">
        <div className="bg-[#EDEDED] lg:h-[350px] xl:h-[420px] h-[200px] p-1  ">
          <img className="w-full h-full " src={props.img} alt="" />
        </div>
        <div className="pt-2 text-start ">
          <h3 className="capitalize lg:text-[20px] text-[14px] font-[600px]">title :</h3>
          <h5 className="font-[500px] capitalize lg:text-[16px] text-[12px]">
            price : <span className="font-normal lg:text-[15px] text-[11px]">25.00$</span>
          </h5>
          <h5 className=" capitalize lg:text-[16px] text-[12px]">description :</h5>
        </div>
      </div>
    </div>
  );
};

export default Boxreuseable;
