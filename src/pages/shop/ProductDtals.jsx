import React, { useEffect, useState } from 'react'
import Container from '../../components/Container'
import dress from "../../assets/dress.jpg"
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { useLoaderData, useParams } from 'react-router-dom';
const ProductDtals = () => {

  
  const product = useLoaderData();   
  
  const { id } = useParams();
  
  const book = product.find(item => item.id === parseInt(id));
  



  let [bgcolor, setBgColor] = useState([
    '#FF0000',
    '#FFFFFF',
    '#C0C0C0',
    '#808080',
    '#000000',
    '#FFA500',
    '#A52A2A',
    '#0000FF',
    '#808000',
    '#008000',
    '#808000',
    '#7FFFD4',
    '#FFC0CB',
    '#800080',
    '#00008B',
    '#FFFF00',
    '#FF00FF',
  ]);
  
  let [itemSize, setItemSize] = useState([
    'm',
    'l',
    'xl',
    'xxl',
  ]);
  
  return (
    <div className="lg:py-[100px] pt-[30px] pb-[400px]  overflow-x-hidden  relative ">
      <Container>
        <div className="flex lg:justify-between justify-center">
          <div className="lg:w-[40%] w-[100%]">
            <div className="border w-full xl:h-[700px] flex items-center justify-center p-1 ">
              <InnerImageZoom className='h-full'
                zoomType="hover"
                zoomScale={1}
                src={book.image}/>
            </div>
          </div>
          <div className="lg:w-[50%] w-full lg:static absolute bottom-9 left-3 ">
            <h2 className="lg:text-[28px] text-[20px] font-semibold capitalize">
              {book.name}
            </h2>
            <div className="flex items-center pt-[18px] gap-x-3 lg:gap-x-5">
              <h5 className="text-[16px]  font-normal capitalize  text-blue-400">
                rating :{" "}
              </h5>
              <Stack spacing={1}>
                <Rating  name="half-rating" defaultValue={book.rating} precision={book.rating} />
              </Stack>
            </div>
            <h5 className="text-[20px] font-semibold capitalize pt-[18px]">
              brand : BROLOX
            </h5>
            <h6 className="text-[20px] font-semibold capitalize pt-[40px]">
              price : <span className='ml-2 text-[16px] lg:text-[20px]'>560$</span>{""}
              <del className="text-red-400 lg:text-[16px] text-[12px] pl-3">600$</del>
            </h6>

            <div className="flex items-center gap-x-2 pt-[20px] ">
              <h5 className="text-[16px] capitalize ">available color :</h5>
                  <div
                    className="  text-[11px] cursor-pointer border"
                    
              >{ book.color}</div>
            </div>
            <div className="lg:pt-[60px] pt-[30px] flex items-center gap-x-3 lg:gap-x-5  ">
              <h5 className="text-[20px] capitalize ">size :</h5>
              {itemSize.length !== 0 && itemSize.map((item, Index) => (
                
                <div className="border h-9 w-9 uppercase flex items-center justify-center lg:text-[19px] text-[16px] font-semibold lg:p-2 cursor-pointer  ">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ProductDtals
