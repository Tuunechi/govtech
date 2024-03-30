import { useState } from 'react'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './pages/navbar/navbar'
import Home from './pages/home/home'
import About from './pages/about/about'
import { Route, Routes } from 'react-router-dom'
import Team from './pages/team/team'
import Contact from './pages/contact/contact'


function App() {

  return (
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/team' element={<Team/>}/>
     <Route path='/contact' element={<Contact/>}/>
    </Routes>
  )
}

export default App
