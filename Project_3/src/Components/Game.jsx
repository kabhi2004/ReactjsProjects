import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RoleDice from "./RoleDice";
import Rules from "./Rules"
import { useState } from "react";
import { Button, OutlineButton } from "../Styled/Button";
function Game() {
  const [Score, setScore] = useState(0);
  const [CurrentDice, setCurrentDice] = useState(1);
  const [SelectedNo, setSelected] = useState();
  const [Error, setError] = useState();
  const [showRules,setshowRules]=useState(false);

  const generateNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const Resetbtn=()=>{
    setScore(0);
  }
  const visiblerules=()=>{
    setshowRules((prev)=>!prev);
  }

  const rollDice = () => {
    if (!SelectedNo) {
      setError("Your are not Selected Any Number");
      return;
    }

    const random = generateNumber(1, 6);
    setCurrentDice((prev) => random);

    if (SelectedNo === random) {
      setScore((prev) => prev + random);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelected(undefined);
  };

  return (
    <>
      <MainContainer>
        <div className="TopSection">
          <TotalScore Score={Score} />
          <NumberSelector
            setError={setError}
            Error={Error}
            SelectedNo={SelectedNo}
            setSelected={setSelected}
          />
        </div>
        <RoleDice CurrentDice={CurrentDice} rollDice={rollDice} />
        <div className="btns">
          <OutlineButton onClick={Resetbtn}>Reset</OutlineButton>
          <Button onClick={visiblerules}>{showRules?"Hide":"Show"} Rules</Button>
        </div>
        {showRules&&<Rules/>}
      </MainContainer>
    </>
  );
}
export default Game;

const MainContainer = styled.main`
  padding-top: 70px;
  .TopSection {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
 .btns{
 margin-top:40px;
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:center;
 gap:20px}
`;
