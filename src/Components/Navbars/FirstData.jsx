import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import SecondData from "./SecondData";
function FirstData({ r }) {
  const [menu, setMenu] = useState("");
  let secData = [
    "SHOPPING",
    "CLOTHING",
    "BAGS",
    "SHOES",
    "ACCEESSORIES",
    "BEAUTY",
    "SALES",
    "PRE OWNED",
    "OCCASIONS",
  ];

  return (
    <>
      <div >
        {secData.map((el, i) => {
          let a = el.toLowerCase();
          return (
            <div style={{backgroundColor:"transparent"}} key={i} className="secData">
              <a
                href={`/${r}/${a}`}
                onMouseEnter={(e) => {
                  e.preventDefault();
                  setMenu(<SecondData f={r} s={a}></SecondData>);
                }}
                // onMouseLeave={() => setMenu("")}
              >
                {el}
              </a>
            </div>
          );
        })}
      </div>
      <div style={{backgroundColor:"transparent"}} className="firstdataes">{menu}</div>
    </>
  );
}

export default FirstData;
