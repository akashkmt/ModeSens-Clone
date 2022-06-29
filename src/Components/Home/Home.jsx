
import SecondSlider from './brandSlider';
import Styles from "./FirstSlider.module.css";
import "./common.css"
import Example from './Bannerslider';
import ThirdSlider from "./SpacialOfferSlider";
import Community from './Community';
import Trending from './Trending';
import Bottom from './Downloadbanner';
import { Footer } from './Footer';
import Navbar from './Navbar/Navbar'
import React from 'react'
import { BrowserRouter } from 'react-router-dom';

const Home = () => {
  return (
    <>
   <div style={{marginLeft:"-1.3vh"}} className="h">
    <Navbar></Navbar>
   
    <div className="div" style={{marginTop:"12.6vh"}}>
    <Example></Example>
    
    </div>

     <p className={Styles.features}>Featured Partners</p>
     <p className={Styles.disc}>
       Compare across our 500+ partner stores to find the products you want at
       the best price.
     </p>
     <SecondSlider/>
     <div className={Styles.hrDiv}>
       <hr />
       <p>&nbsp;&nbsp; &nbsp; Special Offers &nbsp; &nbsp;&nbsp;</p>
     </div>
     <ThirdSlider />
     <button className='view'>View More</button>
   <div className="t">
   <Trending></Trending>
   </div>
   <div className="comuni">
   <Community />
   </div>
    <Bottom></Bottom>
    <Footer></Footer>
    </div>
   </>
  )
}

export default Home