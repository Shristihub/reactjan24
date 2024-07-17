import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import ContactHeader from './components/ContactHeader/ContactHeader'
import  Navbar  from './components/Navibar/Navbar'
function App() {

  return (
    <>
    <Navbar></Navbar>
    <main className='main_container'>
    <ContactHeader/>
    <ContactForm/>
    </main>
    </>
  )
}

export default App
