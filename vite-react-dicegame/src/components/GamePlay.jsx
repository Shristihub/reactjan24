import styled from "styled-components";
import styles from "./GamePlay.module.css";
import NumberSelector from "./NumberSelector";
import Score from "./Score";
import RollDice from "./RollDice";
import { useState } from "react";
import dice_1 from "../assets/dices/dice_1.png";
import dice_2 from "../assets/dices/dice_2.png";
import dice_3 from "../assets/dices/dice_3.png";
import dice_4 from "../assets/dices/dice_4.png";
import dice_5 from "../assets/dices/dice_5.png";
import dice_6 from "../assets/dices/dice_6.png";

const GamePlay = () => {
  const [selectedNum, setSelectedNum] = useState();
  const [currentDice,setCurrentDice] = useState(1);
  const [diceImg,setDiceImg]=useState(dice_1)
  const [score,setScore] = useState(0);
  const[error,setError] = useState();
  const genRandomNumber = (min, max)=> {
    let val = Math.floor(Math.random() * (max - min) + min);
    return val;
  }
  const rollDice = ()=>{
    if(!selectedNum){
      setError("please select a number");
      return
    }
    setError("")
    let randomNum = genRandomNumber(1,7);
    setCurrentDice(prev=>randomNum);
    let val = `${currentDice}`;
    console.log(val);
    if(val==1) setDiceImg(dice_1);
    if(val==2)setDiceImg(dice_2);
    if(val==3)setDiceImg(dice_3);
    if(val==4)setDiceImg(dice_4);
    if(val==5)setDiceImg(dice_5);
    if(val==6)setDiceImg(dice_6);
    console.log(diceImg);
    if(selectedNum==randomNum) setScore(prev=>prev+randomNum)
    else setScore(prev=>prev-randomNum);
  setSelectedNum(undefined)
  }
  return (
      <MainContainer>
        <div className="main_header">
        <Score scoreValue = {score}></Score>
        <NumberSelector errorMsg ={error} setError ={setError}
        selectedNum={selectedNum} setSelectedNum={setSelectedNum}/>
        </div>
        <RollDice currentDice={currentDice} 
                  diceImg={diceImg}
                  rollDice={rollDice}
          />
          <div className="btns">
            <Button>reset</Button>
          </div>
      </MainContainer>
  
  );
};

export default GamePlay;
const MainContainer = styled.main`
 padding-top:70px;
 /* display: flex; 
 align-items: center; */
 .main_header{
  display: flex;
  align-items: end;
  justify-content: space-around;
 }
`;
const Button = styled.button`
  
`
