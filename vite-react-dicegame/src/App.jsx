import styled from "styled-components";
import "./App.css";
import GameStart from "./components/GameStart";
import { useState } from "react";
import GamePlay from "./components/GamePlay";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(true);
  const togglePlay =()=>{
    setIsGameStarted((prev)=>!prev);
  };
   return (
    <div>

    {isGameStarted?<GamePlay/>:<GameStart toggle={togglePlay}/>}
    </div>
  );
}

export default App;

// const Button = styled.button`
//   background-color: black;
//   color: white;
//   padding: 8px;
//   `;