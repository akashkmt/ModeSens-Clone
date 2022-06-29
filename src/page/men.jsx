import React from "react";
import styled from "styled-components";
// import { FilterDiv } from "../components/Beauty/FilterSection";
import Items from '../Products/items'
import { LeftSide } from "../Products/LeftSide";

const Wrapper = styled.div`
  display: flex;
  background:white;
  color:black;
`;
const Left = styled.div`
  width: 25%;
  border-right: 1px solid #f5f5f5;
`;
const Right = styled.div`
  width: 75%;
  padding-left: 10px;
  
`;

const Men = () => {
  return (
    <div>
      <Wrapper>
        <Left>
          <LeftSide />
          {/* <h1>left</h1> */}
        </Left>
        <Right>
          <Items props='mens' />
        </Right>
      </Wrapper>
    </div>
  );
};

export default Men;
