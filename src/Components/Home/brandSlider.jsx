import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Styles from "./FirstSlider.module.css";

function NextArrow(props) {
  // console.log("hello world")
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
        left:"82vw",
        top:"-14vh"
       
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
        height: "2rem",
        width: "2.5rem",
        marginTop:"-3vh",
        marginLeft:"-4vh"
        
      }}
      onClick={onClick}
    />
  );
}

const SecondSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="r" style={{marginTop: "60px",marginLeft:"20vh" }}>
      <Slider {...settings}>
        <div className={Styles.popUp_2}>
          <img src={require("./img/img1.png")} alt=""  height="100%"   width="100%"  />
        </div>
        <div className={Styles.popUp_2}>
          <img   src={require("./img/img2.png")}    alt=""
            height="100%"
            width="100%"
          />
        </div>
      </Slider>
    </div>
  );
};

export default SecondSlider;
