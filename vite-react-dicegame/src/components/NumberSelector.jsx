import React, { useState } from "react";
import styled from "styled-components";

const NumberSelector = ({selectedNum,setSelectedNum,errorMsg,setError}) => {
  const numsArray = [1, 2, 3, 4, 5, 6];
 const numberSelectorHandler = (value)=>{
  setSelectedNum(value);
  setError("")
 }
  // console.log(selectedNum);
  return (
     <NumContainer>
      <p className="error">{errorMsg}</p>
        <div className="child">
        {numsArray.map((value, index) => (
          <Box 
          isSelected = {value===selectedNum}
          key={index} 
          onClick={()=>numberSelectorHandler(value)}>{value}</Box>
        ))}
    </div>
      <p>Select Number</p>
      </NumContainer>
    
  );
};

export default NumberSelector;
const NumContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap:30px;
  align-items: end;

  .child{
    display: flex;
    gap:24px;
  }
  p{
    font-weight: 500;
    font-size: 24px;
    height:36px;
  }
  .error{
    color: red;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props)=>props.isSelected?'black':'white'};
  color: ${(props)=>props.isSelected?'white':'black'};
`;
