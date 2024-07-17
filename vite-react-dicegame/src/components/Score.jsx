import styled from "styled-components";
import styles from "./GamePlay.module.css";

const Score = ({scoreValue}) => {
  return (
    <ScoreContainer>
    <h1>{scoreValue}</h1>
    <p>Total Score</p>
  </ScoreContainer>
  )
}

export default Score;

const ScoreContainer = styled.div`
    text-align:center;
    max-width:200px;
    h1{
        font-weight: 500;
        font-size: 100px;
        height: 112px;
        line-height: 150px;
    }
    p{
        font-weight: 500;
        font-size: 24px;
        line-height: 38px;
    }

`