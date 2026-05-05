import Home from './Components/Home'
import './App.css'
import {useState} from "react"




function App() {
  const [isGameStarted,setGameStarted]=useState(false);

  const toggleGamePlay=()=>{
    setGameStarted((prev)=>!prev)
  }
  


  return (
    <>
    {isGameStarted?<Game/>:<Home  toggle={toggleGamePlay}/>}
    <Home/>
    
   
     
    </>
  )
}

export default App
