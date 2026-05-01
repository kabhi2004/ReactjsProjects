import './App.css'
import Navigation from './Components/Navigation';
import ContactHeader from './Components/ContactHeader';
import ContactForm from './Components/ContactForm';

function App() {


  return (
    <>
    <Navigation/>
    <main className='mainContainer'>
      <ContactHeader/>
      <ContactForm/>
    </main>
    
      
    </>
  )
}

export default App
