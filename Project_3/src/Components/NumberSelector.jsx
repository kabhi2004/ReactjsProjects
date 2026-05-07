import styled from "styled-components"
import {useState} from "react";

function NumberSelector({setError,Error,SelectedNo,setSelected})
{
    
    const arrNumber=[1,2,3,4,5,6];
    console.log(SelectedNo);
    const ErrorHandler=(value)=>{
        setSelected(value);
        setError("");
    }
    return(
    <NumberSelectordiv>
        <p className="Error">{Error}</p>
        <div  className="flex">
    {
        arrNumber.map((value,i)=><Box 
        $isselected={value===SelectedNo}
        onClick={()=>{ErrorHandler(value)}} key={i}>{value}</Box>)
    }
    </div>
    <p>Select No.</p>
  
    
</NumberSelectordiv>
    )
}

export default NumberSelector;

const  NumberSelectordiv=styled.div`
display:flex;
flex-direction:column;
align-items:end;
.Error{
color:red;
font-size:22px;
fonr-weight:600}
.flex{
display:flex;
gap:32px}
p{
font-size:25px;
font-weight:500;}
`;
const Box=styled.div`
height:72px;
width:72px;
border:2px solid black;
display:grid;
place-items:center;
font-size:23px;
font-weight:800;
background-color:${(props)=>props.$isselected?"Black":"white"};
color:${(props)=>props.$isselected?"white":"black"};

`;