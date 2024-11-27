import React, { useEffect, useState } from "react";
import dress from "../../assets/dress.jpg"
import blue from '../../assets/blue.jpg'
import black from '../../assets/black.jpg'
import zolpai from '../../assets/zolpai.jpg'
import white from '../../assets/white.jpg'
import { Link } from "react-router-dom";

const ShopProductReuse = ({ listproduct,categoryfilter }) => {
 
  

  let [data, setData] = useState([])
  useEffect(()=>{
    fetch('fakeData.json').then(res => res.json()).then(data => setData(data));    
  }, [])
  


  

  return (
    <>
      {categoryfilter.length > 0 ? 
            <div className="flex flex-wrap items-center justify-between">
            { categoryfilter.map((item, Index) => (       
            <div key={Index} className="lg:w-[350px] w-[170px] mt-[20px]">
              <div className="bg-[#EDEDED] lg:h-[420px] h-[200px] p-1">
                <Link to={`/shop/${item.id}`} >
                <img
                  className="w-full h-full hover:transition-all hover:scale-105"
                  src={item.image}
                  alt="imge"
                />
                </Link>
              </div>
              <div className="pt-2">
                <h3 className="capitalize lg:text-[20px] text-[16px] font-[600px]">{item.name}</h3>
                <h5 className="font-[500px] lg:text-[16px] text-[14px] capitalize">
                  price : <span className="font-normal">{item.price}$</span>
                </h5>
                <h5 className=" lg:text-[16px] text-[12px] capitalize">{item.description} :</h5>
              </div>
            </div>
            ))}
          </div>
    
    :
    
      <div className="flex flex-wrap items-center lg:justify-evenly xl:justify-between justify-between">
        { data.map((item, Index) => (       
        <div key={Index} className="xl:w-[350px] lg:w-[270px] w-[170px] mt-[20px]">
          <div className="bg-[#EDEDED] lg:h-[330px] xl:h-[420px] h-[200px] p-1">
            <Link to={`/shop/${item.id}`} >
            <img
              className="w-full h-full hover:transition-all hover:scale-105"
              src={item.image}
              alt="imge"
            />
            </Link>
          </div>
          <div className="pt-2">
            <h3 className="capitalize lg:text-[20px] text-[16px] font-[600px]">{item.name}</h3>
            <h5 className="font-[500px] lg:text-[16px] text-[14px] capitalize">
              price : <span className="font-normal">{item.price}$</span>
            </h5>
            <h5 className=" lg:text-[16px] text-[12px] capitalize">{item.description} :</h5>
          </div>
        </div>
        ))}
      </div>
    }
    </>
  );
};

export default ShopProductReuse;
