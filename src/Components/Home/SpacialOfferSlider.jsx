import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import Styles from "./FirstSlider.module.css";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <BsArrowRight
      className={className}
      style={{
        ...style,
        display: "block",
        color: "#7d7d7d",
        height: "2.5rem",
        width: "2.5rem",
        position:"relative",
        top:"-56vh",
        left:"86vw",
   
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <BsArrowLeft
      className={className}
      style={{
        ...style,
        display: "block",
        color: "#7d7d7d",
        height: "2.5rem",
        width: "2.5rem",
        marginLeft:"-5vh",
        marginTop:"-14vh"
      }}
      onClick={onClick}
    />
  );
}

const ThirdSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div
      style={{
        width: "85.7%",
        margin: "auto",
        marginTop: "40px",
        marginBottom: "200px",
      }}
    >
      <Slider {...settings}>
        <div  className={Styles.popUp__3} >
          <div>
               <img  src="https://cdn.modesens.com/banner/20220626-modesens-Harrods-364x484.jpg"   alt=""    width="100%"   height="100%"           />
          </div>
          <div>
            <p>Don't Pass Up This Sale Preview</p>
            <p>Get 30% off before anyone else</p>
            <button>SHOP NOW</button>
          </div>
        </div>
        <div className={Styles.popUp__4}>
          <div>
            <img
              src="https://cdn.modesens.com/banner/20220624-modesens-UO-364x484.jpg"
              alt=""
              width="100%"
              height="100%"
            />
          </div>
          <div>
            <p>Look(s) On The Bright Side</p>
            <p>Enjoy 25% of dresses</p>
            <button>SHOP NOW</button>
          </div>
        </div>
        <div  className={Styles.popUp__5}>
          <div>
            <img
              src="https://cdn.modesens.com/banner/20220626-modesens-Allsaints-364x484.jpg"
              alt=""
              width="100%"
              height="100%"
            />
          </div>
          <div>
            <p>Check Out The AllSaints' style Fore.. </p>
            <p>Prepare for the super sale at 40% off</p>
            <button>SHOP NOW</button>
          </div>
        </div>
        <div className={Styles.popUp__6}>
          <div>
            <img
              src="https://cdn.modesens.com/banner/20220615-modesens-SummerFashionGuide-364x484.jpg"
              alt=""
              width="100%"
              height="100%"
            />
          </div>
          <div>
            <p>Less Season and More Sizes</p>
            <p>Blog by SSENCE</p>
            <button>Read Now</button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default ThirdSlider;
