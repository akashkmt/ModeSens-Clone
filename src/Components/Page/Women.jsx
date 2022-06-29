import React from "react";
import styled from "styled-components";
import { LeftSide } from "../Products/LeftSide";
import Items from '../Products/items'

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

const Women = () => {
  return (
    <div>
      <Wrapper>
        <Left>
          <LeftSide />
          {/* <h1>left</h1> */}
        </Left>
        <Right>
          <Items props='womens'/>
        </Right>
      </Wrapper>
    </div>
  );
};

export default Women;
