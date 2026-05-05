import styled from "styled-components"
function Home({toggle})
{
    return(<>
    <Container>
        <div>
            <img src="/Images/dices.png"/>
        </div>
        <div className="content">

            <h1>Dice Game </h1>
            
            <div>
            <Button onClick={toggle}>Play Game</Button>
            </div>
        </div>
    </Container>
    
    </>)
}

export default Home;

const Container=styled.div`
max-width:1180px;
display:flex;
margin:0 auto;
height:100vh;
align-items:center;
.content{
display:flex;
flex-direction:column;
justify-content:end;
h1{
font-size:96px;
white-space:nowrap;
}}
`;

const Button=styled.button`
background-color:black;
color:white;
radius:5px;
padding:10px 18px;
min-width:220px;
border:none;
font-size:16px;
border:1px solid transparent;
transition:0.4s background ease-out;
cursor:pointer;

&:hover{
background-color:white;
color:black;
border:1px solid black;
transition: 0.3s background ease-in;
}

`;