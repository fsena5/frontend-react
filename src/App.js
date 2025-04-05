import React from "react"
import { Routes,Route } from "react-router-dom"
import Home from './pages/Home/Home'
import Menu from "./pages/Menu/Menu"
import Delivery from "./pages/Delivery/Delivery"

import Navbar from "./components/Navbar/Navbar"
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/menu" element={<Menu />} />
    <Route path="/delivery" element={<Delivery/>}/>
    <Route path="/" element={<Home/>}/>
    <Route path="/" element={<Home/>}/>
    <Route path="/" element={<Home/>}/>
    
  </Routes>
  <Footer/>
    </div>
    
  );
}

export default App;
