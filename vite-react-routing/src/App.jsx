import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import PageNotFound from './components/PageNotFound'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs/ContactUs'
import Products from './components/Products/Products'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar></Navbar>}>
      <Route index element={<Home/>}></Route>
      <Route path='aboutus' element={<AboutUs/>}></Route>
      <Route path='contactus' element={<ContactUs/>}></Route>
      <Route path='products' element={<Products/>}></Route>
      <Route path='*' element={<PageNotFound/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
