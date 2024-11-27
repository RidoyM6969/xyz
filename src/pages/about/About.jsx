import React from "react";
import Ridoy from "../../assets/ridoy.jpg";
import Container from "../../components/Container";

const About = () => {
  return (
    <div className="py-[80px] px-1 lg:px-0 ">
      <Container>
        <div className=" ">
          <h2 className=" lg:text-[46px] text-[25px] font-semibold pb-[40px]  ">
            About Us
          </h2>
          <p className="lg:text-[26px] ">
            Welcome to our <strong className="text-red-500 "> BROLOX </strong>
            Brand! We are passionate about creating unique, high-quality
            T-shirts that let you express your individuality. From bold designs
            to minimalist styles, our collection has something for everyone.
          </p>
          <div className="flex items-center justify-end">
            <p className="lg:text-[22px]  w-[800px]  pt-14">
              Every T-shirt is crafted with love and care, using premium fabrics
              for ultimate comfort and durability. Whether you’re looking for
              casual wear, custom prints, or exclusive designs, we’ve got you
              covered!
            </p>
          </div>
          <p className="lg:text-[20px] py-11">
            <strong>Thank you</strong> for choosing us to be a part of your
            style journey. Let’s make a statement together!
          </p>
        </div>
        <div className="flex items-center justify-between py-[50px] ">
          <div className="lg:w-[220px] w-[120px] ">
            <img className="border" src={Ridoy} alt="" />
            <div className="pt-[10px]">
              <h3 className="text-center  uppercase font-semibold ">Ridoy</h3>
            </div>
          </div>
          <div className="lg:w-[300px] w-[120px] ">
            <img
              className="border"
              src="https://scontent.fjsr17-1.fna.fbcdn.net/v/t39.30808-6/466466655_2547723165617887_3965430389432808106_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE6znrngfoChoeT92Wf4rY-Ca095bWS6HMJrT3ltZLoc5af0QcHTP2s9XZxhH_6w0J_0ElbpD0KZkn_kQkLzbo8&_nc_ohc=GrDNxIZTuvoQ7kNvgE5fcX8&_nc_zt=23&_nc_ht=scontent.fjsr17-1.fna&_nc_gid=AMRr2bBlpox-YOuz_C7eu5x&oh=00_AYA3TkcJrF8sekhvnpaq2_KxU1XQ3YGA-2wynguRGU3eqw&oe=6740B611"
              alt=""
            />
            <div className="pt-[10px]">
              <h3 className="text-center  uppercase font-semibold ">sebbir</h3>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="lg:w-[30%] w-[45%] ">
            <h2 className="text-[12px]">Meet the Owner</h2>
            <p className="text-[12px]">
              Hi! I'm <strong>[Your Name]</strong>, the proud owner and founder
              of <strong>Your T-Shirt Brand</strong>. My journey into the world
              of T-shirt design began with a simple idea: to create stylish,
              comfortable, and meaningful apparel that connects with people.
            </p>
            <p className="text-[12px]">
              As someone who values creativity and individuality, I pour my
              heart into every design. My goal is to provide you with T-shirts
              that make you feel confident, comfortable, and unique.
            </p>
            <p className="text-[12px]">
              Outside of crafting designs, I enjoy [insert hobbies, e.g.,
              exploring new trends, spending time with family, or traveling].
              Thank you for supporting my dream and being a part of this amazing
              journey!
            </p>
          </div>
          <div className="lg:w-[30%] w-[45%] ">
            <h2 className="text-[12px]">Meet the Owner</h2>
            <p className="text-[12px]">
              Hi! I'm <strong>[Your Name]</strong>, the proud owner and founder
              of <strong>Your T-Shirt Brand</strong>. My journey into the world
              of T-shirt design began with a simple idea: to create stylish,
              comfortable, and meaningful apparel that connects with people.
            </p>
            <p className="text-[12px]">
              As someone who values creativity and individuality, I pour my
              heart into every design. My goal is to provide you with T-shirts
              that make you feel confident, comfortable, and unique.
            </p>
            <p className="text-[12px]">
              Outside of crafting designs, I enjoy [insert hobbies, e.g.,
              exploring new trends, spending time with family, or traveling].
              Thank you for supporting my dream and being a part of this amazing
              journey!
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
