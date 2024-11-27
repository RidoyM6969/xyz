import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Container from '../../components/Container';
import dress from '../../assets/dress.jpg'
import blue from '../../assets/blue.jpg'
import black from '../../assets/black.jpg'
import zolpai from '../../assets/zolpai.jpg'
import white from '../../assets/white.jpg'
import Boxreuseable from './Boxreuseable';
import { Link } from 'react-router-dom';

const Feature = () => {
  return (
      <div>
          <Container>
             <h2 className=' text-[25px] capitalize lg:text-[32px] font-bold text-center underline lg:py-[50px] py-[30px]'>Featured Products</h2>
              <div className="text-center ">
              
      <Tabs>
        <TabList>
          <Tab>Best deals</Tab>
          <Tab>Best seles</Tab>
        </TabList>

        <TabPanel>
              <div className="flex flex-wrap items-center justify-evenly py-[30px] ">
                
                            <Boxreuseable img={zolpai} />
                            <Boxreuseable img={blue} />
                            <Boxreuseable img={white} />
                            <Boxreuseable img={dress} />
                            <Boxreuseable img={white} />
                            <Boxreuseable img={zolpai} />
                        </div>
        </TabPanel>
        <TabPanel>
                          <div className="flex flex-wrap items-center justify-evenly py-[30px] ">
                            <Boxreuseable img={blue} />
                            <Boxreuseable img={white} />
                            <Boxreuseable img={black} />
                            <Boxreuseable img={zolpai} />
                            <Boxreuseable img={white} />
                            <Boxreuseable img={blue} />
                        </div>
        </TabPanel>
      </Tabs>
              </div>   
          </Container>
    </div>
  );
}

export default Feature
