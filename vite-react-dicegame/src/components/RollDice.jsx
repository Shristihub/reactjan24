import styled from "styled-components";

import { useState } from "react";
const RollDice = ({diceImg,rollDice}) => {
  // const [currentDice,setCurrentDice] = useState(1);
  // const[diceImg,setDiceImg]=useState(dice_1)
  
  return (
    <DiceContainer>
      <div className="diceroll" onClick={()=>rollDice()}>
        <img src={diceImg} alt="dice1" />
      </div>
      <p>Click the dice to roll</p>
      <Button>Reset Scores</Button>
      <button>Show Rules</button>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 48px;
  align-items: center;
  gap:15px;
  p{
    /* font-weight: 500; */
    font-size: 24px;
  }
  .diceroll{
    cursor: pointer;
  }
`;
const Button = styled.button`
  background-color: black;
  color: white;

`