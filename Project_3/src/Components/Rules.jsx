import styled from "styled-components";
 
function Rules(){
    return(
       <RulesContainer>
        <h2>How to play dice game</h2>
        <p>Select any number</p>
        <p>
            Click on dice image
        </p>
        <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
        <p>if you get wrong guess then  2 point will be dedcuted </p>
       </RulesContainer>
    )
}

export default Rules;

const RulesContainer=styled.div`
padding:20px;
margin:0 auto;
margin-top:50px;
border-radius:20px;
background-color:pink;
max-width:700px;

`;