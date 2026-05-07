import styled from "styled-components"

export const Button=styled.button`
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


export const OutlineButton=styled(Button)`
background-color:white;
color:black;
border:1px solid black;
&:hover{
background-color:white;
color:black;
border:1px solid black;
transition: 0.3s background ease-in;
}
`;