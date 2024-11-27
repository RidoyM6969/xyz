import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import { Link } from "react-router-dom";

const Newarival = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    fetch("fakeData.json")
      .then((response) => response.json())
      .then((dta) => setData(dta));
  }, []);
  console.log(data);

  return (
    <div className="lg:py-[150px] py-[80px]">
      <Container>
        <h2 className="text-[25px]  capitalize lg:text-[32px] font-bold text-center underline ">
          New Arrival
        </h2>

        <div className="lg:py-[50px]">
          <div className="flex flex-wrap items-center justify-evenly">
            {data.map((item) => (
              <div className="w-[170px] relative group mt-[50px] lg:w-[300px] xl:w-[350px] ">
                <div className=" h-[200px]  bg-[#EDEDED] lg:h-[380px] xl:h-[420px] p-1  ">
                  <Link to={`/shop/${item.id}`}>
                    <img
                      className="w-full h-full "
                      src={item.image}
                      alt="img"
                    />
                  </Link>
                </div>
                <div className="pt-2 h-[100px]">
                  <h3 className="text-[14px]  capitalize lg:text-[20px] font-[600px]">
                    {item.name}
                  </h3>
                  <h5 className="text-[14px] lg:text-[15px] font-semibold capitalize ">
                    price : <span className="font-normal">{item.price}$</span>
                  </h5>
                  <h5 className=" text-[12px] lg:text-[15px] capitalize font-semibold">
                    description :{" "}
                    <span className="font-normal">{item.description}</span>
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Newarival;
