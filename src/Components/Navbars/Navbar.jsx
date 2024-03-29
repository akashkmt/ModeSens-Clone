import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import Data from "./Data";
import { AuthContext } from "../../context/AuthContext";
import { useSelector } from "react-redux";
import SignupPopup from "../popup/SignUpPopUp";
import { CartCountContext } from "../../context/SetCart";

function Navbar() {
  const [menu, setMenu] = useState("");
  const {cartCount,setCartCount} = useContext(CartCountContext)
  // console.log("navbar")
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navbarDives">
      <div className="navbares">
        <div style={{marginLeft:"1vh"}} className="logo">
          <Link to="/" ><img
            src="https://cdn.modesens.com/static/img/20190228newlogo-black.svg"
            alt=""
          ></img></Link>
        </div>
        <div className="linkses">
          <Link
            to="womens"
            onMouseEnter={() => {
              // console.log("mouse enter")
              let d = "women";
              setMenu(<Data r={d} />);
            }}
            // onMouseLeave={() => {
            //   console.log("mouse leaved")
            //   setMenu("");
            // }}
          >
            WOMEN
          </Link>
          <Link
            to="mens"
            onMouseEnter={() => {
              // console.log("mouse enter")
              let d = "mens";
              setMenu(
                <Data
                  r={d}
                 
                />
              );
            }}
          //   onMouseLeave={() => {
          //     console.log("mouse leaved")
          //     setTimeout(() =>{setMenu("");},500)
             
          //  }}
          >
            MEN
          </Link>
          <Link
            to="Beauty"
            onMouseEnter={() => {
              let d = "beauty";
              setMenu(
                <Data
                  r={d}
                  // onMouseLeave={() => {
                  //   setMenu("");
                  // }}
                />
              );
            }}
          >
            BEAUTY
          </Link>
          <Link
            to="men"
            onMouseEnter={() => {
              let d = "kids";
              setMenu(
                <Data
                  r={d}
                  // onMouseLeave={() => {
                  //   setMenu("");
                  // }}
                />
              );
            }}
          >
            KIDS
          </Link>
          <Link
            to="/"
            onMouseEnter={() => {
              let d = "home";
              setMenu(
                <Data
                  r={d}
                  // onMouseLeave={() => {
                  //   setMenu("");
                  // }}
                />
              );
            }}
          >
            HOME
          </Link>
          <Link
            to="offers"
            onMouseEnter={() => {
              let d = "offers";
              setMenu(
                <Data
                  r={d}
                  // onMouseLeave={() => {
                  //   setMenu("");
                  // }}
                />
              );
            }}
          >
            OFFERS
          </Link>
          <Link
            to="design"
            onMouseEnter={() => {
              let d = "designers";
              setMenu(
                <Data
                  r={d}
                  // onMouseLeave={() => {
                  //   setMenu("");
                  // }}
                />
              );
            }}
          >
            DESIGNERS
          </Link>
          <Link
            to="community"
            onMouseEnter={() => {
              let d = "community";
              setMenu(
                <Data
                  r={d}
                  // onMouseLeave={() => {
                  //   setMenu("");
                  // }}
                />
              );
            }}
          >
            COMMUNITY
          </Link>
          <Link
            to="whymodsens"
            onMouseEnter={() => {
              let d = "why";
              setMenu(
                <Data
                  r={d}
                  // onMouseLeave={() => {
                  //   setMenu("");
                  // }}
                />
              );
            }}
          >
            WHY MODESENS
          </Link>
        </div>
        <div className="rightIcons">
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/20px-Flag_of_India.svg.png"
              alt=""
            ></img>
          </div>
          <SignupPopup />
          {/* <div>
            
            <img
              src="https://cdn.modesens.com/static/img/20200612shopping_bag2.svg"
              alt=""
            />
            
          </div> */}
          <div className="add-to-bag"> <Link style={{ textDecoration: 'none'}}
 to="/checkout">
            <img
              src="https://cdn.modesens.com/static/img/20200612shopping_bag2.svg"
              alt=""
              /><span> {cartCount} </span>
              </Link>
          </div>
          <div className="search">
            <img
              style={{ width: "50%" }}
              src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png"
              alt=""
            />
            <input type="text" placeholder="SEARCH" />
          </div>
          <div
            style={{ marginTop: "-10px", cursor: "pointer" }}
            onClick={() => {setIsAuth(false);localStorage.removeItem("modesensUserId");setCartCount(0);navigate("/")}}
          >
            {isAuth ? "Log Out" : ""}
          </div>
        </div>
      </div>
      <div>{menu}</div>
    </div>
  );
}

export default Navbar;
