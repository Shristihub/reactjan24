import dices from "../assets/dices.png";
import styled from "styled-components";
const GameStart = ({toggle}) => {
 
  return (
    <Container>
      <div>
        <img src={dices} alt="dice" />
      </div>
      <div className="main_title">
        <h1>DICE GAME</h1>
        <Button onClick = {toggle}>Play now</Button>
      </div>
    </Container>
  );
};

export default GameStart;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;

  
.main_title{
   h1{
    white-space: nowrap;
    /* line-height: 144px; */
    /* font-weight: 700; */
    font-size: 96px;
    /* max-width: 528px; */
   } 
}

`;
const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px 18px;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  font-size:16px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.4s background ease-in;

  &:hover{
    background-color: white;
    border: 1px solid black;
    color: black;
   transition: 0.3s background ease-in;


  }
`;
