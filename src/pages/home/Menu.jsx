import React, { useEffect, useState } from "react";
import lgog from "../../assets/logo.png";
import Container from "../../components/Container";
import { FaHeadset } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

const Menu = () => {
  const [searchdata, setSearchData] = useState([]);
  const [productSearch, setProductSearch] = useState("");
  const [searchfilter, setSearchFilter] = useState([]);
  const [focusedIndex, setFocusedIndex] = useState(-1); // For tracking focused item
  const navigate = useNavigate();

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setSearchData(data));
  }, []);

  const handleProductSearch = (e) => {
    const value = e.target.value;
    setProductSearch(value);
    if (value === "") {
      setSearchFilter([]);
    } else {
      const filteredData = searchdata.filter((item) =>
        item?.name?.toLowerCase().includes(value.toLowerCase())
      );
      setSearchFilter(filteredData);
      setFocusedIndex(-1); // Reset focus when input changes
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setFocusedIndex((prev) => Math.min(prev + 1, searchfilter.length - 1));
    } else if (e.key === "ArrowUp") {
      setFocusedIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter" && focusedIndex >= 0) {
      const selectedProduct = searchfilter[focusedIndex];
      if (selectedProduct) {
        navigate(`/shop/${selectedProduct.id}`);
      }
    }
  };

  const searchProductClick = (id) => {
    if (id) {
      navigate(`/shop/${id}`);
      setSearchFilter([])
      setProductSearch("")
    }
  };

  return (
    <div className="pt-[15px] lg:pt-0 lg:py-[0px] shadow-2xl relative w-full z-[999]">
      <Container>
        <div className="flex items-center justify-between">
          <Link to="/">
            <img className="xl:w-[105px] w-[90px]" src={lgog} alt="Logo" />
          </Link>

          {/* Search components */}
          <form className="max-w-md mx-auto">
            <div className="relative ">
              <input
                onChange={handleProductSearch}
                onKeyDown={handleKeyDown}
                value={productSearch}
                type="search"
                id="default-search"
                className="block xl:w-[600px] xl:h-[50px] w-[250px] h-[40px] p-4 ps-10 text-[16px] text-gray-900 border border-red-500 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search in BROLOX"
                required
              />
              {searchfilter.length > 0 && (
                <div className="xl:absolute z-[800] absolute left-[5px] bg-[#E0E0E0] xl:w-[600px] h-[300px] w-full overflow-y-scroll">
                  {searchfilter.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => searchProductClick(item.id)}
                      className={`flex items-center justify-between pt-1 border-b-2 px-3 py-1 border-[#b7b5b5] hover:bg-slate-50 cursor-pointer ${
                        index === focusedIndex ? "bg-gray-200" : ""
                      }`}
                    >
                      <h2 className="xl:text-[20px]">{item.name}</h2>
                      <img className="w-[40px]" src={item.image} alt={item.name} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </form>

          {/* Other components */}
          <div className=" absolute top-[5px] right-2 lg:static flex items-center lg:gap-x-[50px] gap-3 ">
            <div className="flex items-center gap-x-3">
              <FaHeadset className="lg:text-[28px] text-[18px] text-[red]" />
              <div className="">
                <h4 className="capitalize lg:text-[14px] text-[11px] hidden lg:block  ">talk to an owner</h4>
                <h4 className="text-[red] lg:text-[16px] text-[11px]">+8801*********</h4>
              </div>
            </div>
            <div className="flex items-center gap-x-3">
              <BiMessageRoundedDetail className="lg:text-[30px] text-[20px] text-[red]" />
              <a href="#" className="capitalize lg:text-[14px] text-[11px]">
                chat to an owner
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Menu;
