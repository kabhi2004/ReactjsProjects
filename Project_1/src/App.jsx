import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navigation from './Components/Navigation'
import Hero from './Components/Hero'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navigation/>
    <Hero/>
     
    </>
  )
}

export default App
