import  styled from "styled-components"


function RoleDice({CurrentDice,rollDice}){
   


    return(<>
    <DiceContainer>
      <div  onClick={rollDice}className="dice">
        <img src={`/Images/dice_${CurrentDice}.png`} alt="dice 1 Image" />
      </div>
      <p>
        Click on Dice to roll
      </p>
    </DiceContainer>
    </>)
}

export default RoleDice;


const DiceContainer=styled.div`
display:flex;
flex-direction:column;
align-items:center;

.dice{
cursor:pointer;

}

margin-top:100px;


`;